import HostCard from "../../components/HostServices/hostCard"
import Pagination from "../../components/Pagination/pagination"

function Host() {
    return (
        <div>

            <div>
                <div className="flex flex-row justify-center rounded-full">
                    {/*<img src="https://lacity.gov/sites/g/files/wph1996/files/styles/medium_hero_image_jumbotron_floating_1600x432_/public/2022-04/LACity-Visitors_darkened_V6c.jpg.webp?itok=MvaK8Gsm" alt=".." />*/}
                    <img src="https://lacity.gov/sites/g/files/wph1996/files/styles/medium_hero_image_jumbotron_floating_1600x432_/public/2022-05/LACity22_Residents_Secondary_V9.jpg.webp?itok=YQXDclvX" alt=".." />
                    <h1 class="absolute text-4xl text-white  font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        Get Connected
                    </h1>
                </div>
                <div className="px-20 mt-20 bg-white">
                    <div className="flex flex-row">
                        <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-fuchsia-800">Welcome To City ....</h1>
                    </div>
                    <div>
                        <p className="text-xl font-light leading-relaxed mt-6 mb-4 text-gray-800">
                            Our city is a meeting points of diversified ethnicity and multi cultural  people. Immigrants and inter state people are flocking together and this diversity is the beauty of this city. Harmony, peace, tolerance , respect ,love and care for every members of the city is now an example in whole USA. As a result new people are chosing this city for their living destination every year. New comers have help this city to flourish through their talents and hard work. Anyone comes to this city is our guest and part of us – to foster this philosophy we encourage all residents of this city to be a part of our hosting services and bring harmony to the society.
                        </p>
                    </div>
                </div>



                <div className="px-20  mt-20  bg-white">
                    <div>

                        <div>
                            <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-black">
                                We are Here To Serve</h1>
                        </div>
                        <div>
                            <p className="text-xl font-light leading-relaxed mt-6 mb-4 text-gray-800">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, libero iste quod quibusdam maxime recusandae odit eveniet, aspernatur culpa provident error molestiae vitae corporis in vero est! Beatae, ipsum voluptatibus.
                            </p>
                        </div>
                    </div>

                    <div className="ml-4 mr-3 flex flex-wrap justify-between mb-4">

                        <HostCard />
                    </div>

                    <hr />

                    <div className="mt-4 mb-4">
                        <Pagination />
                    </div>

                </div>

            </div>



        </div>
    )

}
export default Host