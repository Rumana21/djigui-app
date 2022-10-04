import Tabs from "../../components/Trining/tabs"
import TrainingCard from "../../components/Trining/trainingCard"
import InstructorCard from "../../components/Trining/instractorCard"
import ButtonGroup from "../../components/ButtonGroup/buttonGroup"
import Pagination from "../../components/Pagination/pagination"

const Training = () => {
    return (
        <div className="flex flex-col mt-20">
            
            <div className="px-4 text-gray-900 ">
                <div className=" font-bold text-2xl mb-4">Development Course</div>
                <div className="text-gray-500 font-medium text-xl mb-4">Course to get you started</div>
            </div>

            <div className="px-4">
                <Tabs />
            </div>

            <div className="ml-4 mr-4 flex flex-wrap justify-between mb-4">
                {/* {Array(5).fill(<TrainingCard />)} */}
                <TrainingCard />
            </div>

            <hr />

            <div className="mt-4 mb-4">
            <Pagination />           
            </div>
            <hr />

            <div className="px-4 text-gray-900 mt-6 ">
                <div className=" font-bold text-2xl mb-4">Populer Topics</div>
            </div>

            <div className="m-4">
                <ButtonGroup />
            </div>
            {/* <div className="px-4 text-gray-900 mt-6 ">
                <div className=" font-bold text-2xl mb-4">Populer Instructors</div>
            </div> */}

            <div className="ml-4 mr-4 flex justify-between space-x-8 mb-4">
                {/* {Array(5).fill(<InstructorCard />)} */}
                {/* <InstructorCard /> */}
            </div>

        </div>

    )
}

export default Training 