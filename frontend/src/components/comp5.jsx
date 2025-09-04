

const comp5 = () => {



  return (
    <>

      <div className=' bg-gradient-to-b from-[#9d9ddd] to-[#1baeda] min-w-screen min-h-screen  flex justify-center py-4 '>

        <div className='my-2 '>

          <div className="text-3xl text-gray-950">
            <h1>Your Complete notes collection :- click to view</h1>
          </div>


          <div className="container flex flex-col justify-center my-5 min-w-full gap-4">


            <div className=' bg-gradient-to-br from-blue-300 to-white w-full h-full 
                 transition-all duration-300 hover:drop-shadow-[0_0_10px_black] rounded-2xl '>

              <ul className=' flex flex-col justify-start items-start my-3 gap-8 '>

                <li className='text-sm sm:text-xl  md:text-3xl list-none relative top-2 left-4 '>E-BOOKS :- 

                  <li className='list-disc relative left-16 '> <a href="http://localhost:3000/books/tcs.html" target="_blank" rel="noopener noreferrer">
                    <button className='text-sm sm:text-xl  md:text-2xl'>TCS</button> </a></li>

                  <li className='list-disc relative  left-16'><a href="http://localhost:3000/books/se.html" target="_blank" rel="noopener noreferrer">
                    <button className='text-sm sm:text-xl  md:text-2xl'>SE</button> </a></li>
                </li>


                <li className='relative left-4 '> <a href="http://localhost:3000/books/syllabus.pdf" target="_blank" rel="noopener noreferrer">
                  <button className='text-sm sm:text-xl  md:text-3xl'>Syllabus</button> </a></li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default comp5
