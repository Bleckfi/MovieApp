import "../Styles/Header.scss";
function Header() {
  return (
    <div className="header_container">
      <div className="header__dark">
        <header className="header">
          <div className="header__part">
            <div class="user_avatar">
              <div class="user_avatar_img">
                <svg
                  style={{ fill: "#c3c3c3" }}
                  color="#c3c3c3"
                  width="23"
                  height="23"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path>
                </svg>
              </div>
            </div>
            <div className="library">Библиотека</div>
          </div>
          <div className="header__part">
            <div class="search">
              <svg
                class="header_part_icon"
                style={{ zIndex: "250" }}
                viewBox="0 0 24 24"
                width="23"
                height="23"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.4 11a5.9 5.9 0 1 1-11.8 0 5.9 5.9 0 0 1 11.8 0Zm-1.044 6.977a8.5 8.5 0 1 1 2.121-2.121l4.084 4.083-2.122 2.122-4.083-4.084Z"
                ></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
