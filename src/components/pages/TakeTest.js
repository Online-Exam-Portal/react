import React,{Component} from 'react';
import "../Utilities/styles/s.css";
import QuestionBox from "../Utilities/QuestionBox"
import quizService from '../quizService'; 
import Result from '../Utilities/Result';
import axios from 'axios';
import '../../App.css';


class TakeTest extends Component{
  
  state={
    questionBank: [],
    score: 0,
    responses: 0,
    AllDone: false,
    which_test: '',
    Tests: undefined,
  };

  getQuestions = (id) => {  

    let idNum = parseInt(id)
    //alert("API calls " + id)
    function checkTest(object) {
      return object.test_id===idNum;
    }
    axios.get(`http://localhost:5000/mcq`)
      .then(res => {
        this.setState({
          questionBank:res.data.filter(checkTest)
        });  
    })
    
  };

 
  

computeAnswer = (answer, correctAnswer, optionA, optionB, optionC, optionD) =>{
  
  console.log("computeee")

  let correct = '';

  switch(correctAnswer) {
    case "A" : correct=optionA;
               break;
    case "B" : correct=optionB;
               break;
    case "C" : correct=optionC;
               break;
    case "D" : correct=optionD;
               break;
    default : break;

  }

  if(answer === correct)
  {
    console.log("if")
    this.setState({
      score :this.state.score +1
    });
  }
  this.setState({
    responses: this.state.responses < this.state.questionBank.length  ? this.state.responses +1 :this.state.questionBank.length 
  });

}

getResult = (score, playAgain) => {

  alert("Inside get result")
  alert("Score: " + score)

}

playAgain =() => {
  this.getQuestions(this.props.id);
  this.setState({
    score :0,
    responses:0,
  });
  window.location.reload();
}




callResult = () => {

  let id = localStorage.getItem("id")

  axios.post("http://localhost:5000/result", {
    student_id: id,
    test_id: this.props.id,
    score: this.state.score,
  }).then(res=>{
      console.log(res)
  })

  this.setState({
    AllDone: true
  })
}




componentDidMount(){
  this.getQuestions(this.props.id);  
}

   

  render(){

      
      console.log("Responses : " + this.state.responses)
      console.log("len : " + this.state.questionBank.length)
      const role = localStorage.getItem("role");

      if((this.state.questionBank[0])!==undefined)
       console.log("hello : " + JSON.stringify(this.state.questionBank))
      else
        console.log("whyyyyyyyyy")
        if(role==="teacher") {
          return(
            <div>
              Only students can access this page!
            </div>
          );
        }else{


          if(!this.state.AllDone) {

            return(
              <div className='container'>
      
                <div className='d-flex justify-content-center input-group col-lg-12 mb-4'>
                  Quiz Time!       
                </div>
      
                  {  
                    
                    this.state.questionBank.length > 0 && this.state.responses <= this.state.questionBank.length &&
                    this.state.questionBank.map(({question_id, question, optionA, optionB, optionC, optionD, correct_option}) => (
                      <QuestionBox question={question} optionA={optionA} optionB={optionB} optionC={optionC} optionD={optionD} 
                      key={question_id} 
                      selected={answer => this.computeAnswer(answer, correct_option, optionA, optionB, optionC, optionD)}/>
                      ) 
                    )
                  }
      
                 <button type='submit' className='btn btn- btn-block py-2' onClick={this.callResult}>
                      <span className='font-weight-bold'>
                          Submit the test
                      </span>
                </button> 
      
            {/*this.state.AllDone ? (<Result score={this.state.score} playAgain={this.playAgain} total={this.state.questionBank.length} test_id={this.props.id}/>) : null */}
                
              </div>
               );

          }else {
              return(
                <div className='container'>
                  <Result score={this.state.score} playAgain={this.playAgain} total={this.state.questionBank.length} test_id={this.props.id}/>
                </div>
              );
          }

        
          }
  }
  
}

export default TakeTest;




/*export default function TakeTest() {
  return <h1 className='TakeTest'>TAKE TEST</h1>;
}*/