"use client";
import "../../Styles/AnimeID.scss";
import useFetchAnimeData from "../../Components/animeFetch";
import Image from "next/image";
function Animeid({ params }) {
  const id = params.animeid;
  const { data, isLoading } = useFetchAnimeData(id);
  if (isLoading) return <p>Loading...</p>;
  if (!data || !data[0]) {
    return <p>No data found</p>;
  }
  const anime = data[0].material_data[0];
  const desc =
    anime.anime_description ||
    anime.description ||
    "Описание скоро появится :(";
  return (
    <>
      <div
        className="body_image"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.76) 100%), linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(8, 8, 8) 65%), url(${anime.poster_url})`,
          width: "100%",
          position: "absolute",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "50%",
          filter: "blur(4px)",
          backgroundRepeat: "no-repeat",
          zIndex: "-1",
        }}
      ></div>
      <div className="anime_body">
        <div className="anime_left_body">
          <a href={`/play/${data[0]._id}`}>
            <div className="anime_body_poster">
              <Image width={302} height={463} src={anime.poster_url} alt="" />
              <div className="anime_body_poster_sub">
                <div className="anime_body_poster_sub_watch">Смотреть</div>
              </div>
            </div>
          </a>
          <div className="anime_add_to_folders">
            <button className="anime_add_to_folder">
              <span onClick={() => {}}>Добавить в избранное</span>
            </button>
            <div className="list_name_folder hidden">
              <div className="list_name_folder_item add_user_folder">
                Создать папку
              </div>
            </div>
          </div>
        </div>
        <div className="anime_body_center">
          <div className="title_name">
            {data[0].title} / {data[0].title_orig}
          </div>
          <div class="anime_central_body_genres_text">
            {anime.anime_status} |
            {anime?.anime_genres.map((el) => (
              <span key={el._id}> {el} |</span>
            ))}
          </div>
          <span className="desc_title">Описание</span>
          <div className="desc">{desc}</div>
        </div>
        <div className="anime_right_body">
          <div className="rank">{anime.shikimori_rating}</div>
        </div>
      </div>
    </>
  );
}

export default Animeid;
