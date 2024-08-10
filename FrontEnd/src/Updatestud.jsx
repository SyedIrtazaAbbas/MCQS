import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function Updatestud() {

    var [studata,setstudata] = useState
    (
        {
         uname:"",
         uemail:"",
         upassword:""
        }
    )

var handleSubmit= (e) =>{
    setstudata({...studata,[e.target.name]:e.target.value})
}

var { id } = useParams();
    var navigate = useNavigate()

    var getsinglestud=()=>{
        axios.get(`http://localhost:8000/userupdate/${id}`).then((res)=>{
            setstudata(res.data)
        }) 
    }


    useEffect(()=>{getsinglestud()},[])

var update = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:8000/user/${id}`, studata);
    navigate('/studfetch')
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
<h1>Student Uptade </h1>
    <form onSubmit={update}>
<input type='text' placeholder='Upadte the name ' name='uname'  onChange={handleSubmit} value={studata.uname}/>
<br/><br/>
<input type='text' placeholder='Upadte the email ' name='uemail' value={studata.uemail} onChange={handleSubmit}/>
<br/><br/>

<input type='text' placeholder='Upadte the password ' name='upassword' value={studata.upassword} onChange={handleSubmit}/>
<br/><br/>

<input type='submit' value="update user"/>
    </form>
    </main>
   
   
    </>
  )
}

export default Updatestud