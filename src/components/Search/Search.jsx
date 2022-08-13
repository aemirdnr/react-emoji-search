import { useFilter } from "../../context/FilterContext";
import "./Search.sass";

function Search() {
  const { filter, setFilter } = useFilter();

  return (
    <>
      <input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="emoji__input"
        placeholder="Emoji..."
      />
    </>
  );
}

export default Search;
