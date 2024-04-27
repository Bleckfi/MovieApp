import "../Styles/Catalog_anime.scss";

function Anime() {
  return (
    <div className="container_catalog border-none">
      <div className="catalog_image">
        <img
          src="https://desu.shikimori.one/uploads/poster/animes/52299/9a1ee4e32c72ab99b76e84bbe49f7e87.jpeg"
          alt=""
        />
        <div className="shadow_el"></div>
      </div>
      <div class="hovered">
        <div class="catalog_item_tag_container">
          <div className="back catalog_item_tag">8.34</div>
        </div>
        <div class="catalog_item_description">
          Десять лет назад по всему миру стали открываться некие «врата»,
          ведущие в подземелья с монстрами, противостоять которым оказалось не
          под силу даже военным. Однако если успеть вовремя победить босса
          подземелья, то врата пропадут, не открывшись, и мирн...
        </div>
        <div className="catalog_item_container_metadata">
          <div className="catalog_item_name">Поднятие уровня в одиночку</div>
        </div>
      </div>
    </div>
  );
}

export default Anime;
