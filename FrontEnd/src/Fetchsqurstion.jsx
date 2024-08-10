import axios from 'axios';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

function Fetchsqurstion() {
    var [quesfetch,setquesetch] = React.useState([]);

    var getdata=()=>{
        axios.get("http://localhost:8000/fetchquestion").then((res=>{
            setquesetch(res.data)
        }))
    }
    useEffect(()=>{
        getdata();
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
<li><Link to={'/fetchques'}>Quesrtions </Link> </li>
<li><Link to={'/fetchsemster'}>Semesters </Link> </li>
<li> <Link>Logout   </Link></li> 
</ul>

</nav>
<main className='dashboard-content'>
<section className='dashboradadd'>
    <Link to={'/addqus'} className='add-button'>  Add question  </Link>
    <h1>mcqs featch</h1>
</section>
<h1>question featch </h1>


  <table border={3}>
<thead>
    <tr>
        <th>question</th>    
    </tr>
    
 </thead>    
 <tbody>{
    quesfetch.map((qusdata)=>(
        <tr key={qusdata._id}>
            <td>{qusdata.question}</td>
            
 
        </tr>
    ))
    }

 </tbody>
  </table>
  </main>

   
   </>
  )
}

export default Fetchsqurstion