import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// import { bookSearch } from "../api";
import { useState } from "react";

import axios from "axios";
import { queryAllByAttribute } from "@testing-library/react";
import { BookSharp } from "@mui/icons-material";

const BookList = () => {
  const [query, setQuery] = useState(""); // 검색어를 저장할 state
  const [books, setBooks] = useState([]); // 검색결과를 저장할 state

  const KAKAO_KEY = "fb4c30bd11865ec4a0c0e0847ab4c9c8"; // 카카오 api_key

  // 검색어를 입력할 때마다 호출되는 함수
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  // 검색버튼을 클릭하면 호출되는 함수
  const handleSubmit = (e) => {
    e.preventDefault();

    if (query === "") {
      setBooks([]);
    } else {
      axios
        .get("https://dapi.kakao.com/v3/search/book?target=query=${query}", {
          headers: { Authorization: `KakaoAK ${KAKAO_KEY}` },
          // parameter 값 지정
          params: {
            query: query, // 검색을 원하는 질의어
            sort: "accuracy", // 결과 문서 정렬 방식, accuracy(정확도순) 또는 latest(발간일순), 기본값 accuracy
            size: 10, // 한 페이지에 보여질 문서 수, 1~50 사이의 값, 기본 값 10
            target: "title", // 검색 필드 제한. 사용 가능한 값: title(제목), isbn (ISBN), publisher(출판사), person(인명)
          },
        })
        .then((res) => {
          setBooks(res.data.documents);
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="책 이름을 입력하세요"
          value={query}
          onChange={handleChange}
        />
        <Button type="submit">
          <SearchOutlinedIcon />
        </Button>
      </form>
      {books.map((book) => (
        <div key={book.isbn}>
          <img src={book.thumbnail} alt={book.title} />
          <h3>{book.title}</h3>
          <p>{book.authors}</p>
          <p>{book.publisher}</p>
        </div>
      ))}
    </>
  );
};

export default BookList;
