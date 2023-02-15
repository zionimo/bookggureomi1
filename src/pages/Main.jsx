import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import AxiosGet from "../config";

const Main = () => {
  return (
    <div>
      <div>
        <Input type="text" placeholder="도서명을 입력하세요!" />
        <Button>
          <SearchOutlinedIcon />
        </Button>
      </div>

      {/* 도서 출력공간 */}
      <div>
        <AxiosGet />
      </div>

      <div>
        {/* {object.values(bookData).map((book, index) => (
          <div key={index}>
            <span>{book.title}</span>
          </div>
        ))} */}
      </div>

      <div>
        {/* 이달의 책 */}
        <section></section>
        {/* 이달의 문구 */}
        <section></section>
      </div>

      <div></div>
    </div>
  );
};

export default Main;
