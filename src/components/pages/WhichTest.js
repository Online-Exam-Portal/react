import React, {useState, useEffect} from 'react';
import axios from 'axios';
import TakeTest from './TakeTest';
import "../s.css";
import QuestionBox from "../QuestionBox"

function WhichTest() {

    const [state, setstate] = useState(undefined)
    const [Tests, setTests] = useState(undefined)

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

    console.log(state)
      /*const testList = <option>dwndol</option>
      const testList1 = <option>dwndol</option>*/

      let testList = ''
      let testList1 = ''

    if(Tests!==undefined) {
    testList = Tests.map((x) => {return(<option key={x.test_id}>{x.test_id}</option>)});
    testList1 = Tests.map((x) => {return(<li key={x.test_id}>{x.test_id} : {x.test_topic}</li>)});
    }

    if(state===undefined)
    return(
        <div className='container'>
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
                    onChange={(e) => setstate(e.target.value)}
                    value={state}>
                    <option>Choose a topic</option>
                    {testList}
                  </select>
            </div>
            <div className='d-flex justify-content-center input-group col-lg-12 mb-4'>
                  <ul type='none'>
                    {testList1}
                  </ul>
            </div>
            <button type='submit' className='btn btn- btn-block py-2'>
                <span className='font-weight-bold'>
                    Go to the test page
                </span>
            </button>

            {/*state===undefined ? null : <TakeTest id={state}/>*/}

        </div>
    );
    else
    return(
      <div>
        <TakeTest id={state}/>
      </div>
    );
}

export default WhichTest;