"use client";

import "../../Styles/Animeid.scss";
import { useFetchAnimeData } from "../../Components/animeFetch";

function Animeid({ params }) {
  const id = params.animeid;
  const { data } = useFetchAnimeData(id);

  if (!data) return <div>Нет данных</div>;

  return (
    <>
      <div className="anime_body">
        <div className="anime_left_body">
          <a href={`/play/${data[0]._id}`}>
            <div className="anime_body_poster">
              <img sizes="100vw" src={data[0].img} />
              <div className="anime_body_poster_sub">
                <div className="anime_body_poster_sub_watch">Смотреть</div>
              </div>
            </div>
          </a>
          <div className="anime_add_to_folders">
            <button className="anime_add_to_folder">
              <svg
                fill="#eaeaea"
                width="20"
                height="20"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M464,128H272L208,64H48A48,48,0,0,0,0,112V400a48,48,0,0,0,48,48H464a48,48,0,0,0,48-48V176A48,48,0,0,0,464,128ZM359.5,296a16,16,0,0,1-16,16h-64v64a16,16,0,0,1-16,16h-16a16,16,0,0,1-16-16V312h-64a16,16,0,0,1-16-16V280a16,16,0,0,1,16-16h64V200a16,16,0,0,1,16-16h16a16,16,0,0,1,16,16v64h64a16,16,0,0,1,16,16Z"></path>
              </svg>
              <span>Добавить в папку</span>
            </button>
            <div className="list_name_folder hidden">
              <div className="list_name_folder_item add_user_folder">
                Создать папку
              </div>
            </div>
          </div>
        </div>
        <div className="anime_body_center">lo</div>
        <div className="anime_right_body">
          <div className="search_rank anime" style={{ color: "green" }}>
            {data[0].rate}
          </div>
        </div>
      </div>
    </>
  );
}

export default Animeid;
