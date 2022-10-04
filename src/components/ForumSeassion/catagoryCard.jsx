const CatagoryCard = () => {
    return (
        <div>
            <div className="block p-6 rounded-lg shadow-lg bg-gray-50 m-6">
                <div className="relative mb-4">
                    <a href="#">
                        <img src="https://mdbootstrap.com/img/new/standard/nature/001.webp" />
                        <h1 class="absolute text-xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            Financial Forum
                        </h1>
                    </a>
                </div>

                <div className="relative mb-4">
                    <a href="#">
                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/002.webp" />
                        <h1 class="absolute text-xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            Student Forum
                        </h1>
                    </a>
                </div>
                <div className="relative mb-4">
                    <a href="#">
                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/005.webp" />
                        <h1 class="absolute text-xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            Information Forum
                        </h1>
                    </a>
                </div>
                <div className="relative mb-4">
                    <a href="#">
                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/040.webp" />
                        <h1 class="absolute text-xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                           Development Forum
                        </h1>
                    </a>
                </div>

            </div>
        </div>
    )
}
export default CatagoryCard