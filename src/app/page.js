import Catalog from "./Components/Catalog";
import VideoWelcome from "./Components/welcomeVideo";
import axios from "axios";
export default async function Home() {
  const nowCame = await getStatus("status", "ongoing", "anime_status");
  const came = await getStatus("status", "released", "anime_status");
  const highRate = await getStatus("highRate", "8", "shikimori_rating");
  const film = await getStatus("movie", "movie", "anime_kind");

  return (
    <>
      <VideoWelcome />
      <Catalog status="Онгоинг" data={nowCame} />
      <Catalog status="Вышел" data={came} />
      <Catalog status="С высокой оценкой" data={highRate} />
      <Catalog status="Фильм" data={film} />
    </>
  );
}

const getStatus = async (api, status, anime_status) => {
  try {
    const res = await axios.get(
      `http://localhost:3000/api/${api}?material_data.${anime_status}=${status}`
    );
    return {
      anime: res.data,
    };
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
    return null;
  }
};
