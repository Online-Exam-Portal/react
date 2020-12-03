import React, { useState, useEffect } from "react";
import axios from "axios";
import './QuestionForm.css';

function Topic() {

    const [test_id, setTest_id] = useState('')
    const [test_topic, setTest_topic] = useState('')

  console.log("role" + localStorage.getItem("role"))

  const role = localStorage.getItem("role")


  const submitForm = (e) => {
    e.preventDefault();
  
      try {
        axios
          .post("http://localhost:5000/tests", {
            test_id: test_id,
            test_topic: test_topic
          })
          .then(function (response) {
            alert("Form successfully submitted.");
            console.log(response);
            console.log(response.data);
          });
      } catch (e) {
        alert("Axios error!" + e);
      }

      
      setTest_id('')
      setTest_topic('')
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
              <h1>Add a topic</h1>
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
                      placeholder='Test ID'
                      className='form-control bg-white border-left-0 border-md'
                      onChange={(e) => setTest_id(e.target.value)}
                      value={test_id}
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
                      name='Topic'
                      placeholder='Topic'
                      className='form-control bg-white border-left-0 border-md'
                      onChange={(e) => setTest_topic(e.target.value)}
                      value={test_topic}
                    />
                  </div>
  
                    
                    <div className='form-group col-lg-12 mx-auto mb-0'>
                    <button
                      type='submit'
                      className='btn btn- btn-block py-2'>
                      <span className='font-weight-bold'>
                        Add the topic
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

export default Topic;