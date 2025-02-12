import React from "react";
import logo from '../../src/assets/image/logo_marathon.png'

// import logo from "../assets/rasel_banner.jpg"
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center text-black p-10">
        <aside className="dark:bg-gray-900 dark:text-white/60">
          <img className="w-20 h-20 rounded-full" src={logo} alt="" />
          <p className="font-bold">
            Md Rasel Mahmud
            <br />
            Providing reliable tech since 2024
          </p>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
          <a
          href="https://github.com/raselm282"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-gray-900 text-3xl transition duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/raselm282"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 text-3xl transition duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.facebook.com/raselm282"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-900 text-3xl transition duration-300"
        >
          <FaFacebook />
        </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
// const Footer = () => {
//   return (
    
//     // <footer className="footer bg-base-200 text-base-content p-10">
//     //   <aside>
//     //     <img className="w-20" src={logo} alt="" />
//     //     <p>
//     //       <b>New York City Marathon</b>
//     //       <br />
//     //       Providing reliable tech since 1992
//     //     </p>
//     //   </aside>
//     //   <nav>
//     //     <h6 className="footer-title">Services</h6>
//     //     <a className="link link-hover">Branding</a>
//     //     <a className="link link-hover">Design</a>
//     //     <a className="link link-hover">Marketing</a>
//     //     <a className="link link-hover">Advertisement</a>
//     //   </nav>
//     //   <nav>
//     //     <h6 className="footer-title">Company</h6>
//     //     <a className="link link-hover">About us</a>
//     //     <a className="link link-hover">Contact</a>
//     //     <a className="link link-hover">Jobs</a>
//     //     <a className="link link-hover">Press kit</a>
//     //   </nav>
//     //   <nav>
//     //     <h6 className="footer-title">Legal</h6>
//     //     <a className="link link-hover">Terms of use</a>
//     //     <a className="link link-hover">Privacy policy</a>
//     //     <a className="link link-hover">Cookie policy</a>
//     //   </nav>
//     // </footer>
//   );
// };

// export default Footer;
