import axios from "axios";
import "../Styles/Catalog_anime.scss";

function Anime({ anime }) {
  return (
    <div className="container_catalog border-none">
      <div className="catalog_image">
        <img src={anime.img} alt="" />
        <div className="shadow_el"></div>
      </div>
      <div className="hovered">
        <div className="catalog_item_tag_container">
          <div className="back catalog_item_tag">8.34</div>
        </div>
        <div className="catalog_item_description">
          Десять лет назад по всему миру стали открываться некие «врата»,
          ведущие в подземелья с монстрами, противостоять которым оказалось не
          под силу даже военным. Однако если успеть вовремя победить босса
          подземелья, то врата пропадут, не открывшись, и мирн...
        </div>
        <div className="catalog_item_container_metadata">
          <div className="catalog_item_name">{anime.title}</div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/welcome");
  return {
    props: {
      anime: res.data,
    },
  };
};

export default Anime;
