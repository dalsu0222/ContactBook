import { useState } from "react";

export default function SearchCon({ searchTerm, setSearchTerm, onSearch }) {
  const [inputValue, setInputValue] = useState(searchTerm);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(inputValue);
    }
  };

  const showAllList = () => {
    setSearchTerm("");
    setInputValue("");
  };

  return (
    <div className="searchCon">
      <input
        type="text"
        placeholder="검색어를 입력 후 엔터를 누르세요"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="showAll" onClick={showAllList}>
        전체리스트 보기
      </button>
    </div>
  );
}
