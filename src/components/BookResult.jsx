import { Link } from "react-router-dom";
import useBooks from "../hooks/useBooks";

const BookResult = () => {
  const { books } = useBooks();
  console.log(books);
  return (
    // 검색결과가 있으면 결과 출력
    // 검색결과가 없으면 '검색결과가 없습니다'출력
    <ul>
      {books.map((book, noThumbnail) => {
        const { isbn, title, thumbnail, authors, publisher } = book;

        return (
          <Link to="bookdetail">
            <li key={isbn}>
              <title>{title}</title>
              {/* 썸네일 이미지가 있다면 출력, 없다면 noThumbnail 이미지 출력 */}
              {thumbnail !== "" ? (
                <img
                  key={isbn}
                  src={thumbnail}
                  alt={title}
                  style={{ width: 90, height: 120 }}
                />
              ) : (
                <img
                  src={require("../img/noThumbnail.jpg")}
                  alt={title}
                  style={{ width: 90, height: 120 }}
                />
              )}
              <p>{authors}</p>
              <p>{publisher}</p>
            </li>
          </Link>
        );
      })}
      {/* {books.length > 0 ? (
        // 검색결과 불러오는 중이면 로딩화면 출력
        <div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ul>
              {books.map((book) => (
                <Link to="bookdetail" state={{ book: book, bookIMG: bookIMG }}>
                  <li key={book.isbn}>
                    <div>
                      {book.thumbnail ? (
                        <img
                          src={book.thumbnail}
                          alt={book.title}
                          style={{ width: 90, height: 120 }}
                        />
                      ) : (
                        <img
                          src={bookIMG}
                          alt=""
                          style={{ width: 90, height: 120 }}
                        />
                      )}
                    </div>
                    <div>
                      <h3>{book.title}</h3>
                      <p>{book.authors}</p>
                      <p>{book.publisher}</p>
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <div>검색결과가 없습니다.</div>
      )} */}
    </ul>
  );
};

export default BookResult;
