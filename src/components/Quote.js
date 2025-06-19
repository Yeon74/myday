import { useEffect, useState } from "react";

const quotes = [
  "오늘 걷지 않으면 내일은 뛰어야 한다.",
  "할 수 있다고 믿는 사람이 결국 해낸다.",
  "성공은 준비와 기회의 만남이다.",
  "계속 가라. 아무리 느려도 멈추지 마라.",
  "지금 이 순간이 가장 소중한 시간이다.",
  "작은 습관이 큰 변화를 만든다.",
  "시작이 반이다.",
  "포기하지 마라. 포기는 습관이 된다.",
  "불가능해 보여도 도전하라.",
  "실패는 성공으로 가는 길이다."
];

const Quote = () => {
  const [quote,setQuote] = useState('');
  useEffect(()=>{
    const random = Math.floor(Math.random()*quotes.length);
    setQuote(quotes[random]);
  },[]);
  return (
    <div>
      오늘의 명언 : "{quote}"
    </div>
  );
};

export default Quote;