import React, {useEffect} from "react";
import axios from "axios";

const Result = ({score, playAgain, total, test_id}) => {

    console.log("role" + localStorage.getItem("role"))
    const id = localStorage.getItem("id")
/*

    useEffect(() => {
        axios.post("http://localhost:5000/result", {
        student_id: id,
        test_id: test_id,
        score: score,
    })}, [])
*/
    

    return(
            <div className="score-board">
                <div className="score">You score {score} / {total} correct answers!</div>
            <button className="playBtn" onClick={playAgain}>Take a test again</button>
            </div>
    );

}
export default Result