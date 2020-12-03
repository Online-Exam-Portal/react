import React from "react";
import axios from "axios";

const Result = ({score, playAgain, total, test_id}) => {

    console.log("role" + localStorage.getItem("role"))
    const id = localStorage.getItem("id")

    axios.post("http://localhost:5000/result", {
        result_id: 1,
        student_id: id,
        test_id: test_id,
        score: score,
    })

    return(
            <div className="score-board">
                <div className="score">you score {score} / {total} correct answers!</div>
            <button className="playBtn" onClick={playAgain}>Play Again</button>
            </div>
    );

}
export default Result