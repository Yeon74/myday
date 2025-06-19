import { useState } from "react";

const LoginForm = ({onLogin}) => {
  const [user,setUser] = useState('');
  const handleSubmit = (e)=>{
    e.preventDefault();
    const trimmed = user.trim();
    if( trimmed ) {  //빈값이 아니라면
      onLogin(user);   //부모에게 데이터 전송
      setUser(''); 
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>당신의 이름을 입력하세요</h2>
      <input type="text"
        value={user}
        onChange={(e)=>{setUser(e.target.value)}}
      />
      <button type="submit">입장하기</button>
    </form>
  );
};

export default LoginForm;