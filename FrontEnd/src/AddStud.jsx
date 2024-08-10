import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function AddStud() {
 
    
    var [userdata,setuserdata] = useState
    (
        {
        uname:"",
        uemail:"",
        upassword:""
    })

    
    
    var handleSubmit=(s)=>{
     setuserdata({...userdata,[s.target.name]:s.target.value})
    }
    var nas = useNavigate()

    var resgiteruser=(y)=>{ 
        y.preventDefault();

  
        
       


   


        axios.post("http://localhost:8000/user",userdata)

        nas ('studfetch')
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
<h1>Add Student</h1>
    <form onSubmit={resgiteruser}>
        
    <input type='text' placeholder='Enter student Name' name='uname'    value={userdata.uname} onChange={handleSubmit}/>
    <input type='text' placeholder='Enter student Email' name='uemail'   value={userdata.uemail} onChange={handleSubmit}/>
    <input type='text' placeholder='Enter student Password' name='upassword'   onChange={handleSubmit}/>
<br/><br/>
<input type='submit' value="Add Student"/>

    </form>

</main>

   </>
  )
}

export default AddStud