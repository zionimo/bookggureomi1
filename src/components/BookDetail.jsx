import { useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import Header from "./Header";
import noThumbnail from "../img/noThumbnail.jpg";

const BookDetail = () => {
  const location = useLocation();
  // BookResult.jsx에서 state 받음
  const book = location.state.book;
  const bookIMG = location.state.bookIMG;

  const saveBook = () => {};

  return (
    <div>
      <Header>
        <Button onClick={saveBook} size="large" color="inherit">
          저장
        </Button>
      </Header>

      {/* 인라인 css 설정해둠 수정할 것 */}
      <div style={{ height: 250, background: "white" }}>
        {book.thumbnail ? (
          <img
            src={book.thumbnail}
            alt={book.title}
            style={{ width: 150, height: 200 }}
          />
        ) : (
          <img src={noThumbnail} alt="" style={{ width: 150, height: 200 }} />
        )}
      </div>

      <div>
        <h2>{book.title}</h2>
      </div>

      <ul>
        <li>
          <div>저자</div>
          <div>
            <span>{book.authors}</span>
          </div>
        </li>
        <li>
          <div>출판</div>
          <div>
            <span>{book.publisher}</span>
          </div>
        </li>
        <li>
          <div>발행</div>
          <div>
            <span>{book.datetime}</span>
          </div>
        </li>
      </ul>

      <div>
        <h3>책 소개</h3>
        {book.contents ? (
          <span>{book.contents}</span>
        ) : (
          <span>
            소개내용이 없습니다. 자세히 보기를 클릭하여 책 정보를 확인하세요!
          </span>
        )}
      </div>

      <div>
        <a href={book.url}>자세히 보기</a>
      </div>
    </div>
  );
};

export default BookDetail;
