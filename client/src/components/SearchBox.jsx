import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBox = () => {
  const [selected, setSelected] = useState(false);
  return (
    <div
      className={selected ? "search-box selected" : "search-box"}
      onClick={() => setSelected(true)}
    >
      <select name="select" id="select">
        <option value="all">toate</option>
        <option value="partners">parteneri</option>
        <option value="contracts">contracte</option>
      </select>
      <input type="text" className="search-input" />
      <AiOutlineSearch size={25} className="search-icon" />
    </div>
  );
};
export default SearchBox;
