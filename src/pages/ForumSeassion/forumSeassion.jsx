import {
    Link
} from 'react-router-dom';
import React from 'react';

import CatagoryCard from "../../components/ForumSeassion/catagoryCard"
import Ads from "../../components/Ads/ads"
import PostCard from "../../components/NewsFeed/postCard"
import FinancialForum from "../../components/ForumSeassion/financialForum"

const ForumSeassion = () => {
    const [showModal, setShowModal] = React.useState(false);
    const [isOpen, setIsOpen] = React.useState(false);
    const toggling = () => setIsOpen(!isOpen);
    return (
        <div className="flex flex-row">
            {/* <div className="basis-1/4 mt-14">
                <CatagoryCard />

            </div> */}
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
                                <span sidebar-toggle-item>Forum</span>
                                <svg sidebar-toggle-item className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
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

            <div className="basis-1/2 mt-14">
                {/* <div className="px-4 text-gray-900 mt-4">
                    <div className=" font-bold text-2xl mb-4">Financial Forum</div>
                </div> */}

                <button
                    type="submit"
                    className="inline-flex items-center mt-6 px-5 py-2.5 text-sm font-medium text-center text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg  hover:bg-gradient-to-l"
                    onClick={() => setShowModal(true)}
                >
                    Create New
                </button>

                {showModal ? (
                    <>
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative w-full my-6 mx-auto max-w-3xl">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                        <h3 className="text-3xl font-semibold">
                                            Forum Seassion
                                        </h3>
                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setShowModal(false)}
                                        >
                                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                ×
                                            </span>
                                        </button>
                                    </div>
                                    {/*body*/}
                                    <div className="py-6 px-6 lg:px-8">
                                        <form>
                                            <label className='text-base font-bold text-gray-800 '>Title</label>
                                            <input className="shadow appearance-none border mt-4 mb-4 rounded w-full py-2 px-1 text-black" />

                                            <label className='text-base font-bold text-gray-800 '>Description :</label>
                                            <div className="mb-4 mt-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                                                <div className="py-2 px-4 bg-white rounded-b-lg dark:bg-gray-800">
                                                    <textarea rows="3" className="block px-0 w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write an article..." required></textarea>
                                                </div>
                                                <div className="flex justify-between items-center py-2 px-3 border-b dark:border-gray-600">
                                                    <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
                                                        <div className="flex items-center space-x-1 sm:pr-4">
                                                            <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd"></path></svg>
                                                                <span className="sr-only">Attach file</span>
                                                            </button>
                                                            {/* <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">Embed map</span>
                            </button> */}
                                                            <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path></svg>
                                                                <span className="sr-only">Upload image</span>
                                                            </button>
                                                            <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd"></path></svg>
                                                                <span className="sr-only">Add emoji</span>
                                                            </button>
                                                        </div>

                                                    </div>
                                                    <button type="button" data-tooltip-target="tooltip-fullscreen" className="p-2 text-gray-500 rounded cursor-pointer sm:ml-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                                                        <span className="sr-only">Full screen</span>
                                                    </button>
                                                    <div id="tooltip-fullscreen" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                                                        Show full screen
                                                        <div className="tooltip-arrow" data-popper-arrow></div>
                                                    </div>
                                                </div>

                                            </div>
                                        </form>
                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Close
                                        </button>
                                        <button
                                            className="bg-fuchsia-800 text-white hover:bg-green-800 font-bold  text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Publish
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}

                <div>
                    {/* {Array(6).fill(<FinancialForum />)} */}
                    <FinancialForum />
                </div>

            </div>

            <div className="basis-1/4 mt-14">
                {Array(3).fill(<Ads />)}
            </div>

        </div>
    )
}
export default ForumSeassion