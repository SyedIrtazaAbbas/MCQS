import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


function AddSemster() {
    var [setsem,datasem] = useState({
        semester:""
    })

    var handleSubmit=(e)=>{
        datasem({...setsem,[e.target.name]: e.target.value})
    }
var nas = useNavigate()


    var addsem=(d)=>{
        d.preventDefault();
        axios.post("http://localhost:8000/createsemester",setsem)
        nas('/fetchsemster')
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

      <h1>Add semester</h1>
    <form onSubmit={addsem}>
<input type='text' placeholder='Add Semster for mcqs ' name='semester'  onChange={handleSubmit} value={setsem.semester}/>
<br/><br/>
<input type='submit' value="add semster"/>
    </form>
    </main>
    </>
  )
}

export default AddSemster