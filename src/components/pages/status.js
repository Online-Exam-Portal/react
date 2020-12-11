import React, { useState, useEffect } from "react";
import axios from "axios";
import './QuestionForm.css';

function Status() {

  const [Report, setReport] = useState(undefined)

  console.log("role" + localStorage.getItem("role"))

  const role = localStorage.getItem("role")
  const ID = localStorage.getItem('id')

  console.log("ID" + ID)
  function getReport(){
  
    try {
        axios
          .get("http://localhost:5000/status")
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
    return(<tr>
            <th>{++count}</th>
            <td>{x.student_id}</td>
            <td>{x.status}</td>
           </tr>)
 });
}else{

  console.log("ID" + typeof(ID))

  
 
    reportList = Report.map((x) => {
    console.log(typeof(x.student_id))
    return(<tr>
            <th>{x.student_id===parseInt(ID)?++count:null}</th>
            <td>{x.student_id===parseInt(ID)?x.student_id:null}</td>
            <td>{x.student_id===parseInt(ID)?x.status:null}</td>
           </tr>)
 });

}

}

  //e.preventDefualt()

  if(role==="student") {
    return(
      <>
      <div className='container'>
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col"> </th>
                <th scope="col">Student ID</th>
                <th scope="col">Student Status</th>
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
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col"> </th>
                <th scope="col">Student ID</th>
                <th scope="col">Student Status</th>
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

export default Status;