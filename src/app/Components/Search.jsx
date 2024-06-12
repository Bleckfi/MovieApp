import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../Styles/Search.scss";

function Search({ hide, setHide }) {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setHide(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setHide]);

  useEffect(() => {
    if (inputValue.trim() === "") {
      setSearchResults([]);
      return;
    }

    const fetchData = async () => {
      try {
        const response = await axios.get("/api/search", {
          params: { query: inputValue },
        });
        setSearchResults(response.data);
      } catch (error) {
        console.error("Ошибка при выполнении запроса:", error);
      }
    };
    const debounceFetch = setTimeout(fetchData, 300);

    return () => clearTimeout(debounceFetch);
  }, [inputValue]);

  return (
    <div className="header_search_background visible">
      <div
        ref={searchRef}
        onClick={(e) => e.stopPropagation()}
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <div style={{ width: "60%" }}>
          <input
            type="text"
            className="search_anime_input"
            placeholder="Введите название аниме для начала поиска"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <div className="search_anime_result_container">
            <div className="search_anime_result_left">
              {searchResults.map((result) => (
                <a key={result._id} href={`/anime/${result._id}`}>
                  <div className="search_element">
                    <div className="search_poster">
                      <img
                        src={result.material_data?.poster_url}
                        alt={`${result.title} Poster`}
                      />
                    </div>
                    <div className="search_body">
                      <div className="search_info">
                        <div className="search_title">{result.title}</div>
                        <div style={{ display: "flex" }}>
                          <div className="search_rank">
                            {result.material_data?.shikimori_rating}
                          </div>
                          <div className="search_date">
                            {result.type} · {result.year}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
