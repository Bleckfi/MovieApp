import Catalog from "./Components/Catalog";
import VideoWelcome from "./Components/welcomeVideo";
import axios from "axios";
export default async function Home() {
  const nowCame = await getStatus("ongoing", "anime_status");
  const came = await getStatus("released", "anime_status");
  const film = await getStatus("movie", "anime_kind");
  return (
    <>
      <VideoWelcome />
      <Catalog status="Онгоинг" data={nowCame} />
      <Catalog status="Вышел" data={came} />
      <Catalog status="Фильм" data={film} />
    </>
  );
}

export const getStatus = async (status, anime_status) => {
  try {
    const res = await axios.get(
      `http://localhost:3000/api/status?material_data.${anime_status}=${status}`
    );
    return {
      anime: res.data,
    };
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
    return null;
  }
};
