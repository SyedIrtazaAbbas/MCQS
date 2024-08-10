import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


function AdminLogin() {
  
    var [admins, setadmin] = useState({
        aemail: "",
        apassword: ""
      });
    
      var [incorrect, setincorrectdate] = useState();
    
      var nav = useNavigate();
    
      var handleInput = (e) => {
        setadmin({ ...admins, [e.target.name]: e.target.value });
      };
    
      var admilogin = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/loginadmin', admins)
        .then((response) => {
          if (response.data) {
            nav("/dashborad");
          } else {
            setincorrectdate("Invalid Email or Password");
            e.target[0].value = "";
            e.target[1].value = "";
          }
          
        })
        .catch(() => {
            setincorrectdate("An error occurred");
            e.target[0].value = "";
            e.target[1].value = "";
        });
        
      };
    
    return (
  <>
  <section className='register'>

  <div className='registerforms'>

  <form onSubmit={admilogin}>
  <h1>Login</h1>

  <h5>Enter Your Email</h5>


<input  type='text' placeholder='Enter Your Email' name='aemail' onChange={handleInput}/>
<h5>Enter Your Password</h5>

<input type='password' placeholder='Enter Your Password' name='apassword' onChange={handleInput}/>
<input type='submit' value="login"/>
<Link to={'/admin'}> <h2 style={{color: "green"}}>resgeister your selft</h2> </Link>
  </form>
  
  <h3 style={{color:"red"}}>{incorrect}</h3>
  </div>


  
    </section>
  </>
  )
}

export default AdminLogin