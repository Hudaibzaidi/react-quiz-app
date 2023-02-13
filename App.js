import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {
    const [arr, setQuizArr] = useState([
      {
        numb: 1,
        question: "What does HTML stand for?",
        answer: "Hyper Text Markup Language",
        options: [
          "Hyper Text Preprocessor",
          "Hyper Text Markup Language",
          "Hyper Text Multiple Language",
          "Hyper Tool Multi Language",
        ],
      },
      {
        numb: 2,
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheet",
        options: [
          "Common Style Sheet",
          "Colorful Style Sheet",
          "Computer Style Sheet",
          "Cascading Style Sheet",
        ],
      },
      {
        numb: 3,
        question: "What does PHP stand for?",
        answer: "Hypertext Preprocessor",
        options: [
          "Hypertext Preprocessor",
          "Hypertext Programming",
          "Hypertext Preprogramming",
          "Hometext Preprocessor",
        ],
      },
      {
        numb: 4,
        question: "What does SQL stand for?",
        answer: "Structured Query Language",
        options: [
          "Stylish Question Language",
          "Stylesheet Query Language",
          "Statement Question Language",
          "Structured Query Language",
        ],
      },
      {
        numb: 5,
        question: "What does XML stand for?",
        answer: "eXtensible Markup Language",
        options: [
          "eXtensible Markup Language",
          "eXecutable Multiple Language",
          "eXTra Multi-Program Language",
          "eXamine Multiple Language",
        ],
      }
    ]);
    let [index, setIndex] = useState(0);
    let [arrResult, setArrResult] = useState(false);
    let [arrMarks, setArrMarks] = useState(0);
    const change = (h,f) => {
      if(h == f){
        setArrMarks(arrMarks + 1)
      }
      if(index + 1 == arr.length){
        setArrResult(true);
      }
      setIndex(index + 1)
    }
  return (
    <div className="App">
      <header className="App-header">
        {arrResult ? (<h1 className='resultHeading'>your Marks Is {arrMarks} </h1>) : (
          <div className="divone">
        <div>
         <h1 className="h1">
          {arr[index].question}
         </h1>
       </div>
        <div className="divtwo">
         {arr[index].options.map((room, bag) => {
          return (
            <div key={bag}>
              <button className="btn" onClick={() => change(room, arr[index].answer)}>{room}</button>
            </div>
          )
         })}
         </div>
        </div>
        ) }
      </header>
    </div>
  );
}

export default App;
