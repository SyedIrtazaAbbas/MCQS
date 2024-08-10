import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Mcqas() {
    var [semesters, setSemesters] = useState([]);
    var [questions, setQuestions] = useState([]);
    var [options, setOptions] = useState([]);
    var [quiz, setQuiz] = useState({
        semester: "",
        question: "",
        options: []
    });
    var [correctOption, setCorrectOption] = useState(""); 

    useEffect(function() {
        axios.get("http://localhost:8000/fetchsemester")
            .then(function(response) {
                setSemesters(response.data);
            })
           
    }, []);

    function fetchQuestions(semester) {
        axios.get(`http://localhost:8000/fetchquestion?semester=${semester}`)
            .then(function(response) {
                setQuestions(response.data);
            })
            
           
    }


    function fetchOptions(question) {
        axios.get(`http://localhost:8000/fetchoption?question_no=${question}`)
            .then(function(response) {
                setOptions(response.data);
            })
           
    }

    function handleChange(e) {
        var name = e.target.name;
        var value = e.target.value;

        if (name === "semester") {
            setQuiz(function(prevQuiz) {
                return {
                    ...prevQuiz,
                    semester: value,
                    question: "",
                    options: [] 
                };
            });
            fetchQuestions(value);
        } else if (name === "question") {
            setQuiz(function(prevQuiz) {
                return {
                    ...prevQuiz,
                    question: value,
                    options: [] 
                };
            });
            fetchOptions(value);
        } else if (name.startsWith("option")) {
            var index = parseInt(name.split('_')[1], 10);
            var updatedOptions = [...quiz.options];
            updatedOptions[index] = value;
            setQuiz(function(prevQuiz) {
                return {
                    ...prevQuiz,
                    options: updatedOptions
                };
            });
        } else if (name === "correctOption") {
            setCorrectOption(value); 
        }
    }
    var nas = useNavigate()


    function handleSubmit(e) {
        e.preventDefault();
        axios.post("http://localhost:8000/createquiz", {
            ...quiz,
            correctOption: correctOption 
        })
        .then(function() {
            setQuiz({
                semester: "",
                question: "",
                options: [] 
            });
            setCorrectOption(""); 
        })
        nas('/fetchmcqs')
        .catch(function(err) {
            console.error('Error creating quiz:', err);
        });
    }

    return (
        <>
           <header className='dashboard-header'>
<h1 className='dashboard-title'>Dashborad</h1>

   </header>
<nav className='dashboard-sidebar'>
<ul className='dashboard-menu'>
<li> <Link> Your Account  </Link> </li>
<li> <Link to={'/studfetch'}> Students    </Link> </li>
<li><Link to={'/fetchmcqs'}>Mcqas </Link> </li>
<li><Link to={'/fetchquestion'}>Quesrtions </Link> </li>
<li><Link to={'/fetchsemster'}>Semesters </Link> </li>
<li> <Link> Logout </Link></li> 
</ul>
</nav>
         <main className='dashboard-content'> 
<h1> Creare a quzi</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Semester:
                    <select name="semester" value={quiz.semester} onChange={handleChange}>
                        <option hidden>Select Semester</option>
                        {semesters.map(function(sem) {
                            return (
                                <option key={sem._id} value={sem.semester}>{sem.semester}</option>
                            );
                        })}
                    </select>
                </label>
                <br /><br />
                <label>
                    Question:
                    <select name="question" value={quiz.question} onChange={handleChange}>
                        <option hidden>Select Question</option>
                        {questions.map(function(que) {
                            return (
                                <option key={que._id} value={que.question_no}>{que.question}</option>
                            );
                        })}
                    </select>
                </label>
                <br /><br />
                <div>
                    <label>
                        Option 1:
                        <input
                            type="text"
                            name="option_0"
                            value={quiz.options[0] || ""}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Option 2:
                        <input
                            type="text"
                            name="option_1"
                            value={quiz.options[1] || ""}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Option 3:
                        <input
                            type="text"
                            name="option_2"
                            value={quiz.options[2] || ""}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Option 4:
                        <input
                            type="text"
                            name="option_3"
                            value={quiz.options[3] || ""}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <br /><br />
                <label>
                    Correct Option:
                    <select name="correctOption" value={correctOption} onChange={handleChange}>
                        <option hidden>Select Correct Option</option>
                        {quiz.options.map(function(opt, index) {
                            return (
                                <option key={index} value={opt}>{opt}</option>
                            );
                        })}
                    </select>
                </label>
                <br /><br />
                <input type="submit" value="Add Quiz" />
            </form>

         </main>
           
        </>
    );
}

export default Mcqas;
