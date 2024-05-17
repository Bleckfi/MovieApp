import "../Styles/Catalog_anime.scss";

function Anime({ data }) {
  return (
    <div className="container_catalog border-none">
      <div className="catalog_image">
        <img src={data.img} alt="" />
        <div className="shadow_el"></div>
      </div>
      <div className="hovered">
        <div className="catalog_item_tag_container">
          <div className="back catalog_item_tag">{data.rate}</div>
        </div>
        <div className="catalog_item_description">{data.desc}</div>
        <div className="catalog_item_container_metadata">
          <div className="catalog_item_name">{data.title}</div>
        </div>
      </div>
    </div>
  );
}

export default Anime;
