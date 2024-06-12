"use client";
import "../Styles/Catalog_anime.scss";
import Link from "next/link";
function Anime({ data }) {
  const desc = data.material_data?.description || "Нет описания";
  const rate = data.material_data?.shikimori_rating || "Нет оценки";
  return (
    <div className="container_catalog border-none">
      <Link href={`/anime/${data._id}`}>
        <div className="catalog_image">
          <img src={data.material_data?.poster_url} alt="" />
          <div className="shadow_el"></div>
        </div>
        <div className="hovered">
          <div className="catalog_item_tag_container">
            <div className="back catalog_item_tag">{rate}</div>
          </div>
          <div className="catalog_item_description">{desc}</div>
          <div className="catalog_item_container_metadata">
            <div className="catalog_item_name">{data.title}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Anime;
