import { AppBar, Box, Toolbar, Button, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styled from "styled-components";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppStateContext from "../contexts/AppStateContext";

const Header = () => {
  const navigate = useNavigate();

  // 이전 페이지로 이동 핸들
  const handleBackpage = () => {
    navigate(-1);
  };

  // const handleAddBook = { type: "add", text: "담기" };
  // const handleModifyBook = [
  //   {
  //     type: "modify",
  //     text: "수정",
  //   },
  //   {
  //     type: "delete",
  //     text: "삭제",
  //   },
  // ];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledHeader position="static">
        <Toolbar variant="dense" sx={{ justifyContent: "space-between" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleBackpage}
          >
            <ArrowBackIcon />
          </IconButton>

          <div>
            <Button size="large" color="inherit">
              저장
            </Button>
            <Button size="large" color="inherit">
              수정
            </Button>
            <Button size="large" color="inherit">
              삭제
            </Button>
          </div>
        </Toolbar>
      </StyledHeader>
    </Box>
  );
};

export default Header;
// Material의 AppBar 색 변경
const StyledHeader = styled(AppBar)`
  /* material의 style보다 우선순위를 높히기 위해 &&작성 */
  && {
    background-color: #75daad;
    color: white;
  }
`;
