// import axios from "axios";

// const KAKAO_KEY = "fb4c30bd11865ec4a0c0e0847ab4c9c8";

// export const Kakao = axios.create({
//   baseURL: "http://dabi.kakao.com",
//   headers: { Authorization: "KakaoAK" + KAKAO_KEY },
// });

// // search book api
// export const bookSearch = (params) => {
//   return Kakao.get("/v3/search/book?target=title", { params });
// };

// // book api
// export const book = () => {
//   return Kakao.get("/v3/search/book?target=title");
// };






// import axios from "axios";
// import { useState } from "react";
// import { Navigate } from "react-router-dom";

// const AxiosGet = () => {
//   const KAKAO_KEY = "fb4c30bd11865ec4a0c0e0847ab4c9c8";

//   const Kakao = axios.create({
//     baseURL: "https://dapi.kakao.com",
//     headers: {
//       Authorization: `KakaoAK ${KAKAO_KEY}`,
//     },
//   });

//   const KakaoSearch = (params) => {
//     return Kakao.get("/v3/search/book", { params });
//   };

//   const [books, setBooks] = useState([]);

//   const getBooks = async () => {
//     const search = books;
//     try {
//       if (search === "") {
//         setBooks([]);
//       } else {
//         const params = {
//           query: search,
//           size: 5,
//           target: "searchOption",
//         };
//         const result = await KakaoSearch(params);

//         if (result) {
//           setBooks(result.data.documents);
//           Navigate("/main", { state: result.data.documents });
//         } else {
//           alert("fail");
//         }
//       }
//     } catch (error) {
//       alert("error", error);
//     }
//   };

//   // const [data, setData] = useState([]);

//   // useEffect(() => {
//   //   axios
//   //     .get("https://dapi.kakao.com/v3/search/book?target=title", {
//   //       params: {
//   //         // 검색어
//   //         query: "미움받을 용기",
//   //         // 필수아닌 검색 조건들
//   //         sort: "accuracy", //accuracy(정확도순), latest(발간일순), 기본값 accuracy
//   //         page: 1, //1~50 사이의 값, 기본 값 1
//   //         size: 5, //1~50 사이의 값, 기본 값 10
//   //         //target	String	검색 필드 제한

//   //         //사용 가능한 값: title(제목), isbn (ISBN), publisher(출판사), person(인명)
//   //       },
//   //       headers: {
//   //         Authorization: `KakaoAK ${REST_API_KEY}`,
//   //       },
//   //     })
//   //     .then((res) => setData(res.data.documents))
//   //     .catch((err) => alert("에러"));
//   // }, []);

//   return (
//     <div>
//       {books.map((book, i) => {
//         return (
//           <div key={i}>
//             <img src={book.thumbnail} />
//             <h3>{book.title}</h3>
//             <div>{book.contents}</div>
//             <div>
//               저자 {book.authors.map((book) => book)} {book.price}원
//             </div>
//             <div>
//               링크 <a href={book.url}>클릭</a>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default AxiosGet;
