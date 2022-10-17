import React from 'react'

export default function Results({ score, handleReset }) {
  return (
    <div>
        <h1>Results</h1>
        <p>Score: {score}</p>
        <button onClick={handleReset}>Play again</button>
    </div>
  )
}
