import { useState } from "react";
import BookResult from "./BookResult";

import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const BookList = () => {
  const [query, setQuery] = useState(""); // 검색어를 저장할 state
  const [search, setSearch] = useState(false);

  // 검색어를 입력할 때마다 호출되는 함수
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  // 검색버튼을 클릭하면 호출되는 함수
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) {
      // 입력된 검색어가 없을 때
      alert("도서명을 입력해주세요!😚");
      return;
    } else {
      // 입력된 검색어가 있을 때
      setSearch(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="도서명을 입력하세요."
          value={query}
          onChange={handleChange}
        />
        <Button type="submit">
          <SearchOutlinedIcon />
        </Button>
      </form>

      {search && <BookResult query={query} />}
    </>
  );
};

export default BookList;
