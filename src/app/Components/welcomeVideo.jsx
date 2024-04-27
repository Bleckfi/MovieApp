import { createRef, useState, useEffect } from "react";
import { Player, ControlBar } from "video-react";
import "../Styles/player.scss";
function VideoWelcome() {
  const anim = [
    {
      title: "Милый во франксе",
      desc: "Тридцать первое октября 2018 года, район Сибуя. Множество простых людей заключены под магической завесой и взяты в",
      src: "https://storage.anitype.fun//op_rotate/35849/35849.webm",
      poster: "https://storage.anitype.fun//op_rotate/35849/35849.webp",
    },
    {
      title: "Магическая битва",
      desc: "Тридцать первое октября 2018 года, район Сибуя. Множество простых людей заключены под магической завесой и взяты в",
      src: "https://storage.anitype.fun//op_rotate/51009/51009.webm",
      poster: "https://storage.anitype.fun//op_rotate/51009/51009.webp",
    },
    {
      title: "Сенко",
      desc: "Тридцать первое октября 2018 года, район Сибуя. Множество простых людей заключены под магической завесой и взяты в",
      src: "https://storage.anitype.fun//op_rotate/38759/38759.webm",
      poster: "https://storage.anitype.fun//op_rotate/38759/38759.webp",
    },
    {
      title: "Поднятия уровня в одиночку",
      desc: "Десять лет назад по всему миру стали открываться некие «врата», ведущие в подземелья с монстрами, противостоять которым оказалось не под силу даже военным. Однако если успеть вовремя победить босса подземелья, то врата пропадут, не открывшись, и мирные люди не пострадают. Сразиться с боссом способны только избранные — люди, получившие особые силы, чтобы бороться с чудовищами. Таких людей назвали «охотниками». Вот только способности, которые они получают, крайне различны как по функционалу, так и по мощи. Например, охотник Сон Джину относится всего лишь к рангу Е: хоть и сильнее обычного человека, он в разы слабее любого самого слабого охотника. Он не в состоянии справиться с самым ничтожным монстром, поэтому вынужден ходить в подземелье в составе большой группы. Напарники убивают всю мелочь, так что у Сон Джину нет ...",
      src: "https://storage.anitype.fun//op_rotate/52299/52299.webm",
      poster: "https://storage.anitype.fun//op_rotate/52299/52299.webp",
    },
  ];

  const rand = () => {
    return Math.floor(Math.random() * anim.length);
  };

  const [isMuted, setIsMuted] = useState(true);
  const [animeRand, setAnimeRand] = useState("");
  const player = createRef();

  const toggleMute = () => {
    player.current.muted = false;
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    setAnimeRand(rand());
  }, []);

  return (
    <>
      <Player
        className="player"
        autoPlay
        ref={player}
        muted={isMuted}
        poster={anim[animeRand]?.poster}
      >
        <source src={anim[animeRand]?.src} />
        <ControlBar autoHide={false} />
      </Player>

      <div className="anim_container">
        <div className="anime__title">{anim[animeRand]?.title}</div>
        <div className="anime__desc">{anim[animeRand]?.desc}</div>
        <div className="anim__button_container">
          <div className="more">Подробнее</div>
        </div>
      </div>

      <div onClick={toggleMute} className="muteButton">
        {isMuted ? (
          <svg
            className="mute"
            width="2.4rem"
            height="2.4rem"
            viewBox="0 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Включить звук"
            style={{ transform: "scale(0.6)" }}
          >
            <path
              d="M6 8.5 12.5 4v16L6 15.5H2.5v-7H6Zm10.393 7.493 2.296-2.296 2.296 2.296 1.698-1.697L20.386 12l2.297-2.296-1.698-1.697-2.296 2.296-2.296-2.296-1.697 1.697L16.992 12l-2.296 2.296 1.697 1.697Z"
              fill="#fff"
            ></path>
          </svg>
        ) : (
          <svg
            className="mute"
            width="2.4rem"
            height="2.4rem"
            viewBox="0 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Выключить звук"
            data-tid="VolumeOn"
            style={{ transform: "scale(0.6)" }}
          >
            <path
              d="M24 12a11 11 0 0 1-4.219 8.672l-1.583-1.81A8.605 8.605 0 0 0 21.6 12c0-2.8-1.335-5.287-3.402-6.861l1.583-1.81A11 11 0 0 1 24 12Zm-4.722 0a6.288 6.288 0 0 1-2.614 5.108l-1.592-1.819a3.893 3.893 0 0 0 1.806-3.288c0-1.383-.72-2.597-1.806-3.289l1.592-1.82a6.288 6.288 0 0 1 2.614 5.109ZM6 8.5 12.5 4v16L6 15.5H2.5v-7H6Z"
              fill="#fff"
            ></path>
          </svg>
        )}
      </div>
    </>
  );
}

export default VideoWelcome;
