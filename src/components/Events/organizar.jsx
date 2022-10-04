const Organaizer = () =>
{
    return(
        <>
        <div className="w-full max-w-sm bg-white  shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600 m-8">
              <svg className="absolute  bg-blue-400 w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
            </div>
        <div className="px-5 pb-5">
            <a href="#">
                <h5 className="text-xl font-semibold tracking-tight mt-4 text-gray-900 dark:text-white">Mr. X</h5>
                <p>Organizer 1</p>
            </a>
         
            <div className="flex justify-between items-center">
                <span className="text-base font-medium text-gray-900 dark:text-white">23 Events</span>
                {/* <span className="text-sm font-medium text-gray-900 dark:text-white">10000 students</span> */}
            </div>
        </div>
    </div>

    <div className="w-full max-w-sm bg-white  shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600 m-8">
              <svg className="absolute  bg-red-400 w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
            </div>
        <div className="px-5 pb-5">
            <a href="#">
                <h5 className="text-xl font-semibold tracking-tight mt-4 text-gray-900 dark:text-white">Mr. Y</h5>
                <p>Organizer 2</p>
            </a>
            
            <div className="flex justify-between items-center">
                <span className="text-base font-medium text-gray-900 dark:text-white">20 Events</span>

            </div>
        </div>
    </div>

    <div className="w-full max-w-sm bg-white  shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600 m-8">
              <svg className="absolute  bg-yellow-400 w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
            </div>
        <div className="px-5 pb-5">
            <a href="#">
                <h5 className="text-xl font-semibold tracking-tight mt-4 text-gray-900 dark:text-white">Mr. Z</h5>
                <p>Organizer 3</p>
            </a>
          
            <div className="flex justify-between items-center">
                <span className="text-base font-medium text-gray-900 dark:text-white">15 Events</span>
            </div>
        </div>
    </div>

    <div className="w-full max-w-sm bg-white  shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600 m-8">
              <svg className="absolute  bg-green-400 w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
            </div>
        <div className="px-5 pb-5">
            <a href="#">
                <h5 className="text-xl font-semibold tracking-tight mt-4 text-gray-900 dark:text-white">Mr. J</h5>
                <p>Organizer 4</p>
            </a>
            <div className="flex justify-between items-center">
                <span className="text-base font-medium text-gray-900 dark:text-white">12 Events</span>
               
            </div>
        </div>
    </div>
        </>

    )
}

export default Organaizer