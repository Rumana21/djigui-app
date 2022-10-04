import EventsCard from "../../components/Events/eventsCard"
import EventsTab from "../../components/Events/eventsTab"
import Organaizer from "../../components/Events/organizar"
import Pagination from "../../components/Pagination/pagination"


const Events = () => {
    return (
        <div className="flex flex-col mt-20">
            <div className="px-4 text-gray-900 ">
                <div className=" font-bold text-2xl mb-4">Events</div>
                <div className="text-gray-500 font-medium text-xl mb-4">Join with us</div>
            </div>

            <div className="px-4">
                <EventsTab />
            </div>

            <div className="m-4 flex flex-wrap justify-between ">
                {/* {Array(5).fill(<EventsCard />)} */}
                <EventsCard />
            </div>

            <hr />

            <div className="mt-4 ">
                <Pagination />
            </div>

            {/* <div className="px-4 text-gray-900 mt-6 ">
                <div className=" font-bold text-2xl mb-4">Organizer</div>
            </div> */}

            <div className="ml-4 mr-4 flex justify-between space-x-8 mb-4">
                {/* {Array(5).fill(<Organaizer />)} */}

                {/* <Organaizer /> */}
            </div>


        </div>
    )
}

export default Events