import Emoji from "../Emoji/Emoji";
import emojiData from "../../emojiList.json";
import { useFilter } from "../../context/FilterContext";

function List() {
  const { filter } = useFilter();

  let filteredText = filter.toLowerCase();

  return (
    <div className="d-flex flex-column gap-1">
      {emojiData
        .filter((emoji) => emoji.title.toLowerCase().includes(filteredText))
        .map((emoji, index) => (
          <Emoji
            key={index}
            title={emoji.title}
            symbol={emoji.symbol}
            keywords={emoji.keywords}
          />
        ))}
    </div>
  );
}

export default List;
