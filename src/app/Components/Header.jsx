import "../Styles/Header.scss";
function Header() {
  return (
    <div className="header_container">
      <div className="header__dark">
        <header className="header">
          <div className="header__part">
            <div className="avatar">Login</div>
            <div className="rec">Для вас</div>
            <div className="library">Библеотке</div>
          </div>
          <div className="header__part">
            <div className="search">Поиск</div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
