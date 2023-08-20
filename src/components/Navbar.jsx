import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

import { useState } from "react";

const Navbar = () => {
const [nav, setNav] = useState(false)



  return (
    <div className="flex w-full absolute z-10 items-center h-20 justify-between px-4 text-white text-bold">
      <div>
        {!nav ? <h1>SAND</h1> : ''}
      </div>

      <ul className="hidden md:flex">
        <li>Home</li>
        <li>Destinations</li>
        <li>Travel</li>
        <li>View</li>
        <li>Booking</li>
      </ul>
      <div className="hidden md:flex">
        <BiSearch size={20} className="mr-2"/>
        <BsPerson size={20} />
      </div>
      <div className="md:hidden z-10" onClick={() => setNav(!nav)}>
      {nav ? <AiOutlineClose size={20} /> : <HiOutlineMenuAlt4 size={20} className="text-white"/>}
      </div>
      <div onClick={()=> setNav(!nav)} className={nav ? "absolute text-black left-0 top-0 w-full bg-gray-100/50 px-4 py-7 flex flex-col" : "absolute left-[-100%]"}>
        <ul>
        <h1>SAND</h1>
          <li className="border-b">Home</li>
          <li className="border-b">Destinations</li>
          <li className="border-b">Travel</li>
          <li className="border-b">View</li>
          <li className="border-b">Booking</li>
        <div className="flex flex-col">
          <button className="my-6">Search</button>
          <button>Sign In</button>
        </div>
        <div className="flex justify-between my-6">
          <FaFacebook className="icons" />
          <FaTwitter className="icons" />
          <FaYoutube className="icons" />
          <FaInstagram className="icons" />
          </div>
          </ul>
      </div>
    </div>
  );
};

export default Navbar;
