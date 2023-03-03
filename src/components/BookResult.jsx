import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bookIMG from "../img/bookimg.jpg";
const BookResult = ({ query }) => {
  const [books, setBooks] = useState([]); // 검색결과를 저장할 state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const KAKAO_KEY = "fb4c30bd11865ec4a0c0e0847ab4c9c8"; // 카카오 api_key

  useEffect(() => {
    // 책검색 api 받아옴
    const KakaoAPI = () => {
      setLoading(true);
      axios
        .get("https://dapi.kakao.com/v3/search/book?target=query=${query}", {
          headers: { Authorization: `KakaoAK ${KAKAO_KEY}` },
          // parameter 값 설정
          params: {
            query: query, // 검색을 원하는 질의어
            sort: "accuracy", // 결과 문서 정렬 방식, accuracy(정확도순) 또는 latest(발간일순), 기본값 accuracy
            size: 10, // 한 페이지에 보여질 문서 수, 1~50 사이의 값, 기본 값 10
            target: "title", // 검색 필드 제한. 사용 가능한 값: title(제목), isbn (ISBN), publisher(출판사), person(인명)
          },
        })
        .then((res) => {
          setLoading(false);
          setBooks(res.data.documents);
        })
        .catch((err) => {
          setError(err);
          console.log("err", err);
        });
    };
    KakaoAPI();
  }, []);

  if (error) return <div>로드 중 에러가 발생했습니다.</div>;

  return (
    // 검색결과가 있으면 결과 출력
    // 검색결과가 없으면 '검색결과가 없습니다'출력
    <div>
      {books.length > 0 ? (
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
      )}
    </div>
  );
};

export default BookResult;
