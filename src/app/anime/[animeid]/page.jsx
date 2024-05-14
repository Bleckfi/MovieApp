import "../../Styles/Animeid.scss";
function Animeid() {
  return (
    <>
      <div className="anime_body">
        <div className="anime_left_body">
          <a href="/play/11757">
            <div className="anime_body_poster">
              <img
                alt=""
                sizes="100vw"
                src="https://anitype.fun/_next/image?url=https%3A%2F%2Fdesu.shikimori.one%2Fuploads%2Fposter%2Fanimes%2F11757%2F8958e24041338f53bdab4955ed395d66.jpeg&w=1920&q=75"
              />
              <div className="anime_body_poster_sub">
                <div className="anime_body_poster_sub_watch">Смотреть</div>
              </div>
            </div>
          </a>
          <div className="anime_add_to_folders">
            <button className="anime_add_to_folder">
              <svg
                fill="#eaeaea"
                width="20"
                height="20"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M464,128H272L208,64H48A48,48,0,0,0,0,112V400a48,48,0,0,0,48,48H464a48,48,0,0,0,48-48V176A48,48,0,0,0,464,128ZM359.5,296a16,16,0,0,1-16,16h-64v64a16,16,0,0,1-16,16h-16a16,16,0,0,1-16-16V312h-64a16,16,0,0,1-16-16V280a16,16,0,0,1,16-16h64V200a16,16,0,0,1,16-16h16a16,16,0,0,1,16,16v64h64a16,16,0,0,1,16,16Z"></path>
              </svg>
              <span>Добавить в папку</span>
            </button>
            <div className="list_name_folder hidden">
              <div className="list_name_folder_item add_user_folder">
                Создать папку
              </div>
            </div>
          </div>
        </div>
        <div className="anime_body_center">lo</div>
        <div className="anime_right_body">
          <div className="search_rank anime" style={{ color: "green" }}>
            8.32
          </div>
        </div>
      </div>
    </>
  );
}

export default Animeid;
