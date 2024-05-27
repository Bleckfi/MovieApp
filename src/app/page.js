import Catalog from "./Components/Catalog";
import VideoWelcome from "./Components/welcomeVideo";
import axios from "axios";
export default async function Home() {
  const nowCame = await getStatus("Онгоинг");
  const nowWatch = await getStatus("Сейчас смотрят");
  const anons = await getStatus("Анонсы");
  const came = await getStatus("Вышел");
  const film = await getStatus("Фильм");

  return (
    <>
      <VideoWelcome />
      <Catalog status="Онгоинг" data={nowCame} />
      <Catalog status="Сейчас смотрят" data={nowWatch} />
      <Catalog status="Анонсы" data={anons} />
      <Catalog status="Вышел" data={came} />
      <Catalog status="Фильм" data={film} />
    </>
  );
}

export const getStatus = async (status) => {
  try {
    const res = await axios.get(
      `http://localhost:3000/api/status?status=${status}`
    );
    return {
      anime: res.data,
    };
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
    return null;
  }
};
