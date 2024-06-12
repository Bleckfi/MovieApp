"use client";

import React, { useState, useRef, useEffect } from "react";
import "../Styles/Catalog.scss";
import Anime from "./Catalog_anime";

function Catalog({ data, status }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const listRef = useRef(null);

  const handleScroll = (direction) => {
    const scrollAmount = 400; // Количество пикселей для прокрутки
    if (listRef.current) {
      const newScrollPosition =
        direction === "left"
          ? Math.max(scrollPosition - scrollAmount, 0)
          : Math.min(
              scrollPosition + scrollAmount,
              listRef.current.scrollWidth - listRef.current.clientWidth
            );

      listRef.current.scrollTo({ left: newScrollPosition, behavior: "smooth" });
      setScrollPosition(newScrollPosition);
    }
  };

  return (
    <div className="catalog__container">
      <div className="status">{status}</div>
      <div className="relative">
        <div className="list" ref={listRef}>
          <div className="left_button_1" onClick={() => handleScroll("left")}>
            <svg
              height="30"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
            </svg>
          </div>
          <div className="right_button_1" onClick={() => handleScroll("right")}>
            <svg
              height="30"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
            </svg>
          </div>
          <div className="episode_space"></div>
          {data?.anime.map((el) => (
            <Anime key={el._id} data={el} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Catalog;
