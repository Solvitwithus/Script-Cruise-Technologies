"use client"
// Navmenucomponent.tsx
import React, { useState } from 'react';
import { Navmenu } from './navmenu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import profileImage from "@/assets/download.png"
import Image from 'next/image';
const Navmenucomponent = () => {
  const currentPath = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className=" border-amber-50 border-b-[1px] flex justify-center h-10 font-medium font-sans">

        <div className='m-1 absolute left-2 flex gap-2 items-center'>
        <Image src={profileImage} alt="profile" width={30} height={30} />
        <p className='text-white font-bold font-serif tracking-wider'>Script<span className='text-green-500'> Cruise</span></p>
        </div> 
      {/* Hamburger Icon for small screens and tablets */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 text-white cursor-pointer absolute right-5 top-1 z-50" // Adjust position for better visibility
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Menu Items for large screens (desktop and larger tablets) */}
      <div
        className="hidden md:flex md:gap-6 items-center"  // This menu only shows on medium and larger screens (desktop/tablets)
      >
       
        {Navmenu.map((item, index) => (
          <Link key={index} href={item.link}>
            <span
              className={currentPath === item.link ? 'text-[#F8931F] underline' : 'text-green-500'}
            >
              {item.name}
            </span>
          </Link>
        ))}
      </div>
     <h6 className='text-[#F8931F] absolute right-13 top-2.5'>+254 710836985</h6>
      {/* Mobile Menu Items (shown when hamburger is clicked on mobile/tablet) */}
      <div
  className={`absolute top-11 right-1 rounded-md w-1/3 border-amber-50 border-[1px] flex flex-col items-center text-center p-4 md:hidden ${isOpen ? 'block' : 'hidden'} z-40`}
>
 
  {Navmenu.map((item, index) => (
    <Link key={index} href={item.link} onClick={() => setIsOpen(false)} className='border-purple-600 border-b-[1px] w-full'>
      <span
        className={currentPath === item.link ? 'text-[#F8931F]' : 'text-green-500'}
      >
        {item.name}
      </span>
    </Link>
  ))}
</div>
    </div>
  );
};

export default Navmenucomponent;
