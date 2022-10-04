import React from 'react'
import EmployerCard from "../../components/Job/employerCard"
import Pagination from "../../components/Pagination/pagination"
import Seeker from "../../components/Job/seeker"

function Job() {
    const [activeTab, setActiveTab] = React.useState("employer");
    
    const handleEmployer = () => {
        
        setActiveTab("employer");
      };
      const handleSeeker = () => {
        
        setActiveTab("seeker");
      };



    return (
        <>

            <div>
                <div className="flex flex-row justify-center rounded-full">
                    <img src="https://lacity.gov/sites/g/files/wph1996/files/styles/medium_hero_image_jumbotron_floating_1600x432_/public/2022-04/LACity22-Jobs_less_dark_V7c.jpg.webp?itok=yLGzKark" alt=".." />
                    <h1 class="absolute text-4xl text-white  font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        Develop your career with us...
                    </h1>
                </div>
                <div className="px-20 mt-20 bg-white">
                    <div className="flex flex-row">
                        <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-black-600">Search for City Jobs</h1>
                    </div>
                    <div>
                        <p className="text-xl font-light leading-relaxed mt-6 mb-4 text-gray-800">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, libero iste quod quibusdam maxime recusandae odit eveniet, aspernatur culpa provident error molestiae vitae corporis in vero est! Beatae, ipsum voluptatibus.
                        </p>
                    </div>

                </div>

            </div>

            <div className="px-4 mb-4">
                <div className="border-b border-gray-200 dark:border-gray-700">
                    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
                        <li className= {activeTab === "employer" ? "text-fuchsia-600 border-b-2 border-transparent border-fuchsia-300" : "text-gray-500 border-b-2 border-transparent hover:text-fuchsia-600 hover:border-fuchsia-300"} onClick={handleEmployer} >
                            <button className=" inline-block p-4 rounded-t-lg " >Employer</button>
                        </li>
                        <li className= {activeTab === "seeker" ? "text-fuchsia-600 border-b-2 border-transparent border-fuchsia-300" : "text-gray-500 border-b-2 border-transparent hover:text-fuchsia-600"} onClick={handleSeeker} >
                            <button className=" inline-block p-4 rounded-t-lg ">Job Seeker</button>
                        </li>

                    </ul>
                </div>
            </div>

            <div className="ml-4 mr-4 flex flex-wrap justify-between mb-4">
            {activeTab === "employer" ?  <EmployerCard /> : <Seeker />}
               
            </div>

            <hr />

            <div className="mt-4 mb-4">
                <Pagination />
            </div>
        </>
    )

}
export default Job