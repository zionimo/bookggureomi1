import { AppBar, Box, Toolbar, Button, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Material의 AppBar 색 변경
const StyledHeader = styled(AppBar)`
  /* material의 style보다 우선순위를 높히기 위해 &&작성 */
  && {
    background-color: #75daad;
    color: white;
  }
`;

export default function Header() {
  const navigate = useNavigate();

  const handleBackpage = () => {
    navigate(-1);
  };

  const SAVEBOOK_DATA=[
    {}
  ]
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
}
