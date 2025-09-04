import { NavLink } from "react-router-dom"
import { useState } from "react";
 import { VscAccount } from "react-icons/vsc";
import Adminpanel from "./adminpanel";
import { FaHouse } from "react-icons/fa6";
import { SignedIn, UserButton } from "@clerk/clerk-react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FiAlignJustify } from "react-icons/fi";

const Navbar = () => {

  let [open, setOpen] = useState(false)

  let toggleSidebar = () => {
    setOpen(!open)

    console.log(`setOpen is now ${!open}`)
  }


  return (

    
    <div className=" sticky top-0 bg-gradient-to-r from-[#2d2c2c] via-[#949191] to-[#2d2c2c] ">
      <nav>
        <div className=" w-fit h-fit fixed top-4 sm:top-3 left-1 sm:left-3 text-sm sm:text-3xl z-[9999]">
          <button onClick={toggleSidebar} className=" text-white hover:drop-shadow-[0_0_10px_gold]"><FiAlignJustify /></button>

        </div>

        <div className='  sticky top-0 w-full h-auto sm:h-45px flex justify-between py-3 '>


          <div className='logo bg-[#ff7300] w-1/4 sm:w-3/12   h-7 sm:h-8 mx-6 sm:mx-10 md:mx-14 rounded-4xl border-1 border-white 
           transition-all duration-300  hover:drop-shadow-[0_0_4px_gold] '>
            <h1 className='flex justify-center  font-bold  text-white  text-sm sm:text-base'>SmartStudy</h1>
          </div>

          <ul className='flex justify-end gap-1.5 sm:gap-2 md:gap-4 lg:gap-6 px-2 sm:px-5  text-white'>
            <li className="transition-all duration-300  hover:scale-110 hover:drop-shadow-[0_0_10px_gold]  text-sm sm:text-base "><NavLink to="/" className="flex items-center gap-x-1 sm:gap-1.5 md:gap-3"> HOME <FaHouse /> </NavLink></li>

            <li className="transition-all duration-300  hover:scale-110 hover:drop-shadow-[0_0_10px_gold]  text-sm sm:text-base "><NavLink to="/about" className="flex items-center gap-x-1 sm:gap-1.5 md:gap-3">ABOUT <AiOutlineInfoCircle /> </NavLink></li>

              <li>  <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn></li>
          </ul>

        </div>
      </nav>

      
        <div
          className={`fixed top-12 sm:top-14 left-0 sm w-32 sm:w-56 h-full bg-gray-600 text-white
            transform transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "-translate-x-full" }`}
        >
          <Adminpanel />
        </div>

    
    </div>


  )
}

export default Navbar
