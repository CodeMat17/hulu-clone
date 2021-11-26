import requests from "../utils/requests";
import { useRouter } from "next/router"

function NavBar() {
    const router = useRouter();

    return (
        <nav className="relative">
            <div className="flex px-12 sm:px-20 text-xl overflow-x-scroll scrollbar-hide space-x-6 sm:space-x-20 whitespace-nowrap">
                {Object.entries(requests).map(([key, {title, url}]) => (
                    <h2
                        onClick={() => router.push(`/?genre=${key}`)}
                        key={key} className="last:pr-24 hover:text-white tracking-wider cursor-pointer transition duration-100 transform hover:scale-125 active:text-red-600">
                        {title}
                    </h2>
                ))}
            </div>
            <div className="absolute top-0 right-0 h-10 w-1/12 bg-gradient-to-l from-[#06202A]"/>
        </nav>
    )
}

export default NavBar
