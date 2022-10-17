import { useState } from "react";
import Results from "./Results";
import QuestionCard from "./QuestionCard";

const questions = [
  {
    question: "1+1?",
    number: '1',
    choices: [
      1, 2, 3, 4
    ],
    correctAnswer: '2'
  },
  {
    question: "2+1?",
    number: '2',
    choices: [
      1, 2, 3, 4
    ],
    correctAnswer: '3'
  },
  {
    question: "2+2?",
    number: '3',
    choices: [
      1, 2, 3, 4
    ],
    correctAnswer: '4'
  },
  {
    question: "2+0?",
    number: '4',
    choices: [
      1, 2, 3, 4
    ],
    correctAnswer: '2'
  }
]

function App() {

  const [questionNumber, setQuestionNumber] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [results, setResults] = useState(false)

  const handleNext = (chosenAnswer) => {
    if (chosenAnswer === questions[questionNumber].correctAnswer) {
      console.log('the answer is correct')
      setCorrectAnswers(prevNum => prevNum + 1)
    }
    if (questionNumber === 3){
      setResults(true)
    } else {
      setQuestionNumber(prevNumber => prevNumber + 1)
    }
  }

  const handleReset = () => {
    setQuestionNumber(0)
    setCorrectAnswers(0)
    setResults(false)
    console.log('working')
  }

  return (
    <div className="bg-[#111827] h-screen w-screen flex items-center justify-center text-white flex-col">
      {!results && <div>Question {questions[questionNumber].number}/4</div>}
      {!results && <QuestionCard key={questionNumber} questions={questions} questionNumber={questionNumber} handleNext={handleNext}/>}
      {results && <Results score={ correctAnswers } handleReset={handleReset}/>} 
    </div>
  );
}

export default App;
