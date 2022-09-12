import { useEffect, useState } from "react";
import Card from "./Components/Card";
import "./Styles/app.css"

const App = () => {

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  
  useEffect(() => {
    setBestScore(() => {
      if (bestScore === score || bestScore < score) {
        console.log(bestScore);
        return score
      } else {
        return bestScore
      }
    })}, [score])

  const [member0, setMember0] = useState({name: "BALIN", imageUrl: "balin.jpg", clicked: false});
  const [member1, setMember1] = useState({name: "BIFUR", imageUrl: "bifur.jpg", clicked: false});
  const [member2, setMember2] = useState({name: "BOFUR", imageUrl: "bofur.jpg", clicked: false});
  const [member3, setMember3] = useState({name: "BOMBUR", imageUrl: "bombur.jpg", clicked: false});

  const [member4, setMember4] = useState({name: "DORI", imageUrl: "dori.jpg", clicked: false});
  const [member5, setMember5] = useState({name: "DWALIN", imageUrl: "dwalin.jpg", clicked: false});
  const [member6, setMember6] = useState({name: "FILI", imageUrl: "fili.jpg", clicked: false});
  const [member7, setMember7] = useState({name: "GLOIN", imageUrl: "gloin.jpg", clicked: false});

  const [member8, setMember8] = useState({name: "KILI", imageUrl: "kili.jpg", clicked: false});
  const [member9, setMember9] = useState({name: "NORI", imageUrl: "nori.jpg", clicked: false});
  const [member10, setMember10] = useState({name: "OIN", imageUrl: "oin.jpg", clicked: false});
  const [member11, setMember11] = useState({name: "ORI", imageUrl: "ori.jpg", clicked: false});

  const placeHolderList = [
    member0, member1, member2,
    member3, member4, member5,
    member6, member7, member8,
    member9, member10, member11
  ];

  const [memberList, setMemberList] = useState(placeHolderList);

  const shuffle = (array) => {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  const resetGame = () => {
    setScore(0);
    memberList.forEach(member => {
      member.clicked = false;
    })
    console.table(memberList);
  }

  const handleScore = (member) => {
    if (!member.clicked) {
      setScore(score + 1);
      member.clicked = true;
    } else {
      resetGame();
    }
  }

  const randomize = (member) => {
    setMemberList([...shuffle(memberList)]);
    handleScore(member);
  }

  return (
    <div className="app">
      <div className="score">
        <h3>Score: {score}</h3>
        <h3>High Score: {bestScore}</h3>
      </div>
      <div className="card-container">
        {memberList.map(member => {
          return (
              <Card 
              member = {member}
              name = {member.name}
              imageUrl = {member.imageUrl}
              onClick = {() => randomize(member)}
              />
          )
        })}
      </div>
    </div>
  );
}

export default App;
