import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Registers from './Registers'
import Adminregisters from './Adminregisters'
import StudentsFetch from './StudentsFetch'
import Dashborad from './Dashborad'
import Updatestud from './Updatestud'
import AdminLogin from './AdminLogin'
import AdminUpdate from './AdminUpdate'
import Mcqas from './Mcqas'
import AddSemster from './AddSemster'
import Addquiction from './Addquiction'
import Addoption from './Addoption'
import FetchQuiz from './FetchQuiz'
import Fetchsemster from './Fetchsemster'
import Fetchsqurstion from './Fetchsqurstion'
import AddStud from './AddStud'

function App() {
  return (
  <>
  <Routes>
    <Route path='sturegister' element={<Registers/>}/>
    <Route path='admin' element={<Adminregisters/>}/>
    <Route path='studfetch' element={<StudentsFetch/>}/>
    <Route path='dashborad'  element={<Dashborad/>}/>
    <Route path='updatestu/:id' element={<Updatestud/>}/>
    <Route path='/' element={<AdminLogin/>}/>
    <Route path='adminupdate/:id' element={<AdminUpdate/>}/>
    <Route path='Mcqs' element={<Mcqas/>}/>
    <Route path='addsem' element={<AddSemster/>}/>
    <Route path='addqus' element={<Addquiction/>}/>
    <Route path='addopt' element={<Addoption/>}/>
    <Route path='fetchmcqs' element={<FetchQuiz/>}/>
    <Route path='fetchsemster' element={<Fetchsemster/>}/>
    <Route path='fetchquestion' element={<Fetchsqurstion/>}/>
    <Route path='addstu' element={<AddStud/>} />
      
  </Routes>
  </>
  )
}

export default App