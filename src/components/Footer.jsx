import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 py-16">
      <div className="max-w-[1240px] mx-auto flex flex-col px-4">
        <div className="sm:flex text-center items-center justify-between">
          <h1>SAND.</h1>
          <div className="flex justify-between w-full sm:max-w-[280px] my-4">
            <FaFacebook className="icons" />
            <FaTwitter className="icons" />
            <FaYoutube className="icons" />
            <FaInstagram className="icons" />
          </div>
        </div>
        <div className="flex justify-between">
          <ul className="lg:flex">
            <li>About</li>
            <li>Careers</li>
            <li>Newsroom</li>
            <li>Advertisement</li>
          </ul>
          <ul className="text-right lg:flex">
            <li>Home</li>
            <li>Destinations</li>
            <li>Travel</li>
            <li>View</li>
            <li>Booking</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
