import React from "react"

const Result = ({score, playAgain, total}) =>
(
    <div className="score-board">
        <div className="score">you score {score} / {total} correct answers!</div>
    <button className="playBtn" onClick={playAgain}>Play Again</button>
    </div>
);

export default Result