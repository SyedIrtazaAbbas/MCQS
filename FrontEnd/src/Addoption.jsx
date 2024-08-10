import axios from 'axios'
import React, { useState } from 'react'

function Addoption() {
    var [setoption,dataoption] = useState({
        option:"",
    })

    var handleSubmit=(e)=>{
        dataoption({...setoption,[e.target.name]: e.target.value})
    }

    var addop=(d)=>{
        d.preventDefault();
        axios.post("http://localhost:8000/createoption",setoption)
    }


    
  return (
    <>
      <h1>Add question</h1>
    <form onSubmit={addop}>
<input type='text' placeholder='Add options 1 ' name='option'  onChange={handleSubmit} value={setoption.option}/>
<input type='submit' value="add options"/>
    </form>
    </>
  )
}

export default Addoption