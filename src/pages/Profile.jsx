import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      {/* 프로필 */}
      <div>
        <img
          src=""
          alt=""
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            backgroundColor: "lemonchiffon",
          }}
        />
        <h3>사용자 닉네임</h3>
      </div>

      {/* 설정영역 */}

      <ul>
        <li>
          <Link to="/login">로그인하기</Link>
        </li>
        <li>
          <Link to="/modify">프로필 변경하기</Link>
        </li>
        <li>
          <Link to="/thema">테마설정</Link>
        </li>
      </ul>

      {/* 개발자 sns */}
      <ul>
        <li>
          <a href="http://instaram.com">instagram</a>
        </li>
        <li>
          <a href="https://github.com/zionimo/bookggureomi">github</a>
        </li>
      </ul>

      {/* 마이페이지
- 사용자 프로필(사진, 아이디) 
- 프로필 변경하기
- 테마 변경 (색깔 바꾸기)
- 개발자 sns (instagram, github) */}
    </>
  );
};

export default Profile;
