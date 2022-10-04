const EnrollTrainingCard = () => {
    return (
        <>
            <div className="p-6 rounded-lg shadow-lg bg-gray-50 mt-6">
                <a href="#!">
                    <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/121.jpg" alt="" />
                </a>

                <div className="p-6">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">Java Script for Beginners</h5>
                    <p className="text-gray-500 mb-2">Teach learning network</p>
                    <hr />
                    <div className="flex justify-between items-center mt-4">
                        <span className="text-base font-medium text-gray-900 dark:text-white">Instractor: Mr. A</span>
                        <span className="text-base font-bold text-gray-900 dark:text-white">Buy For : $50</span>
                       
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

                <form>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Card Number</label>
                            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Expiration Date</label>
                            <input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">CVC</label>
                            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Amount</label>
                            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white" required />
                        </div>


                    </div>
                    <div className="text-right">
                        <button type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-fuchsia-800 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-green-800">
                            Buy
                        </button>
                    </div>
                </form>

            </div>
        </>
    )
}

export default EnrollTrainingCard