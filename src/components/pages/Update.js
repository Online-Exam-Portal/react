import React, { useState, useEffect } from "react";
import axios from "axios";
import './QuestionForm.css';

function QuestionForm() {

  const [question_id, setQuestion_id] = useState("");
  const [question, setQuestion] = useState("");
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");
  const [optionC, setOptionC] = useState("");
  const [optionD, setOptionD] = useState("");
  const [correct_option, setCorrect_option] = useState("");
  const [Tests, setTests] = useState(undefined)
  const [test_id, settest_id] = useState("")


  console.log("role" + localStorage.getItem("role"))

  const role = localStorage.getItem("role")

  function getOptions() {
    try {
        axios
          .get("http://localhost:5000/tests")
          .then(res => {
              console.log(res.data.map((obj)=>{
                return obj.test_id;
              }))
              setTests(res.data)
            });
      } catch (e) {
        alert("Axios error!" + e);
      }
}

useEffect(() => {
  getOptions()
}, [])

let testList = ''
let testList1 = ''

if(Tests!==undefined) {
  testList = Tests.map((x) => {return(<option key={x.test_id}>{x.test_id}</option>)});
  testList1 = Tests.map((x) => {return(<li key={x.test_id}>{x.test_id} : {x.test_topic}</li>)});
}


  const submitForm = (e) => {
    e.preventDefault();
    console.log(
      "Current state is : " +
        JSON.stringify({ question , correct_option })
    );

  
      try {
        axios
          .post("http://localhost:5000/mcq",{
            question: question,
            optionA: optionA,
            optionB: optionB,
            optionC: optionC,
            optionD: optionD,
            correct_option: correct_option,
            test_id: test_id
          })
          .then(function (response) {
            alert("Form successfully submitted.");
            console.log(response);
            console.log(response.data);
          });
      } catch (e) {
        alert("Axios error!" + e);
      }

      setQuestion_id("");
      setQuestion("");
      setOptionA("");
      setOptionB("");
      setOptionC("");
      setOptionD("");
      setCorrect_option("");
      setTests(undefined)
    // e.preventDefualt()
  };

  

  //e.preventDefualt()

  if(role==="student") {
    return(
      <div>
        Only teachers can access this page!
      </div>
    );
  }
  else {
    return (
      <>
        <div className='container'>
          <div className='row py-5 mt-4 align-items-center'>
            <div className='col-md-5 pr-lg-5 mb-5 mb-md-0'>
              <img
                src='https://www.flaticon.com/svg/static/icons/svg/2333/2333132.svg'
                alt=''
                className='img-fluid mb-3 d-none d-md-block'
              />
              <h1>Update a question</h1>
            </div>
  
            <div className='col-md-7 col-lg-6 ml-auto'>
              <form onSubmit={submitForm}>
                <div className='row'>
                  
                <div className='d-flex justify-content-center input-group col-lg-12 mb-4'>
                    <div className='input-group-prepend'>
                      <span className='input-group-text bg-white px-4 border-md border-right-0'>
                        <i className='fa fa-envelope text-muted'></i>
                      </span>
                    </div>
                    <select
                      id='college'
                      type='college'
                      name='college'
                      className='form-control bg-white border-left-0 border-md'
                      onChange={(e) => settest_id(e.target.value)}
                      value={test_id}>
                      <option>Choose a topic</option>
                      {testList}
                    </select>
              </div>
              <div className='d-flex justify-content-center input-group col-lg-12 mb-4'>
                    <ul type='none'>
                      {testList1}
                    </ul>
              </div>
              
                  <div className='input-group col-lg-12 mb-4'>
                    <div className='input-group-prepend'>
                      <span className='input-group-text bg-white px-4 border-md border-right-0'>
                        <i className='fa fa-user text-muted'></i>
                      </span>
                    </div>
                    <input
                      id='question_id'
                      type='text'
                      name='question_id'
                      placeholder='Question ID'
                      className='form-control bg-white border-left-0 border-md'
                      onChange={(e) => setQuestion_id(e.target.value)}
                      value={question_id}
                    />
                  </div> 
  
                  <div className='input-group col-lg-12 mb-4'>
                    <div className='input-group-prepend'>
                      <span className='input-group-text bg-white px-4 border-md border-right-0'>
                        <i className='fa fa-user text-muted'></i>
                      </span>
                    </div>
                    <input
                      id='question'
                      type='text'
                      name='question'
                      placeholder='Question'
                      className='form-control bg-white border-left-0 border-md'
                      onChange={(e) => setQuestion(e.target.value)}
                      value={question}
                    />
                  </div>
  
                  <div className='input-group col-lg-12 mb-4'>
                    <div className='input-group-prepend'>
                      <span className='input-group-text bg-white px-4 border-md border-right-0'>
                        <i className='fa fa-envelope text-muted'></i>
                      </span>
                    </div>
                    <input
                      id='optionA'
                      type='optionA'
                      name='optionA'
                      placeholder='Option A'
                      className='form-control bg-white border-left-0 border-md'
                      onChange={(e) => setOptionA(e.target.value)}
                      value={optionA}
                    />
                  </div>
  
                  <div className='input-group col-lg-12 mb-4'>
                    <div className='input-group-prepend'>
                      <span className='input-group-text bg-white px-4 border-md border-right-0'>
                        <i className='fa fa-envelope text-muted'></i>
                      </span>
                    </div>
                    <input
                      id='optionB'
                      type='optionB'
                      name='optionB'
                      placeholder='Option B'
                      className='form-control bg-white border-left-0 border-md'
                      onChange={(e) => setOptionB(e.target.value)}
                      value={optionB}
                    />
                    </div>
  
                    <div className='input-group col-lg-12 mb-4'>
                    <div className='input-group-prepend'>
                      <span className='input-group-text bg-white px-4 border-md border-right-0'>
                        <i className='fa fa-envelope text-muted'></i>
                      </span>
                    </div>
                    <input
                      id='optionC'
                      type='optionC'
                      name='optionC'
                      placeholder='Option C'
                      className='form-control bg-white border-left-0 border-md'
                      onChange={(e) => setOptionC(e.target.value)}
                      value={optionC}
                    />
                    </div>
  
                    <div className='input-group col-lg-12 mb-4'>
                    <div className='input-group-prepend'>
                      <span className='input-group-text bg-white px-4 border-md border-right-0'>
                        <i className='fa fa-envelope text-muted'></i>
                      </span>
                    </div>
                    <input
                      id='optionD'
                      type='optionD'
                      name='optionD'
                      placeholder='Option D'
                      className='form-control bg-white border-left-0 border-md'
                      onChange={(e) => setOptionD(e.target.value)}
                      value={optionD}
                    />
                    </div>
  
                    <div className='input-group col-lg-12 mb-4'>
                    <div className='input-group-prepend'>
                      <span className='input-group-text bg-white px-4 border-md border-right-0'>
                        <i className='fa fa-user text-muted'></i>
                      </span>
                    </div>
                    <input
                      id='correct_option'
                      type='text'
                      name='correct_option'
                      placeholder='Correct option(A, B, C or D)'
                      className='form-control bg-white border-left-0 border-md'
                      onChange={(e) => setCorrect_option(e.target.value)}
                      value={correct_option}
                    />
                  </div>
  
                    <div className='form-group col-lg-12 mx-auto mb-0'>
                    <button
                      type='submit'
                      className='btn btn- btn-block py-2'>
                      <span className='font-weight-bold'>
                        Create the question
                      </span>
                    </button>
                  </div>
                  
  
                                 
                </div>{/*row*/}
  
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }

}

export default QuestionForm;