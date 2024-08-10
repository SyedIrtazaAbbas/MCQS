import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
function Adminregisters() {


    var [admindata,setadmindata] = useState
    ({
          aname:"",
          aemail:"",
          apassword:"",    
    })
    var nas = useNavigate()

var handleSubmit=(e)=>{
    setadmindata({...admindata,[e.target.name]:e.target.value})
}

var resgiteradmin=(d)=>{
    d.preventDefault();
    axios.post("http://localhost:8000/admin",admindata);
   nas('/')
}

  return (
   
    <>
    <section className='register'>
    
    <div className='divregister'>
    <h1>aCreate  Account</h1>
    <h2>already have an account? <Link to='/'>Log in</Link></h2>
    <div className='registerforms'>
   <form  onSubmit={resgiteradmin}>
     <h5>Enter Your Name</h5>
    <input type='text' placeholder='Enter Your Name' name='aname'     onChange={handleSubmit}/>
 
    <h5>Enter Your Email</h5>
    <input type='text' placeholder='Enter Your Email' name='aemail'   onChange={handleSubmit}/>

    <h5>Enter Your Password</h5>
    <input type='text' placeholder='Enter Your Password' name='apassword'   onChange={handleSubmit}/>
   <h5 className='registerterms'>read the terms &  conditions</h5>
   <input type='submit' value="create your account"/>
   </form>
    </div>
</div>
  
    </section>
    </>
  )
}

export default Adminregisters