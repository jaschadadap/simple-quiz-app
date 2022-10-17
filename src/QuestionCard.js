import React, { useState } from 'react'

export default function QuestionCard({ questions, questionNumber, handleNext }) {

  const [chosenAnswer, setChosenAnswer] = useState('')
  
  return (
    <div>
        <p>{questions[questionNumber].question}</p>
        <div className=''>
            {questions[questionNumber].choices.map(choice => (
                <>
                <input type="radio" name="answer" value={choice} onClick={e => setChosenAnswer(e.target.value)} />
                <label>{choice}</label><br />
                </>
            ))}
        </div>
        <button onClick={() => handleNext(chosenAnswer)}>Next</button>
    </div>
  )
}
