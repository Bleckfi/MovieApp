import Catalog from "./Components/Catalog";
import VideoWelcome from "./Components/welcomeVideo";
import { getStatus } from "./layout";
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
