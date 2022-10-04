import {
    Link
} from 'react-router-dom';

const TrainingDetailsCard = () => {
    return (
        <>
            <div className="p-6 rounded-lg shadow-lg bg-gray-50 mt-6">
                <a href="#!">
                    <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/151.jpg" alt="" />
                </a>

                <div className="p-6">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">Java Script for Beginners</h5>
                    <p className="text-gray-500 mb-2">Teach learning network</p>
                    <hr />
                    <div className="flex justify-between items-center mt-4">
                        <span className="text-base font-medium text-gray-900 dark:text-white">Instractor: Mr. A</span>
                        <Link to={`/enrollTraining/id:`} className="text-base font-bold text-fuchsia-800 hover:text-green-800 dark:text-white">Buy For : $50</Link>
                    </div>

                    <div>
                        <span className="mt-4 text-gray-900 text-xl font-bold">Description:</span>
                        <p className="text-gray-700 text-base mt-2 mb-4">
                            This course is designed to educate,guide, Server and empower  men or women to take charge of their finances.
                            You will learn: Saving Solutions, Debt management Program, Investment Options,Credit History building and sustaining.
                        </p>
                        <ul class="space-y-1 max-w-md list-disc list-inside text-gray-700 dark:text-gray-400 mb-4">
                            <li>
                                Will be a 40 hours course
                            </li>
                            <li>
                                10 online lecture
                            </li>
                            <li>
                                Video ,audio , Other lecture sheets
                            </li>
                        </ul>
                    </div>

                    <hr />
                </div>

                <div>
                    <button type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                        <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Introduction</span>
                        <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                    <ul class="hidden py-2 space-y-2">
                        <li>
                            <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Introduction to the Financial system in the USA</a>
                        </li>
                    </ul>

                    <button type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                        <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Financial Policy for Immigrants in USA</span>
                        <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                    <ul class="hidden py-2 space-y-2">
                        <li>
                            <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Introduction to the Financial system in the USA</a>
                        </li>
                    </ul>

                    <button type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                        <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>How to Invest properly</span>
                        <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                    <ul class="hidden py-2 space-y-2">
                        <li>
                            <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Introduction to the Financial system in the USA</a>
                        </li>
                    </ul>

                    <button type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                        <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Loan for the Property</span>
                        <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                    <ul class="hidden py-2 space-y-2">
                        <li>
                            <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Introduction to the Financial system in the USA</a>
                        </li>
                    </ul>
                </div>

            </div>
        </>
    )
}
export default TrainingDetailsCard