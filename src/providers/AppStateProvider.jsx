// import { useEffect, useState } from "react";
// import { bookSearch } from "../api";
// import AppStateContext from "../contexts/AppStateContext";

// const AppStateProvider = ({ children }) => {
//   const [books, setBooks] = useState([]);
//   const [query, setQuery] = useState("");

//   useEffect(() => {
//     if (searchWord.length > 0) {
//       bookSearchHttpHandler(query, true); // 컴포넌트 마운트 후에, 함수를 호출한다.
//     }
//   }, [query]);

//   // book search 핸들러
//   const bookSearchHttpHandler = async (query, reset) => {
//     // parameter 설정
//     const params = {
//       query: query,
//       sort: "accuracy", // accuracy | recency 정확도 or 최신
//       page: 1, // 페이지번호
//       size: 5, // 한 페이지에 보여 질 문서의 개수
//     };

//     const { data } = await bookSearch(params); // api 호출
//     if (reset) {
//       setBooks(data.documents);
//     } else {
//       setBooks(books.concat(data.documents));
//     }
//   };

//   const searchBook = (text) => {
//     setQuery(text);
//   };

//   return (
//     <AppStateContext.Provider
//       value={{
//         books,
//         searchBook,
//       }}
//     >
//       {children}
//     </AppStateContext.Provider>
//   );
// };

// export default AppStateProvider;
