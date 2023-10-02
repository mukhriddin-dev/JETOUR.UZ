

const Header = () => {
    return (
        <header className="w-full fixed top-0 bg-white">
            <div className="container mx-auto px-5">
                <nav className="flex  items-center justify-between h-[61px] border-b-2 ">
                    <ul className="flex gap-x-8 items-center">
                        <li>
                            <a href="#" className="hover:text-green-700 duration-200">
                                Models
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-green-700 duration-200">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-green-700 duration-200">
                                Service
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-green-700 duration-200">
                                Contact
                            </a>
                        </li>
                    </ul>

                    <button className="bg-black px-16 focus:bg-white  focus:text-black focus:ring-2 ring-black hover:bg-orange-200 hover:text-black hover:border-2 hover:duration-300 active:bg-white active:text-black active:border-4 active:duration-300 py-2 rounded-full text-white">
                        Buyurtirish
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;