import { useEffect, useState } from "react";
import Card from "./Components/Card";
import "./Styles/app.css"

const App = () => {

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  
  useEffect(() => {
    setBestScore(bestScore => {
      if (bestScore < score) {
        console.log(bestScore)
        return score
      }
    }
    )
  }, [score])

  const [member0, setMember0] = useState({name: "Chuu", imageUrl: "chuu.jpg", clicked: false});
  const [member1, setMember1] = useState({name: "Yves", imageUrl: "yves.jpg", clicked: false});
  const [member2, setMember2] = useState({name: "Hyejoo", imageUrl: "hyejoo.jpg", clicked: false});
  const [member3, setMember3] = useState({name: "Gowon", imageUrl: "gowon.jpg", clicked: false});

  const [member4, setMember4] = useState({name: "Kim Lip", imageUrl: "kim lip.jpg", clicked: false});
  const [member5, setMember5] = useState({name: "Jinsoul", imageUrl: "jinsoul.jpg", clicked: false});
  const [member6, setMember6] = useState({name: "Choerry", imageUrl: "choerry.jpg", clicked: false});
  const [member7, setMember7] = useState({name: "Yeojin", imageUrl: "yeojin.jpg", clicked: false});

  const [member8, setMember8] = useState({name: "Heejin", imageUrl: "heejin.jpg", clicked: false});
  const [member9, setMember9] = useState({name: "Haseul", imageUrl: "haseul.jpg", clicked: false});
  const [member10, setMember10] = useState({name: "Vivi", imageUrl: "vivi.jpg", clicked: false});
  const [member11, setMember11] = useState({name: "Hyunjin", imageUrl: "hyunjin.jpg", clicked: false});

  const placeHolderList = [
    member0, member1, member2,
    member3, member4, member5,
    member6, member7, member8,
    member9, member10, member11
  ];

  const[memberList, setMemberList] = useState(placeHolderList);

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
    setScore(score => 0);
    memberList.forEach(member => {
      member.clicked = false;
    })
  }

  const handleScore = (member) => {
    if (!member.clicked) {
      setScore(score => score + 1);
      member.clicked = true;
    } else {
      resetGame();
    }
  }

  const randomize = (member) => {
    setMemberList([...shuffle(memberList)]);
    handleScore(member);
    // member.clicked = true;
    console.table(memberList);
    console.log(member);
  }

  return (
    <div className="app">
      <div className="score">
        <h3>Score: {score}</h3>
        <h3>Best Score: {bestScore}</h3>
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
