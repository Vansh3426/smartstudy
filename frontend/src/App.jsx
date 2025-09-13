
import Navbar from './components/navbar'
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";




import Home from './components/home'
import Comp5 from './components/comp5'
import Comp6 from './components/comp6'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home1 from './components/home1'
import Userinfo from './components/userinfo';


function App() {

  return (
    <>

   <SignedOut>
       <RedirectToSignIn/>
      </SignedOut>
      <SignedIn />
       

       <div className='felx flex-col h-screen overflow-hidden'>
        <Router>
<Navbar /><Userinfo />
<div className='flex-1 overflow-hidden'>
        <Routes> 

        
         
          <Route path="/" element={  <Home />} />
          
          <Route path="/comp5" element={<Comp5/>} />
          <Route path="/comp6" element={<Comp6/>} />
          <Route path="/home1" element={<Home1/>} />
          {/* <Route path="/login" element={<Login/>} /> */}

        </Routes>
        </div>
      </Router>
</div> 
    </>
  )
}

export default App
