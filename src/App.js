import { useEffect, useState } from "react";
import LoginForm from "./components/LoginForm";
import Time from "./components/Time";
import "./App.scss";
import MainPage from "./components/MainPage";

import bgImg from './images/about_me.jpg'
import Weather from "./components/Weather";

const App = () => {
  const USER_KEY = "user_name";
  const [user, setUser] = useState('');
  const [greeting, setGreeting] = useState('');
  const [bgClass, setBgClass] = useState('');
  //처음에 시작하자 마자 user_name을 읽어와야 함
  useEffect(() => {
    const saved = localStorage.getItem(USER_KEY);
    if (saved) {
      setUser(saved);
    }
  }, []);
  const handleLogin = (data) => {
    localStorage.setItem(USER_KEY, data);
    setUser(data);
  }
  const handleLogout = () => {
    localStorage.removeItem(USER_KEY);
    setUser('');
  }

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      setGreeting("Good morning!");
      setBgClass("bg-morning");
    } else if (hour >= 12 && hour < 18) {
      setGreeting("Good afternoon!");
      setBgClass("bg-afternoon");
    } else if (hour >= 18 && hour < 21) {
      setGreeting("Good evening!");
      setBgClass("bg-evening");
    } else {
      setGreeting("Good night!");
      setBgClass("bg-night");
    }
  }, []);


  // return (
  //   <div className="app">
  //     <Time />
  //     {
  //       user ? (
  //         <div className="page-wrapper with-weather">
  //           <div className="main-area">
  //             <MainPage user={user} onLogout={handleLogout} />
  //             <div className="weather-floating">
  //               <Weather />
  //             </div>
  //           </div>
  //         </div>
  //       ) : (
  //         <LoginForm onLogin={handleLogin} />
  //       )
  //     }
  //   </div>
  // );

  return (
    <div className={`app ${bgClass}`}>
      <Time />
      {
        user ? (
          <div className="page-wrapper with-weather">
            <div className="main-area">
              <MainPage user={user} onLogout={handleLogout} greeting={greeting} />
              <div className="weather-floating">
                <Weather />
              </div>
            </div>
          </div>
        ) : (
          <LoginForm onLogin={handleLogin} />
        )
      }
    </div>
  );
};



export default App;