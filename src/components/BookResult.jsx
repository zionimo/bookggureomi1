import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bookIMG from "../img/bookimg.jpg";
import useBooks from "../hooks/useBooks";

const BookResult = () => {
  const { books } = useBooks();

  return (
    // 검색결과가 있으면 결과 출력
    // 검색결과가 없으면 '검색결과가 없습니다'출력
    <ul>
      {books.map((book) => {
        const { isbn, thumbnail, title, authors, publisher } = book;
        return (
          <li key={isbn}>
            <h2>{title}</h2>
            <img src={thumbnail} alt={thumbnail} />
            <p>{authors}</p>
            <p>{publisher}</p>
          </li>
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
