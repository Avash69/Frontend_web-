// import React from "react";
// import { IoLocationOutline } from "react-icons/io5";
// import { FiPhoneCall } from "react-icons/fi";
// import { FiMail } from "react-icons/fi";
// import { FiInstagram } from "react-icons/fi";
// import { BsGithub } from "react-icons/bs";
// import { FiTwitter } from "react-icons/fi";
// import logoOrange from "../../logoOrange.png";

// export const Footer = () => {
//   return (
//     <footer className="w-[100%] px-[4%]  tablet:px-[6%] bg-secondaryColor text-white flex flex-col items-start gap-6 pt-64 pb-10 -mt-48">
//       <div>
//         <img src={logoOrange} alt="" className="w-[120px] h-auto" />
//         <p className=" md:w-[80%] lg:w-[60%]">
//           Home of the best interior and exterior furnitures. Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
//         </p>
//       </div>
//       <article className="lg:flex lg:items-center gap-4 xs:w-[60%] ">
//         <div className="flex flex-col items-start gap-4 md:w-[70%] lg:basis-[30%]">
//           <ul className="flex gap-6">
//             <IoLocationOutline className="w-20 h-12  stroke-primaryColor" />
//             <li>
//               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae eaque optio aut!. Lorem ipsum dolor
//               sit amet consectetur.{" "}
//             </li>
//           </ul>
//           <ul className="flex gap-6">
//             <FiMail className="w-6 h-6 stroke-primaryColor" />
//             <li>Furniture@gmail.com</li>
//           </ul>
//           <ul className="flex gap-6">
//             <FiPhoneCall className="w-6 h-6 stroke-primaryColor" />
//             <li>9800023510</li>
//           </ul>
//         </div>
//         <div className="flex flex-col w-[100%] gap-6 mt-8 lg:mt-0 tablet:flex-wrap md:flex-wrap md:justify-between tablet:flex-row md:flex-row tablet:justify-between md:w-[70%] lg:-[60%] lg:justify-evenly lg:gap-8">
//           <div className="tablet:basis-[45%]">
//             <h3 className="text-[18px] font-bold">Pages</h3>
//             <ul className="flex flex-col items-start gap-2 mt-4">
//               <li>Homepage</li>
//               <li>Shop</li>
//               <li>About us</li>
//               <li>Contact us</li>
//             </ul>
//           </div>
//           <ul className="flex flex-col items-start gap-2 mt-4 tablet:basis-[45%]">
//             <li>Privacy policy</li>
//             <li>Licenses agreement</li>
//             <li>FAQS</li>
//             <li>Terms</li>
//           </ul>
//           <div className="items-start tablet:basis-[45%]">
//             <h3 className="text-[18px] font-bold">My Account</h3>
//             <ul className="flex flex-col items-start gap-2 mt-4">
//               <li>My Account</li>
//               <li>Order History</li>
//               <li>Wishlists</li>
//               <li>Checkout</li>
//               <li>Cart</li>
//             </ul>
//           </div>
//         </div>
//       </article>
//       <div className="self-center">
//         <ul className="flex items-center gap-4 md:gap-6 tablet:gap-6 mx-auto mt-4 ">
//           <li className="p-3 rounded-[30%] border-[1px] border-white">
//             <FiInstagram className="w-6 h-6" />
//           </li>
//           <li className="p-3 rounded-[30%] border-[1px] border-white">
//             {" "}
//             <BsGithub className="w-6 h-6" />
//           </li>
//           <li className="p-3 rounded-[30%] border-[1px] border-white">
//             {" "}
//             <FiTwitter className="w-6 h-6" />
//           </li>
//         </ul>
//       </div>
//     </footer>
//   );
// };
import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall, FiMail, FiInstagram, FiTwitter } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import logoOrange from "../../logoOrange.png";

export const Footer = () => {
  return (
    <footer className="w-full bg-secondaryColor text-white px-6 tablet:px-12 py-16 mt-24">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-12">

        {/* Logo and Description */}
        <div className="flex flex-col gap-4">
          <img src={logoOrange} alt="Logo" className="w-[120px] h-auto" />
          <p className="max-w-[600px] text-sm text-white/80">
            Home of the best interior and exterior furniture. Quality, comfort, and design crafted to perfection.
          </p>
        </div>

        {/* Grid Layout Section */}
        <div className="grid grid-cols-1 tablet:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-start">
              <IoLocationOutline className="w-6 h-6 text-primaryColor mt-1" />
              <p className="text-sm text-white/80">
                1234 Furniture Street, Design City, Country - 00000
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <FiMail className="w-5 h-5 text-primaryColor" />
              <p className="text-sm">furniture@gmail.com</p>
            </div>
            <div className="flex gap-4 items-center">
              <FiPhoneCall className="w-5 h-5 text-primaryColor" />
              <p className="text-sm">+977 9800023510</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-base font-bold mb-4">Pages</h3>
            <ul className="flex flex-col gap-2 text-sm text-white/90">
              <li className="hover:text-primaryColor cursor-pointer transition">Homepage</li>
              <li className="hover:text-primaryColor cursor-pointer transition">Shop</li>
              <li className="hover:text-primaryColor cursor-pointer transition">About Us</li>
              <li className="hover:text-primaryColor cursor-pointer transition">Contact Us</li>
            </ul>
          </div>

          {/* Account Links */}
          <div>
            <h3 className="text-base font-bold mb-4">My Account</h3>
            <ul className="flex flex-col gap-2 text-sm text-white/90">
              <li className="hover:text-primaryColor cursor-pointer transition">My Account</li>
              <li className="hover:text-primaryColor cursor-pointer transition">Order History</li>
              <li className="hover:text-primaryColor cursor-pointer transition">Wishlists</li>
              <li className="hover:text-primaryColor cursor-pointer transition">Checkout</li>
              <li className="hover:text-primaryColor cursor-pointer transition">Cart</li>
            </ul>
          </div>

          {/* Policy Links */}
          <div>
            <h3 className="text-base font-bold mb-4">Support</h3>
            <ul className="flex flex-col gap-2 text-sm text-white/90">
              <li className="hover:text-primaryColor cursor-pointer transition">Privacy Policy</li>
              <li className="hover:text-primaryColor cursor-pointer transition">Licenses</li>
              <li className="hover:text-primaryColor cursor-pointer transition">FAQs</li>
              <li className="hover:text-primaryColor cursor-pointer transition">Terms & Conditions</li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="w-full flex justify-center mt-6">
          <ul className="flex gap-5">
            {[
              { icon: <FiInstagram className="w-5 h-5" />, label: "Instagram" },
              { icon: <BsGithub className="w-5 h-5" />, label: "Github" },
              { icon: <FiTwitter className="w-5 h-5" />, label: "Twitter" },
            ].map((item, idx) => (
              <li
                key={idx}
                className="p-3 rounded-full border border-white hover:bg-primaryColor hover:border-primaryColor transition-colors duration-300 cursor-pointer"
                title={item.label}
              >
                {item.icon}
              </li>
            ))}
          </ul>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-white/60 mt-6">
          © {new Date().getFullYear()} Furniture Store. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

