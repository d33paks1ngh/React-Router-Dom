import { CiFacebook } from "react-icons/ci";
import { FaSquareGithub } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-white w-full  border-t-2 border-slate-150 shadow">
      <div className=" mx-auto w-10/12 pb-8 flex justify-between my-8 border-b-2 border-slate-150 ">
        <div>
          <img
            className="w-48"
            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
          />
        </div>

        <div className="flex gap-20 text-slate-600 font-medium leading-10">
          <ul>
            <li className="font-medium text-black">RESOURCES</li>
            <li>Home</li>
            <li>About</li>
          </ul>
          <ul>
            <li className="font-medium text-black">FOLLOW US</li>
            <li>Github</li>
            <li>Discord</li>
          </ul>
          <ul>
            <li className="font-medium text-black">LEGAL</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>
      <div className="w-10/12 m-auto flex justify-between py-2 h-16 text-sm text-slate-500">
        <p>©2024d33pakS1ngh. All Rights Reserved.</p>
        <p className="flex gap-8 hover:cursor-pointer">
          <CiFacebook />
          <FaTwitter />
          <FaSquareGithub />
          <SiInstagram />
          <FaLinkedinIn />
        </p>
      </div>
    </div>
  );
};
export default Footer;
