import axios from 'axios';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

function Fetchsemster() {
    var [quessem,setsemh] = React.useState([]);

    var getdata=()=>{
        axios.get("http://localhost:8000/fetchsemester").then((res=>{
            setsemh(res.data)
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
<li><Link to={'/fetchquestion'}>Quesrtions </Link> </li>
<li><Link to={'/fetchsemster'}>Semesters </Link> </li>
<li> <Link>Logout   </Link></li> 
</ul>

</nav>
<main className='dashboard-content'>
<section className='dashboradadd'>
   <Link to={'/addsem'} className='add-button'>  Add Quiz  </Link>
    <h1>mcqs featch</h1>
</section>
<h1>semster featch </h1>


  <table border={3}>
<thead>
    <tr>
        <th>semster</th>    
    </tr>
    
 </thead>    
 <tbody>{
    quessem.map((semata)=>(
        <tr key={semata._id}>
            <td>{semata.semester}</td>
            
 
        </tr>
    ))
    }

 </tbody>
  </table>
  </main>

   
   </>
  )
}

export default Fetchsemster