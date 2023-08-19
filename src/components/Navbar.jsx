import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
const Navbar = () => {
  return (
    <div className="flex items-center h-20 justify-between px-4">
        <div>
          <h1>SAND</h1>
        </div>
          
        <ul className="flex">
          <li>Home</li>
          <li>Destinations</li>
          <li>Travel</li>
          <li>View</li>
          <li>Booking</li>
        </ul>
        <div className="flex">
          <BiSearch />
          <BsPerson />
        </div>
    </div>
  );
};

export default Navbar;
