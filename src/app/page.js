"use client";
import Catalog from "./Components/Catalog";
import VideoWelcome from "./Components/welcomeVideo";
export default function Home() {
  const status = [
    "Сейчас смотрят",
    "Онгоинги",
    "Анонсы",
    "С высокой оценкой",
    "Фильмы",
  ];
  return (
    <>
      <VideoWelcome />
      {status.map((el, index) => (
        <Catalog key={index} status={el} />
      ))}
    </>
  );
}
