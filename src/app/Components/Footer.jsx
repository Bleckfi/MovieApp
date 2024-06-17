import "../Styles/Footer.scss";
import Image from "next/image";
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="shadow">
          <div className="name">Anipy</div>
        </div>
        <div className="contact">contact</div>
        <div className="git">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/2048px-Github-desktop-logo-symbol.svg.png"
            width={40}
            height={40}
            alt=""
          />
          <div className="gitName">Bleckfi</div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
