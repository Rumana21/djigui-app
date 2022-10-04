const EventsTab = () =>
{
return(
    <>
    <div className="border-b border-gray-200 dark:border-gray-700">
    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
        <li className="mr-2" >
            <button className="inline-block p-4 rounded-t-lg border-b-2 border-transparent text-gray-500 hover:text-fuchsia-600 hover:border-fuchsia-300" >Up Coming</button>
        </li>
        <li className="mr-2" >
            <button className="{({ isActive }) => (isActive ? text-fuchsia-600 border-fuchsia-300 : text-gray-500)} inline-block p-4 rounded-t-lg border-b-2 border-transparent text-gray-500 hover:text-fuchsia-600 hover:border-fuchsia-300">New</button>
        </li>

    </ul>
</div>
    </>
)
}
export default EventsTab