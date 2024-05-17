"use client";
import Catalog from "./Components/Catalog";
import VideoWelcome from "./Components/welcomeVideo";
import axios from "axios";
export default async function Home() {
  const data = await getData();
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
        <Catalog key={index} status={el} data={data} />
      ))}
    </>
  );
}

export const getData = async () => {
  const res = await axios.get("http://localhost:3000/api/welcome");
  return {
    anime: res.data,
  };
};
