import { Component } from "react";
import React,{useState} from "react";

const QuestionBox = ({question, optionA, optionB, optionC, optionD, selected}) => {
    let options = [optionA, optionB, optionC, optionD]
    const [answer,setAnswer] =useState(options);
    return<div className="questionBox">
        <div className="question">{question}</div>
        {answer.map((text,index) => (<button key={index} className="answerBtn" onClick={()=>{setAnswer([text]);
        selected(text);}}>{text}</button>))}
    </div>
};

export default QuestionBox;