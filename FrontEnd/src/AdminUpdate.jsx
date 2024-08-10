import React from 'react'

function AdminUpdate() {
    
  return (
 <>
 <header className='dashboard-header'>
<h1 className='dashboard-title'>Dashborad</h1>

   </header>
<nav className='dashboard-sidebar'>
<ul className='dashboard-menu'>
<li> <Link> Your Account  </Link> </li>
<li> <Link to={'/studfetch'}> Students    </Link> </li>
<li><Link>Mcqas </Link> </li>
<li> <Link>Logout   </Link></li> 
</ul>

</nav>
<main>

</main>
 
 </>
  )
}

export default AdminUpdate