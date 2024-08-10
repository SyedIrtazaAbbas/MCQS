import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Addquiction() {
    var [setquestion,dataquis] = useState({
        question:""
    })

    var handleSubmit=(e)=>{
        dataquis({...setquestion,[e.target.name]: e.target.value})
    }
    var nas = useNavigate()

    var addquestion=(d)=>{
        d.preventDefault();
        axios.post("http://localhost:8000/createquestion",setquestion)
        nas ('/fetchquestion')
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
<li> <Link>Logout   </Link></li> 
</ul>

</nav>
<main className='dashboard-content'>      
<h1>Add question</h1>
    <form onSubmit={addquestion}>
<input type='text' placeholder='Add question for mcqs ' name='question'  onChange={handleSubmit} value={setquestion.question}/>
<br/><br/>
<input type='submit' value="add question"/>
    </form>

</main>
   
    </>
  )
}

export default Addquiction