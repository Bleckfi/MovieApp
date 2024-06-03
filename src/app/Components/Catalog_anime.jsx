"use client";
import "../Styles/Catalog_anime.scss";
import Link from "next/link";
function Anime({ data }) {
  const description = data.material_data[0]?.description || "Нет описания";
  const rationg = data.material_data[0]?.shikimori_rating || "Без оценки";
  return (
    <div className="container_catalog border-none">
      <Link href={`/anime/${data._id}`}>
        <div className="catalog_image">
          <img src={data.material_data[0]?.poster_url} alt="" />
          <div className="shadow_el"></div>
        </div>
        <div className="hovered">
          <div className="catalog_item_tag_container">
            <div className="back catalog_item_tag">{rationg}</div>
          </div>
          <div className="catalog_item_description">{description}</div>
          <div className="catalog_item_container_metadata">
            <div className="catalog_item_name">{data.title}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Anime;
