import { useState } from "react"

import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();

    const [page, setpage] = useState(
        {

            course: "",
            semester: "",
        })


    const handleSubmit = (e) => {
        e.preventDefault();

        if (page.course === "computer" && page.semester === "5") {
            navigate("/comp5");
        }
        if (page.course === "computer" && page.semester === "6") {
            navigate("/comp6");
        }
        console.log("hey this fumctiom runs")
    };


    return (

        <div className=" bg-gradient-to-b from-[#9d9ddd] to-[#1baeda] min-h-screen min-w-screen overflow-x-hidden ">
            <div className=" flex flex-col justify-center gap-7 items-center mt-32 sm:mt-28 w-full h-full">


                <div className="flex justify-center items-center text-sm sm:text-xl  md:text-2xl bg-gradient-to-br from-blue-300 to-white w-3/4 h-16 sm:w-6/12 md:w-6/12  sm:h-32
                 transition-all duration-300 hover:drop-shadow-[0_0_10px_black] rounded-2xl ">
                    <label  >Choose a course:-</label>

                    <select value={page.course}
                        onChange={(e) => setpage({ ...page, course: e.target.value })}
                    >
                        <option value="" >---select---</option>
                        <option value="computer">COMPUTER</option>
                        <option value="aiml">AIML</option>
                        <option value="civil">CIVIL</option>
                        <option value="extc">EXTC</option>

                    </select>
                </div>
                <div className="flex justify-center items-center text-sm sm:text-xl md:text-2xl bg-gradient-to-br from-blue-300 to-white w-3/4 h-16 sm:w-6/12 md:w-6/12 sm:h-32 
                 transition-all duration-300 hover:drop-shadow-[0_0_10px_black] rounded-2xl " >

                    <label>Choose your semester:-</label>
                    <select value={page.semester}
                        onChange={(e) => setpage({ ...page, semester: e.target.value })}>
                        <option value="" >---select---</option>
                        <option value="5">5th</option>
                        <option value="6">6th</option>
                    </select>
                </div>

                
            <div className="bg-gradient-to-b from-green-400 to-white flex justify-center rounded-full  text-sm sm:text-xl md:text-xl h-8 w-2/4 sm:h-12 sm:w-2/12  md:h-14 md:w-1/5
            transition-all duration-300 hover:drop-shadow-[0_0_10px_black]">
                <button onClick={handleSubmit} > submit </button> </div>


            </div>


        </div>

    )
}

export default Home
