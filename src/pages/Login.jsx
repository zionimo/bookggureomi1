import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h2>로그인</h2>

      <div>
        <img src="" alt="" style={{ width: "80px", height: "80px" }} />
        <p>북꾸러미와 함께 독서의 세상으로 가보자구요🤭</p>
      </div>

      <form>
        <input type="email" placeholder="이메일" required />
        <input type="password" placeholder="비밀번호" required />
        <input type="submit" value="로그인" />
        <Link>비밀번호를 잊으셨나요?</Link>
        <Link to="/signup">회원이 아니신가요?</Link>
      </form>

      <div>
        <span>구글계정으로 로그인</span>
        <button>구글로그인</button>
      </div>
    </div>
  );
};

export default Login;
