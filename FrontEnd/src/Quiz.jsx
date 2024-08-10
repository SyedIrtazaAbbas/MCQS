import axios from 'axios';
import React, { useState } from 'react'


function Quiz() {
    
        var [quiz, setQuiz] = useState({
            semester: "",
            question: "",
        });
      
       
      
        // Handle input changes
        function handle_input(e) {
            setQuiz({...quiz,[e.target.name]:e.target.value})
    
        }
      
        // Submit quiz data to the backend
        function add_quiz(e) {
          e.preventDefault();
          axios.post("http://localhost:8000/createquiz", quiz)
        }
      
 
  
    return (
      <>
        <h1>Create Quiz</h1>
        <form onSubmit={add_quiz}>
          <label>
            Semester:
            <input
              type="text"
              name="semester"
              value={quiz.semester}
              onChange={handle_input}
              placeholder="Enter Semester"
            />
          </label>
          <br /><br />
          <label>
            Question:
            <input
              type="text"
              name="question"
              value={quiz.question}
              onChange={handle_input}
              placeholder="Enter Question"
            />
          </label>
          <br /><br />
          <input type="submit" value="Add Quiz" />
        </form>
      
 
  </>
  )
}

export default Quiz