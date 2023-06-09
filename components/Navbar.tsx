import { useCallback, useEffect, useState } from "react";
import { useRouter } from 'next/router';

import { BsBell, BsChevronDown, BsSearch } from 'react-icons/bs';

import MobileMenu from "./MobileMenu";
import AccountMenu from "./AccountMenu";

const TOP_OFFSET = 66;

const Navbar = () => {

 const [showMobileMenu, setShowMobileMenu] = useState(false);
 const [showAccountMenu, setShowAccountMenu] = useState(false);
 const [showBackground, setShowBackground] = useState(false);

 const router = useRouter();

 useEffect(() => {
    const handleScroll = () => {
        if(window.scrollY >= TOP_OFFSET){
            setShowBackground(true);
        }else{
            setShowBackground(false);
        }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    }
 }, []);

 const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
 }, []);

 const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
 }, []);
 

  return (
    <nav className="fixed z-40 w-full">
        <div className={`flex flex-row items-center px-4 py-6 transition duration-500 md:px-16 bg-zinc-900 bg-opacity-90
                            ${showBackground? "bg-zinc-900 bg-opacity-90" : ""}
                      `}>
            <div onClick={() => router.push("/")}><img src="/images/logo.png" className="h-5 lg:h-10" alt="Logo" /></div>
            <div onClick={toggleMobileMenu} className="relative flex flex-row items-center gap-2 ml-8 cursor-pointer lg:hidden">
                <p className="text-sm text-white">Browse</p>
                <BsChevronDown  className ={`text-white transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`}  />
                <MobileMenu visible={showMobileMenu} />
            </div>
            <div className="flex flex-row items-center ml-auto gap-7">
                <div onClick={toggleAccountMenu} className="relative flex flex-row items-center gap-2 cursor-ponter">
                    <div className="w-6 h-6 overflow-hidden rounded-md lg:w-10 lg:h-10">
                        <img src="/images/default-blue.png" alt="" />
                    </div>
                    <BsChevronDown className ={`text-white transition ${showAccountMenu ? 'rotate-180' : 'rotate-0'}`} />
                    <AccountMenu visible={showAccountMenu}/>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar