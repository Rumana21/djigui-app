import Ads from "../../components/Ads/ads"
import EnrollTrainingCard from "../../components/Trining/enrollTrainingCard"

const EnrollTraining = () =>
{
    return(
        <>
         <div>
            <div className="flex flex-row">

                <div className="basis-1/4 mt-14">
                    <div className="block p-6 rounded-lg shadow-lg bg-gray-50 m-6">
                        <div className="relative mb-4">
                            <a href="#">
                                <img src="https://mdbootstrap.com/img/new/standard/nature/171.webp" />
                                <h1 class="absolute text-xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    Recent Course 1
                                </h1>
                            </a>
                        </div>

                        <div className="relative mb-4">
                            <a href="#">
                                <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/172.webp" />
                                <h1 class="absolute text-xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                Recent Course 2
                                </h1>
                            </a>
                        </div>
                        <div className="relative mb-4">
                            <a href="#">
                                <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/035.webp" />
                                <h1 class="absolute text-xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                Recent Course 3
                                </h1>
                            </a>
                        </div>
                        <div className="relative mb-4">
                            <a href="#">
                                <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/063.webp" />
                                <h1 class="absolute text-xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                Recent Course 4
                                </h1>
                            </a>
                        </div>

                    </div>
                </div>

                <div className="basis-1/2 mt-14">
                    <div className="px-4 text-gray-900 mt-4">
                        <div className=" font-bold text-2xl mb-4">Enroll Training</div>
                    </div>

                    <EnrollTrainingCard />

                </div>

                <div className="basis-1/4 mt-14">
                    {Array(3).fill(<Ads />)}
                </div>
            </div>

        </div>

        </>
    )

}
export default EnrollTraining