import React, { useState, useEffect } from "react";
import axios from "axios";
import './styles/QuestionForm.css';

function Report() {

  const [Report, setReport] = useState(undefined)

  console.log("role" + localStorage.getItem("role"))

  const role = localStorage.getItem("role")
  const ID = localStorage.getItem('id')

  console.log("ID" + ID)
  function getReport(){
  
    try {
        axios
          .get("http://localhost:5000/report")
          .then(res => {
              setReport(res.data)
              console.log("Report" + JSON.stringify(Report))
            });
      } catch (e) {
        alert("Axios error!" + e);
      }

      
  }

  useEffect(() => {
    getReport()
  }, [])


let reportList = ''


let count = 0;

if(Report!==undefined) {

if(role==='teacher') {
  reportList = Report.map((x) => {


    if(x.teacher_id===parseInt(ID)) {
      return(<tr>
        <th>{x.teacher_id===parseInt(ID)?++count:null}</th>
        <td>{x.teacher_id===parseInt(ID)?x.student_id:null}</td>
        <td>{x.teacher_id===parseInt(ID)?x.s_name:null}</td>
        <td>{x.teacher_id===parseInt(ID)?x.test_id:null}</td>
        <td>{x.teacher_id===parseInt(ID)?x.test_topic:null}</td>
        <td>{x.teacher_id===parseInt(ID)?x.score:null}</td>
       </tr>)
    }
    
 });
}else{

  console.log("ID" + typeof(ID))

  
 
  reportList = Report.map((x) => {
    console.log(typeof(x.student_id))


    if(x.student_id===parseInt(ID)){
      return(<tr>
        <th>{x.student_id===parseInt(ID)?++count:null}</th>
        <td>{x.student_id===parseInt(ID)?x.student_id:null}</td>
        <td>{x.student_id===parseInt(ID)?x.s_name:null}</td>
        <td>{x.student_id===parseInt(ID)?x.test_id:null}</td>
        <td>{x.student_id===parseInt(ID)?x.test_topic:null}</td>
        <td>{x.student_id===parseInt(ID)?x.score:null}</td>
       </tr>)
    }

 });

}

}

  //e.preventDefualt()

  if(role==="student") {
    return(
      <>
      <div className='container'>
      <div className='form-group col-lg-12 mx-auto mb-0'>
                    <button
                      type='submit'
                      className='btn btn- btn-block py-2'>
                      <span className='font-weight-bold'>
                      <a href="/Status">Check Status</a>
                      </span>
                    </button>
                  </div>
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col"> </th>
                <th scope="col">Student ID</th>
                <th scope="col">Student Name</th>
                <th scope="col">Test ID</th>
                <th scope="col">Test Topic</th>
                <th scope="col">Score</th>
                </tr>
            </thead>
            <tbody>
                {reportList}
            </tbody>
        </table>
        </div>
      </>
    );
  }
  else {
    return (
      <>
      <div className='container'>
      <div className='form-group col-lg-12 mx-auto mb-0'>
                    <button
                      type='submit'
                      className='btn btn- btn-block py-2'>
                      <span className='font-weight-bold'>
                      <a href="/Status">Check Status</a>
                      </span>
                    </button>
                  </div>
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col"> </th>
                <th scope="col">Student ID</th>
                <th scope="col">Student Name</th>
                <th scope="col">Test ID</th>
                <th scope="col">Test Topic</th>
                <th scope="col">Score</th>
                </tr>
            </thead>
            <tbody>
                {reportList}
            </tbody>
        </table>
        </div>
      </>
    );
  }

}

export default Report;