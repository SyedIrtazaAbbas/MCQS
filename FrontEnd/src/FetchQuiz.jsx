import axios from 'axios';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

function FetchQuiz() {
var [quizda,setquzia] = React.useState([]);

var getquiz=()=>{
    axios.get("http://localhost:8000/fetchquiz").then((res =>{
        setquzia(res.data)
    }))
}

useEffect(()=>{
    getquiz();
},[])

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
<section className='dashboradadd'>
  <Link to='/Mcqs' className='add-button'>    Add Quiz      </Link>
    <h1>mcqs featch</h1>
</section>
  <table border={3}>
<thead>
    <tr>
        <th>mquis</th>
        <th>quiest</th>
        <th>options</th>
        <th>cooect answer</th>
    </tr>
    
 </thead>    
 <tbody>{
    quizda.map((quizd)=>(
        <tr key={quizd._id}>
            <td>{quizd.semester}</td>
            <td>{quizd.question}</td>
            <td>
    <div className="options-container">
        {quizd.options.map((option, index) => (
            <div key={index} className="option-block">
                {option}
            </div>
        ))}
    </div>
</td>
           
            <td>{quizd.correctOption}</td>
         
        </tr>
    ))
    }

 </tbody>
  </table>
  </main>


  </>
    
   
  )
}

export default FetchQuiz