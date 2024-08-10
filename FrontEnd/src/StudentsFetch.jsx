import axios from 'axios';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

function StudentsFetch() {

    var [Studfetch,setstudfetch] = React.useState([]);

    var getdata=()=>{
        axios.get("http://localhost:8000/user").then((res=>{
            setstudfetch(res.data)
        }))
    }
    useEffect(()=>{
        getdata();
    },[])

 




 var deletedstud = (id) =>{
    axios.delete(`http://localhost:8000/user/${id}`).then(() => {
        getdata(); 
    });
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

<section className='dashboradadd'>
<Link to='/addstu'  className='add-button'>        Add Student      </Link>
    <h1>Student featch</h1>
</section>


  <table border={3}>
<thead>
    <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Password</th>
        <th>option deleted</th>
        <th>option update</th>
        
    </tr>
    
 </thead>    
 <tbody>{
    Studfetch.map((studata)=>(
        <tr key={studata._id}>
            <td>{studata.uname}</td>
            <td>{studata.uemail}</td>
            <td>{studata.upassword}</td>
            <td><button onClick={()=> deletedstud(studata._id)}> Deleted </button></td>
            <td>
                                <Link to={`/updatestu/${studata._id}`}>
                                    <button>Update</button>
                                </Link>
                            </td>
 
        </tr>
    ))
    }

 </tbody>
  </table>
  </main>


  </>
  )
}

export default StudentsFetch