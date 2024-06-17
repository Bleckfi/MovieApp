"use client";
import { useSession } from "next-auth/react";
import Catalog from "../Components/Catalog";
import "../Styles/Profile.scss";
import { useEffect, useState } from "react";

async function checkUserExists(email) {
  const response = await fetch(`http://localhost:3000/api/user?email=${email}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data.exists;
}

async function addUser(user) {
  const response = await fetch(`http://localhost:3000/api/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

function Profile() {
  const { data: session, status } = useSession();
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const handleUserCheck = async () => {
      if (session?.user?.email) {
        try {
          const userExists = await checkUserExists(session.user.email);
          if (!userExists) {
            await addUser({
              email: session.user.email,
              name: session.user.name,
              image: session.user.image,
              favorite: [],
            });
          }
        } catch (error) {
          console.error("Error checking or adding user:", error);
        }
      }
    };

    if (session?.user?.image) {
      const img = new Image();
      img.src = session.user.image;
      img.onload = () => setImageLoaded(true);
    }

    handleUserCheck();
  }, [session]);

  return (
    <>
      <div className="profile_container">
        <div className="profile_main_user_info">
          <div className="profile_avatar_status">
            <div
              className="user_avatar"
              style={{ width: "125px", height: "125px" }}
            >
              <div
                className="user_avatar_container"
                style={{
                  width: "162.5px",
                  height: "162.5px",
                  left: "-18.75px",
                  top: "-18.75px",
                }}
              >
                <div className="user_avatar_container_child"></div>
              </div>
              {imageLoaded && (
                <div
                  className="user_avatar_img"
                  style={{
                    width: "125px",
                    height: "125px",
                    backgroundImage: `url(${session.user.image})`,
                  }}
                ></div>
              )}
              <div className="avatar_badge_cont">
                <div
                  className="avatar_badge"
                  style={{ background: "rgb(95, 154, 213)" }}
                >
                  5
                </div>
              </div>
            </div>
            <div className="profile_main_user_info_username_status_container">
              <div className="profile_main_user_info_username">
                {session?.user?.name || "User Name"}
              </div>
              <div className="profile_main_user_info_status"></div>
              <div
                className="profile_main_user_info_online"
                style={{ background: "rgb(27, 77, 27)" }}
              >
                <div
                  className="profile_main_user_info_online_text"
                  style={{ color: "rgb(45, 183, 45)" }}
                >
                  Онлайн
                </div>
              </div>
              <div className="profile_main_user_info_badge_list"></div>
            </div>
          </div>
        </div>
        <div className="anime_central_comments_block">
          <div className="comments_block_list">
            <Catalog />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
