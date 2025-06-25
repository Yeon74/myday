// import { useState } from "react";

// const LoginForm = ({onLogin}) => {
//   const [user,setUser] = useState('');
//   const handleSubmit = (e)=>{
//     e.preventDefault();
//     const trimmed = user.trim();
//     if( trimmed ) {  //빈값이 아니라면
//       onLogin(user);   //부모에게 데이터 전송
//       setUser(''); 
//     }
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>당신의 이름을 입력하세요</h2>
//       <input type="text"
//         value={user}
//         onChange={(e)=>{setUser(e.target.value)}}
//       />
//       <button type="submit">입장하기</button>
//     </form>
//   );
// };

// export default LoginForm;

import { useState, useEffect } from "react";

const LoginForm = ({ onLogin }) => {
  const [user, setUser] = useState('');
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString('en-US', {
    hour12: true,
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = user.trim();
    if (trimmed) {
      onLogin(user);
      setUser('');
    }
  };

  return (
    <div className="app bg-morning">
      <div className="overlay-bg"></div>

      <div className="page-wrapper with-weather">
        <div className="main-area">
          <div className="main-dashboard">
            {/* 🎯 작고 예쁜 시계 */}
            <div className="time small-time">{formattedTime}</div>

            <div className="dashboard-header">
              <h2>당신의 이름을 입력하세요</h2>
            </div>

            <form onSubmit={handleSubmit} className="todo-form">
              <input
                type="text"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                placeholder="이름을 입력하세요"
              />
              <button type="submit">입장하기</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
