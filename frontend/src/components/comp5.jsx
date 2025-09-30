import { NavLink } from "react-router-dom"


const comp5 = () => {



  return (
    <>

      <div className=' bg-gradient-to-br from-gray-500  to-gray-700 max-w-screen h-screen  items-center overflow-hidden'>


        <div className=" container  relative top-14 left-80 grid  grid-cols-[repeat(3,270px)] grid-rows-[280px_280px]   gap-4 ">

          <div className="border 2px solid black transition-all duration-300  hover:scale-105 hover:drop-shadow-[-10px_10px_20px_black] 
     bg-gradient-to-bl from-gray-500 to-gray-200  text-white flex justify-center 
     items-center font-bold text-5xl font-sans"> <NavLink to="/getmaterial?folder=compssem5tcs" >     TCS          </NavLink> </div>

         <div className="border 2px solid black transition-all duration-300  hover:scale-105 hover:drop-shadow-[-10px_10px_20px_black] 
     bg-gradient-to-bl from-gray-500 to-gray-200  text-white flex justify-center 
     items-center font-bold text-5xl font-sans"> <NavLink to="/getmaterial?folder=compssem5se" >      SE   </NavLink> </div>

       <div className="border 2px solid black transition-all duration-300  hover:scale-105 hover:drop-shadow-[-10px_10px_20px_black] 
     bg-gradient-to-bl from-gray-500 to-gray-200  text-white flex justify-center 
     items-center font-bold text-5xl font-sans"> <NavLink to="/getmaterial?folder=compssem5cn" >    CN         </NavLink> </div>



          <div className="border 2px solid black transition-all duration-300  hover:scale-105 hover:drop-shadow-[-10px_10px_20px_black] 
     bg-gradient-to-bl from-gray-500 to-gray-200  text-white flex justify-center 
     items-center font-bold text-5xl font-sans"> <NavLink to="/getmaterial?folder=compssem5ip" >        IP        </NavLink> </div>

         <div className="border 2px solid black transition-all duration-300  hover:scale-105 hover:drop-shadow-[-10px_10px_20px_black] 
     bg-gradient-to-bl from-gray-500 to-gray-200  text-white flex justify-center 
     items-center font-bold text-5xl font-sans"> <NavLink to="/getmaterial?compssem5dwm" >      D W M     </NavLink> </div>

        </div>
      </div>
    </>
  )
}

export default comp5
