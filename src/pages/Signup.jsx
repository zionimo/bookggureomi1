import { useState } from "react";

const Signup = () => {
 
  return (
    <div>
      <h2>회원가입</h2>

      <form>
        <input type="text" placeholder="이메일" />
        <input type="text" placeholder="닉네임" />
        <input type="text" placeholder="비밀번호(영문,숫자,특수문자 조합 10자 이상)" />
        <input type="text" placeholder="비밀번호 확인" />
        <button>회원가입</button>
      </form>
    </div>
  );
};

export default Signup;
