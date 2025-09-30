import { useSearchParams } from "react-router-dom";
import { NavLink } from "react-router-dom"


const Materials = () => {
const [searchParams, setSearchParams] = useSearchParams();

// Example: /files?folder=compsem5
console.log(searchParams.toString()); // "folder=compsem5"


const handlepdf = () => {
// Get the existing folder param
let folder = searchParams.get("folder"); // e.g. "compsem5"

// Add something to it
folder = folder ? folder + "pdf" : "pdf";

 const finalQuery = `?folder=${folder}`;
 console.log("the finalquerylookslike " + finalQuery); // "?folder=compsem5pdf"
return finalQuery;
}



return(
<>
<div className="border 2px solid black transition-all duration-300  hover:scale-105 hover:drop-shadow-[-10px_10px_20px_black] 
     bg-gradient-to-bl from-gray-500 to-gray-200  text-white flex justify-center 
     items-center font-bold text-5xl font-sans"><NavLink to={`/getnotes${handlepdf()}`}>   PDF         </NavLink> </div>

     </>
)

}
export default Materials
