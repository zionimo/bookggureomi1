import { useLocation } from "react-router-dom";

const BookDetail = () => {
  const location = useLocation();
  // BookResult.jsx에서 state 받음
  const book = location.state.book;

  return (
    <div>
      <img src={book.thumbnail} alt={book.title} />
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
        <span>{book.contents}</span>
      </div>

      <div>
        <a href={book.url}>자세히 보기</a>
        
      </div>
    </div>
  );
};

export default BookDetail;
