import { useEffect, useState } from "react";
const Weather = () => {
    const API_KEY = "a979a13bc0bd210878acc69bd4984cba"
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

     const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour >= 5 && hour < 12) return "Good morning!";
        if (hour >= 12 && hour < 18) return "Good afternoon~";
        if (hour >= 18 && hour < 22) return "Good evening~";
        return "Good night~";
    };

    useEffect(() => {
        if (!navigator.geolocation) {
            setError("위치 정보를 지원하지 않은 브라우저입니다");
            setLoading(false);
            return;
        }
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=kr`;
            //fetch API:브라우저 내장함수, 외부에 요청을 보내고, 응답을 받을 수 있음
            fetch(URL)
                .then((res) => {
                    if (!res.ok) {
                        setError('데이터 요청실패!');}
                                                                  
                    return res.json();
                })
                .then((data) => {
                    console.log("data설정---->");
                    console.log(data);
                    setWeather(data);                
                setLoading(false);
        })
            .catch((err) => {
                setError("날씨 데이터를 불러오는데 실패했습니다.");
                setLoading(false);
            });
    });

}, []);
return (
    <div className="weather-box">
        {
            weather && (
                <>
                
                <h3>{weather.name}</h3>
                <h3>{weather.main.temp}</h3>
                <h3>{weather.weather[0].description}</h3>
                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} />
                <h3>{getGreeting()}</h3>   
                          
                   </>
            )
        }       
    </div>
);
};

export default Weather;