import {
    BadgeCheckIcon, HomeIcon,
    CollectionIcon,
    SearchIcon,
    UserIcon
} from "@heroicons/react/outline";
import Image from 'next/image';
import HeaderItem from './HeaderItem';
import NavBar from "./NavBar";

function Header() {
    return (
        <header className="flex flex-col sticky top-0 z-50 bg-gray-900 opacity-90 pb-4">
        <div className="flex flex-col pt-4 sm:flex-row sm:justify-between items-center h-auto mx-2 sm:mx-0">
            <div className="flex justify-evenly max-w-2xl space-x-4">
                <HeaderItem title="HOME" Icon={HomeIcon} />
                <HeaderItem title="COLLECTION" Icon={CollectionIcon} />
                <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
                <HeaderItem title="SEARCH" Icon={SearchIcon} />
                <HeaderItem title="ACCOUNT" Icon={ UserIcon }/>
            </div>
            <Image
                className="object-contain"
                src="https://links.papareact.com/ua6"
                width={100}
                height={50}
            />
           
            </div>
             <NavBar />
        </header>
    )
}

export default Header
