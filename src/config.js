import axios from "axios";
import { useEffect, useState } from "react";

const AxiosGet = () => {
  const REST_API_KEY = "fb4c30bd11865ec4a0c0e0847ab4c9c8";
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dapi.kakao.com/v3/search/book?target=title", {
        params: {
          // 검색어
          query: "미움받을 용기",
          // 필수아닌 검색 조건들
          sort: "accuracy", //accuracy(정확도순), latest(발간일순), 기본값 accuracy
          page: 1, //1~50 사이의 값, 기본 값 1
          size: 5, //1~50 사이의 값, 기본 값 10
          //target	String	검색 필드 제한

          //사용 가능한 값: title(제목), isbn (ISBN), publisher(출판사), person(인명)
        },
        headers: {
          Authorization: `KakaoAK ${REST_API_KEY}`,
        },
      })
      .then((res) => setData(res.data.documents))
      .catch((err) => alert("에러"));
  }, []);

  return (
    <div>
      {data.map((book, i) => {
        return (
          <div key={i}>
            <img src={book.thumbnail} />
            <h3>{book.title}</h3>
            <div>{book.contents}</div>
            <div>
              저자 {book.authors.map((book) => book)} {book.price}원
            </div>
            <div>
              링크 <a href={book.url}>클릭</a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AxiosGet;
