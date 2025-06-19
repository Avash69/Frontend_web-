// import React from "react";
// import { Link } from "react-router-dom";
// import { FiHeart } from "react-icons/fi";
// import { BsEye } from "react-icons/bs";
// import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { handleWishlistModification } from "../utils/handleWishlistModification.jsx";
// import { handleCartModification } from "../utils/handleCartModification.jsx";
// import { isProductInCartFn, isProductInWishlistFn } from "../utils/isSpecificProductInCartAndWishlist.jsx";
// import { motion, useAnimation } from "framer-motion";
// import { primaryBtnVariant } from "../utils/animation.jsx";
// import { cartTextChangeVariant } from "../utils/animation.jsx";
// import { useInView } from "framer-motion";
// import { useRef } from "react";

// export const SingleProductBox = ({ productsData }) => {
//   const { _id, title, price, image, discountPercentValue } = productsData;

//   const [isWishlisted, setIsWishlisted] = useState(false);
//   const [isProductInCart, setIsProductInCart] = useState(false);

//   const dispatch = useDispatch();
//   const { wishlist, cart } = useSelector((state) => state.wishlistAndCartSection);

//   useEffect(() => {
//     isProductInWishlistFn(_id, setIsWishlisted, wishlist);
//   }, [wishlist]);
//   useEffect(() => {
//     isProductInCartFn(_id, setIsProductInCart, cart);
//   }, [cart]);

//   // get the discount percent value if present so as to display it
//   let discountedPrice = price - (price * discountPercentValue) / 100;

//   // framer animation for when its in view
//   const ref = useRef(null);
//   const inView = useInView(ref);

//   const controls = useAnimation();

//   useEffect(() => {
//     if (inView) {
//       controls.start({ scale: 1 });
//     } else {
//       controls.start({ scale: 0.6 });
//     }
//   }, [controls, inView]);

//   return (
//     <motion.article
//       ref={ref}
//       animate={controls}
//       transition={{ duration: 0.2, ease: "easeOut" }}
//       className="flex w-[100%] tablet:mx-0 md:mx-0  mx-auto flex-col  bg-[#ffffff] relative"
//     >
//       <div
//         className={`absolute p-3 bg-[#ffffff] shadow-[0px_3px_8px_0px_rgba(0,0,0,0.2)] rounded-[50%] ease-in transition-colors cursor-pointer duration-300 top-[5%] right-[5%] z-[100] ${
//           isWishlisted && "bg-lightPrimaryColor"
//         }`}
//         onClick={() => handleWishlistModification(_id, dispatch)}
//       >
//         <FiHeart
//           className={`w-6 h-6 ${
//             isWishlisted && "fill-lightPrimaryColor duration-200 ease-linear transition-colors stroke-white"
//           }`}
//         />
//       </div>

//       {discountPercentValue > 0 && (
//         <div className="flex justify-center items-center absolute w-16 px-3 h-8 z-[100] top-[6%]  hover:opacity-100 bg-lightPrimaryColor text-white  shadow-[0px_3px_8px_0px_rgba(0,0,0,0.2)]  ">
//           <span>{discountPercentValue}%</span>
//         </div>
//       )}

//       <div className="w-[100%] h-[290px] bg-neutralColor relative cursor-pointer product-img-container flex justify-center items-center rounded-md ease-in transition-all duration-100">
//         <img src={image} alt="" className="rounded-md max-w-[90%] h-auto max-h-[90%] object-cover" />
//         <div className="product-img-overlay  rounded-md absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.2)] w-[100%] h-[100%] opacity-0  transition-opacity ease-in duration-[0.5]"></div>
//         <motion.button
//           initial="initial"
//           whileTap="click"
//           variants={primaryBtnVariant}
//           className="absolute left-[25%] tablet:left-[20%] md:left-[20%] tablet:w-[60%] md:w-[60%] top-[40%] bg-lightPrimaryColor text-white hidden cursor-pointer rounded-md h-[48px] w-[50%] gap-1 justify-center z-[100] items-center product-details-link transition ease-in duration-[0.5]"
//         >
//           <BsEye />
//           <Link to={`/product/${_id}`}>
//             <span> view details</span>
//           </Link>
//         </motion.button>
//       </div>
//       <h4 className=" text-[20px] font-normal capitalize mt-4">{title}</h4>
//       {discountPercentValue > 0 ? (
//         <div className="flex gap-3 mt-[0.125rem] mb-4">
//           <h3 className="font-bold text-[20px] tracking-wide">${discountedPrice.toFixed(2)}</h3>
//           <h3 className="font-medium text-[18px]  tracking-wide text-lightBlack line-through">${price.toFixed(2)}</h3>
//         </div>
//       ) : (
//         <h3 className="font-bold  text-[20px] mt-[0.125rem] mb-4 tracking-wide ">${price.toFixed(2)}</h3>
//       )}
//       <motion.button
//         initial="initial"
//         whileTap="click"
//         variants={primaryBtnVariant}
//         className="w-[100%] h-[52px] mx-auto rounded-md text-[#ffffff] bg-primaryColor "
//         onClick={() => handleCartModification(_id, dispatch, null, isProductInCart)}
//       >
//         <motion.span
//           className="w-[100%] h-[100%] flex items-center justify-center"
//           initial="initial"
//           whileTap="animate"
//           variants={cartTextChangeVariant}
//         >
//           {" "}
//           {isProductInCart ? "Remove from cart" : "Add to cart"}
//         </motion.span>
//       </motion.button>
//     </motion.article>
//   );
// };
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { BsEye } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  handleWishlistModification,
  handleCartModification,
  isProductInCartFn,
  isProductInWishlistFn,
} from "../utils";
import { primaryBtnVariant, cartTextChangeVariant } from "../utils/animation";

