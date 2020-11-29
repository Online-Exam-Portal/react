import React, { useState } from "react";
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

  const submitForm = (e) => {
    e.preventDefault();
    console.log(
      "Current state is : " +
        JSON.stringify({ question , correct_option })
    );

  
      try {
        axios
          .post("http://localhost:5000/mcq", {
            question_id: question_id,
            question: question,
            optionA: optionA,
            optionB: optionB,
            optionC: optionC,
            optionD: optionD,
            correct_option: correct_option,
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
    // e.preventDefualt()
  };

  

  //e.preventDefualt()

  return (
    <>
      <div className='container'>
        <div className='row py-5 mt-4 align-items-center'>
          <div className='col-md-5 pr-lg-5 mb-5 mb-md-0'>
            <img
              src='https://res.cloudinary.com/mhmd/image/upload/v1569543678/form_d9sh6m.svg'
              alt=''
              className='img-fluid mb-3 d-none d-md-block'
            />
            <h1>Create a test</h1>
          </div>

          <div className='col-md-7 col-lg-6 ml-auto'>
            <form onSubmit={submitForm}>
              <div className='row'>
                
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
                    className='btn btn-primary btn-block py-2'>
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

export default QuestionForm;


/*
export default class QuestionForm extends Component {
state = {
  Topic: "",
  Question: "",
  optionA: "",
  optionB: "",
  optiionC: "",
  optionD: "",
  correct_option: ""
};

change = e => {
  this.props.onChange({ [e.target.name]: e.target.value });
  this.setState({
    [e.target.name]: e.target.value
  });
  console.log(this.state)
};

onSubmit = e => {
  alert(JSON.stringify(this.state))
  e.preventDefault();
  // this.props.onSubmit(this.state);
  this.setState({
    Topic: "",
    Question: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    correct_option: ""
  });
};

render() {
  return (
    <form>
    <div className='Topic'>
    <label>Topic : </label>
     <input
       name="Topic "
       placeholder="Topic "
       value={this.state.Topic}
       onChange={e => this.change(e)}
       style={{ width: "350px", height: "40px", marginLeft: "50px", marginBottom: "50px"}}
     />
    </div>
     <div className='Question'>
     <label>QUESTION : </label>
      <input
        name="Question"
        placeholder="Question"
        value={this.state.Question}
        onChange={e => this.change(e)}
        style={{ width: "550px", height: "50px", marginLeft: "50px"}}
      />
     </div>
     <div className='Option-Container'>
     <label>Option A : </label>
      <input
        name="OptionA"
        placeholder="Option A"
        value={this.state.optionA}
        onChange={e => this.change(e)}
        style={{marginBottom: "30px", marginTop: "50px", marginLeft: "20px"}}
      />
      <br />
      <label>Option B : </label>
      <input
        name="OptionB"
        placeholder="Option B"
        value={this.state.optionB}
        onChange={e => this.change(e)}
        style={{marginBottom: "30px", marginTop: "10px", marginLeft: "20px"}}
      />
      <br />
      <label>Option C : </label>
      <input
        name="OptionC"
        placeholder="Option C"
        value={this.state.optionC}
        onChange={e => this.change(e)}
        style={{marginBottom: "30px", marginTop: "10px", marginLeft: "20px"}}
      />
      <br />
      <label>Option D : </label>
      <input
        name="OptionD"
        placeholder="Option D"
        value={this.state.optionD}
        onChange={e => this.change(e)}
        style={{marginBottom: "30px", marginTop: "10px", marginLeft: "20px"}}
      />
      </div>
      <div className='Correct-Option'>
      <label>Correct Option : </label>
      <input
        name="CorrectOption"
        placeholder="Correct Option"
        value={this.state.correct_option}
        onChange={e => this.change(e)}
        style={{width: "230px", height: "40px", marginBottom: "30px", marginTop: "30px", marginLeft: "20px"}}
      />
      </div>
      <br />
      <button onClick={e => this.onSubmit(e)}
      style={{height:"40px",width:"120px",color: "green",}}>Submit</button>
    </form>
  );
}
}
*/