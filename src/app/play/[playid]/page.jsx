"use client";
import "../../Styles/Play.scss";
import useFetchAnimeData from "../../Components/animeFetch";

function Play({ params }) {
  const id = params.playid;
  const dataTemp = useFetchAnimeData(id);
  const data = dataTemp.data;
  if (!data) return <div></div>;

  return (
    <>
      <div className="player_page">
        <div style={{ margin: "0px 20px" }}>
          <div className="player_page_player player_page_panel">
            <iframe
              title="player"
              src={data[0].player_link}
              className="player_page_player_iframe"
              allowFullScreen=""
              allow="autoplay *; fullscreen *"
              style={{ zIndex: 17 }}
            ></iframe>
          </div>
          <div className="player_page_info">
            <p className="player_page_info_title">{data[0].title}</p>
            <div className="player_page_info_under_title_block">
              <div className="player_page_info_under_title_block_info"></div>
              <div className="flex">
                <div className="like_block">
                  <div className="like_block_el like_block_el_left">
                    <svg
                      height="20"
                      widths="20"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      style={{ fill: "rgb(221, 221, 221)" }}
                    >
                      <path d="M323.8 34.8c-38.2-10.9-78.1 11.2-89 49.4l-5.7 20c-3.7 13-10.4 25-19.5 35l-51.3 56.4c-8.9 9.8-8.2 25 1.6 33.9s25 8.2 33.9-1.6l51.3-56.4c14.1-15.5 24.4-34 30.1-54.1l5.7-20c3.6-12.7 16.9-20.1 29.7-16.5s20.1 16.9 16.5 29.7l-5.7 20c-5.7 19.9-14.7 38.7-26.6 55.5c-5.2 7.3-5.8 16.9-1.7 24.9s12.3 13 21.3 13L448 224c8.8 0 16 7.2 16 16c0 6.8-4.3 12.7-10.4 15c-7.4 2.8-13 9-14.9 16.7s.1 15.8 5.3 21.7c2.5 2.8 4 6.5 4 10.6c0 7.8-5.6 14.3-13 15.7c-8.2 1.6-15.1 7.3-18 15.1s-1.6 16.7 3.6 23.3c2.1 2.7 3.4 6.1 3.4 9.9c0 6.7-4.2 12.6-10.2 14.9c-11.5 4.5-17.7 16.9-14.4 28.8c.4 1.3 .6 2.8 .6 4.3c0 8.8-7.2 16-16 16H286.5c-12.6 0-25-3.7-35.5-10.7l-61.7-41.1c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l61.7 41.1c18.4 12.3 40 18.8 62.1 18.8H384c34.7 0 62.9-27.6 64-62c14.6-11.7 24-29.7 24-50c0-4.5-.5-8.8-1.3-13c15.4-11.7 25.3-30.2 25.3-51c0-6.5-1-12.8-2.8-18.7C504.8 273.7 512 257.7 512 240c0-35.3-28.6-64-64-64l-92.3 0c4.7-10.4 8.7-21.2 11.8-32.2l5.7-20c10.9-38.2-11.2-78.1-49.4-89zM32 192c-17.7 0-32 14.3-32 32V448c0 17.7 14.3 32 32 32H96c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32H32z"></path>
                    </svg>
                    <span className="like_block_count">386</span>
                  </div>
                  <div className="like_block_el like_block_el_right">
                    <svg
                      height="20"
                      widths="20"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      style={{ fill: "rgb(221, 221, 221)" }}
                    >
                      <path d="M323.8 477.2c-38.2 10.9-78.1-11.2-89-49.4l-5.7-20c-3.7-13-10.4-25-19.5-35l-51.3-56.4c-8.9-9.8-8.2-25 1.6-33.9s25-8.2 33.9 1.6l51.3 56.4c14.1 15.5 24.4 34 30.1 54.1l5.7 20c3.6 12.7 16.9 20.1 29.7 16.5s20.1-16.9 16.5-29.7l-5.7-20c-5.7-19.9-14.7-38.7-26.6-55.5c-5.2-7.3-5.8-16.9-1.7-24.9s12.3-13 21.3-13L448 288c8.8 0 16-7.2 16-16c0-6.8-4.3-12.7-10.4-15c-7.4-2.8-13-9-14.9-16.7s.1-15.8 5.3-21.7c2.5-2.8 4-6.5 4-10.6c0-7.8-5.6-14.3-13-15.7c-8.2-1.6-15.1-7.3-18-15.2s-1.6-16.7 3.6-23.3c2.1-2.7 3.4-6.1 3.4-9.9c0-6.7-4.2-12.6-10.2-14.9c-11.5-4.5-17.7-16.9-14.4-28.8c.4-1.3 .6-2.8 .6-4.3c0-8.8-7.2-16-16-16H286.5c-12.6 0-25 3.7-35.5 10.7l-61.7 41.1c-11 7.4-25.9 4.4-33.3-6.7s-4.4-25.9 6.7-33.3l61.7-41.1c18.4-12.3 40-18.8 62.1-18.8H384c34.7 0 62.9 27.6 64 62c14.6 11.7 24 29.7 24 50c0 4.5-.5 8.8-1.3 13c15.4 11.7 25.3 30.2 25.3 51c0 6.5-1 12.8-2.8 18.7C504.8 238.3 512 254.3 512 272c0 35.3-28.6 64-64 64l-92.3 0c4.7 10.4 8.7 21.2 11.8 32.2l5.7 20c10.9 38.2-11.2 78.1-49.4 89zM32 384c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H32z"></path>
                    </svg>
                    <span className="like_block_count">54</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[20px]">
              <a
                className="player_page_info_under_title_block_back"
                href={`/anime/${data[0]._id}`}
                style={{ width: "fit-content" }}
              >
                Назад к релизу
              </a>
            </div>
          </div>
        </div>
        <div className="edit_settings_pop_up hidden"></div>
        <div className="player_page_menu player_page_panel">
          <div className="tab_panel_right_big_buttons">
            <div className="tab_panel_right_button tab_panel_right_button_big">
              <svg
                width="44"
                height="44"
                fill="#ddd"
                version="1.1"
                viewBox="0 0 70 70"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <rect height="32" width="4" x="49" y="19"></rect>
                  <polygon points="30,19 27.172,21.828 38.343,33 17,33 17,37 38.343,37 27.172,48.172 30,51 46,35  "></polygon>
                </g>
              </svg>
            </div>
            <div
              className="tab_panel_right_button tab_panel_right_button_big"
              title="Следующий эпизод"
            >
              <svg
                width="23"
                height="23"
                fill="#ddd"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                style={{ transform: "rotateZ(180deg)" }}
              >
                <path d="M18.5857864,10 L14.2928932,5.70710678 L15.7071068,4.29289322 L22.4142136,11 L15.7071068,17.7071068 L14.2928932,16.2928932 L18.5857864,12 L13,12 C6.25355783,12 4,14.3437001 4,21 L2,21 C2,13.2562999 5.13105756,10 13,10 L18.5857864,10 Z"></path>
              </svg>
              <p className="tab_panel_right_button_label">2</p>
            </div>
            <div
              className="tab_panel_right_button tab_panel_right_button_big"
              title="Перемотать опенинг"
            >
              <svg
                viewBox="0 0 24 24"
                width="23"
                height="23"
                fill="#ddd"
                xmlns="http://www.w3.org/2000/svg"
                style={{ transform: "rotateZ(180deg)" }}
              >
                <path d="M20,11.3657652 L20,6 L22,6 L22,15 L13,15 L13,13 L18.7315579,13 C18.1795202,12.2824394 17.3735974,11.2239667 16.9507899,10.7599097 C15.3322498,8.98346321 13.5911556,8 11.5,8 C6.39480927,8 4,11.397186 4,16 L2,16 C2,10.4122224 5.11034814,6 11.5,6 C14.2385197,6 16.4659682,7.25818217 18.4291826,9.41292976 C18.849288,9.87402102 19.5008294,10.7119331 20,11.3657652 Z"></path>
              </svg>
            </div>
          </div>
          <div className="tab_panel">
            <button className="active">Просмотр</button>
          </div>
          <div className="tab_content">
            <div className="tab_content_p_line" style={{ marginTop: "20px" }}>
              <div>Плеер:</div>
              <div>Kodik</div>
            </div>
            <div className="tab_content_p_line_ff"></div>
          </div>
          <div className="second_menu hidden">
            <div className="second_menu_header">
              <div className="tab_second_back">
                <svg
                  width="16"
                  height="16"
                  fill="#999"
                  version="1.1"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="352,115.4 331.3,96 160,256 331.3,416 352,396.7 201.5,256 "></polygon>
                </svg>
                <p>Назад</p>
              </div>
            </div>
            <div className="second_menu_content">
              <p className="second_menu_title"></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Play;