export const SingleProductBox = ({ productsData }) => {
  const { _id, title, price, image, discountPercentValue } = productsData;
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isProductInCart, setIsProductInCart] = useState(false);

  const dispatch = useDispatch();
  const { wishlist, cart } = useSelector((state) => state.wishlistAndCartSection);

  const discountedPrice = price - (price * discountPercentValue) / 100;

  useEffect(() => isProductInWishlistFn(_id, setIsWishlisted, wishlist), [wishlist]);
  useEffect(() => isProductInCartFn(_id, setIsProductInCart, cart), [cart]);

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, scale: 1 });
  }, [inView]);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={controls}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 relative flex flex-col"
    >
      {/* Wishlist Icon */}
      <div
        className={`absolute top-4 right-4 z-20 p-2 rounded-full cursor-pointer transition-all duration-300 shadow-md ${
          isWishlisted ? "bg-lightPrimaryColor" : "bg-white"
        }`}
        onClick={() => handleWishlistModification(_id, dispatch)}
      >
        <FiHeart
          className={`w-5 h-5 ${
            isWishlisted ? "fill-lightPrimaryColor stroke-white" : "stroke-gray-800"
          } transition-all duration-300`}
        />
      </div>

      {/* Discount Badge */}
      {discountPercentValue > 0 && (
        <span className="absolute top-4 left-4 z-20 bg-lightPrimaryColor text-white px-3 py-1 text-sm font-semibold rounded-md shadow-md">
          {discountPercentValue}% OFF
        </span>
      )}

      {/* Product Image & Overlay */}
      <div className="relative group w-full h-[280px] flex justify-center items-center bg-neutralColor">
        <img
          src={image}
          alt={title}
          className="max-h-[85%] max-w-[90%] object-contain transition-transform duration-300 group-hover:scale-105"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute inset-0 bg-black bg-opacity-10 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <motion.button
            initial="initial"
            whileTap="click"
            variants={primaryBtnVariant}
            className="bg-primaryColor text-white px-4 py-2 rounded-md flex items-center gap-2"
          >
            <BsEye />
            <Link to={`/product/${_id}`} className="capitalize font-medium">View Details</Link>
          </motion.button>
        </motion.div>
      </div>

      {/* Title */}
      <div className="px-4 py-3 flex flex-col gap-1">
        <h4 className="text-lg font-semibold capitalize">{title}</h4>

        {/* Price Section */}
        {discountPercentValue > 0 ? (
          <div className="flex gap-2 items-center">
            <span className="text-xl font-bold text-primaryColor">${discountedPrice.toFixed(2)}</span>
            <span className="line-through text-gray-500">${price.toFixed(2)}</span>
          </div>
        ) : (
          <span className="text-xl font-bold text-secondaryColor">${price.toFixed(2)}</span>
        )}
      </div>

      {/* Cart Button */}
      <motion.button
        initial="initial"
        whileTap="click"
        variants={primaryBtnVariant}
        onClick={() => handleCartModification(_id, dispatch, null, isProductInCart)}
        className="bg-primaryColor text-white w-full py-3 text-center font-medium rounded-b-xl transition-all hover:bg-opacity-90"
      >
        <motion.span
          className="w-full h-full flex items-center justify-center"
          variants={cartTextChangeVariant}
        >
          {isProductInCart ? "Remove from Cart" : "Add to Cart"}
        </motion.span>
      </motion.button>
    </motion.article>
  );
};
