import {
  Link
} from 'react-router-dom';

import React from 'react';

import StatusCard from "../../components/NewsFeed/statusCard"
import Ads from "../../components/Ads/ads"
import PostCard from "../../components/NewsFeed/postCard"
import LiveChatBox from "../../components/LiveChatBox/liveChat"

function NewsFeeds() {

  const [isOpen, setIsOpen] = React.useState(false);
  const toggling = () => setIsOpen(!isOpen);

  return (
    <div>

      <div className="flex flex-row">

        <div className="basis-1/4 mt-14">
          <div className="block p-6 rounded-lg shadow-lg bg-gray-50 m-6">

            <div className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
              <svg className="absolute -left-1 bg-green-400 w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
            </div>

            <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
              <div>Name</div>
              <div className="font-medium truncate">name@gmail.com</div>
            </div>
            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
              <li>
                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">profile</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
              </li>
              <li>
                <button onClick={toggling} className="items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex space-x-3">
                  <span >Forum</span>
                  <svg  className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>

                {isOpen && (
                <ul>
                  <li>
                    <Link to={`/forumSeassion`} class="flex items-center p-1 pl-11 w-full  text-gray-900 rounded-lg transition duration-75 group hover:text-fuchsia-800 dark:text-white dark:hover:bg-gray-700">Finalcial Forum</Link>
                  </li>
                  <li>
                    <Link to={`/forumSeassion`} class="flex items-center p-1 pl-11 w-full  text-gray-900 rounded-lg transition duration-75 group hover:text-fuchsia-800 dark:text-white dark:hover:bg-gray-700">C#</Link>
                  </li>
                  <li>
                    <Link to={`/forumSeassion`} class="flex items-center p-1 pl-11 w-full  text-gray-900 rounded-lg transition duration-75 group hover:text-fuchsia-800 dark:text-white dark:hover:bg-gray-700">SQL Server</Link>
                  </li>
                </ul>
                )}


              </li>
            </ul>
       

            <div className="py-1">
              <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
            </div>

          </div>
        </div>

        <div className="basis-1/2">

          <div className="p-6 rounded-lg shadow-lg bg-gray-50 mt-20">
            <PostCard />
          </div>

          <div>
            {/* {Array(6).fill(<StatusCard />)} */}
            <StatusCard />
          </div>

        </div>

        <div className="basis-1/4 mt-14">
          {Array(3).fill(<Ads />)}
        </div>
      </div>
      <LiveChatBox />
    </div>
  )

}
export default NewsFeeds