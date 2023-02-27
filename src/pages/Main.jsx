import BookList from "../components/BookList";

const Main = () => {
  return (
    <div>
      <div>
        <BookList />
      </div>

      <div>
        {/* 이달의 책 */}
        <section></section>
        {/* 이달의 문구 */}
        <section></section>
      </div>
    </div>
  );
};

export default Main;
