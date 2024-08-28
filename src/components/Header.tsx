import {useEffect, useState} from "preact/hooks";

function Header() {
    const [location,setLocation]=useState("");
    useEffect(() => {
    const url=window.location.pathname;
    setLocation(url);
    }, []);

return (
    <nav className="w-full bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between  p-4">
            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="/src/assets/img/logo.png" className="h-10" alt="Flowbite Logo"/>
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Astro<span
                    className="text-orange-400">Restuarant</span></span>
            </a>
            <button data-collapse-toggle="navbar-default" type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 md:gap-y-0 gap-y-3
             ">
                    <li>
                        <a id="home_link" href="/" className={location==="/"?"active":"no_active"}>Home</a>
                    </li>
                    <li>
                        <a id="discover_link" href="/discover" className={location==="/discover"?"active":"no_active"}>Discover</a>
                    </li>
                    <li>
                        <a href="#contact" className="no_active">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

)
}

export default Header;