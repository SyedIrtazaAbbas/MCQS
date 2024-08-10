import axios from 'axios'
import React, { useState } from 'react'
import './registers.css'


function Registers() {
  
    var [emailError,setEmailError] = useState('');
    var [nameError,setNameError] = useState('');
    
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

  
    
     
    var resgiteruser=(y)=>{ 
        y.preventDefault();

        let value = true;


        if (!userdata.uemail) {
          setEmailError('Email is required');
          value = false;

        }else{
          setEmailError('');
        }
        if (!userdata.uname) {
          setNameError('Name is required');
          value = false;
        }else{
          setNameError('');
        }
        if(!value){
          return;
        }

        
       


   


        axios.post("http://localhost:8000/user",userdata)
        .then((response)=>{
            console.log('form submite' , response.userdata);
        })
         .catch((error)=>{
            console.error('there  was an error!', error);
         })
    }
    
    return (
   <>
   <section className='register'>
    
    <div className='divregister'>
    <h1>Create  Account</h1>
    <h2>already have an account? <span>Log in</span></h2>
    <div className='registerforms'>
   <form  onSubmit={resgiteruser}>
     <h5>Enter Your Name</h5>
    <input type='text' placeholder='Enter Your Name' name='uname'    value={userdata.uname} onChange={handleSubmit}/>
    {nameError && <p>{nameError}</p>}

   
    <h5>Enter Your Email</h5>
    <input type='text' placeholder='Enter Your Email' name='uemail'   value={userdata.uemail} onChange={handleSubmit}/>
    {emailError && <p>{emailError}</p>}

    <h5>Enter Your Password</h5>
    <input type='text' placeholder='Enter Your Password' name='upassword'   onChange={handleSubmit}/>
   <h5 className='registerterms'>read the terms &  conditions</h5>
   <input type='submit' value="create your account"/>
   </form>
    </div>
</div>
  

    </section>
    </>
  )
}

export default Registers