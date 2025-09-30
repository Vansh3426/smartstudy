
import Navbar from './components/navbar'
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import Login from './components/login'
import Home from './components/home'
import Comp5 from './components/comp5'
import Comp6 from './components/comp6'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home1 from './components/home1'
import Userinfo from './components/userinfo';
import AllFiles from './components/allfiles';
import Material from './components/materials';


function App() {

  return (
    <>

  
       

       <div className='flex flex-col h-screen overflow-y-hidden '>
        <Router>

<div className='flex-1 overflow-hidden'>
        <Routes> 
          <Route path="/" element={  <> <Navbar /> <Home/> <Userinfo /></>} />
          <Route path="/comp5" element={<> <Navbar /> <Comp5/> <Userinfo /></>} />
          <Route path="/comp6" element={<> <Navbar /> <Comp6/> <Userinfo /></>} />
          <Route path="/home1" element={<> <Navbar /> <Home1/> <Userinfo /></>} />
          <Route path="/getnotes" element={<AllFiles />} />
          <Route path="/login" element={<><Login/>  <SignedOut /> <SignedIn /> </>} />
          <Route path="/getmaterial" element={<Material />} />

        </Routes>
        </div>

      

      </Router>
    </div> 

  
    </>
  )
}

export default App
