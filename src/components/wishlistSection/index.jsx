// import { IoCloseOutline } from "react-icons/io5";
// import { SingleProductSection } from "./singleProductSection.jsx";
// import { useSelector } from "react-redux";
// import { persistor } from "../../store.jsx";
// import { ProductLoader } from "../loaders/productLoader.jsx";
// import { PersistGate } from "redux-persist/integration/react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { primaryBtnVariant } from "../../utils/animation.jsx";

// export const Wishlist = ({ isWishlistActive, setIsWishlistActive }) => {
//   const { wishlist } = useSelector((state) => state.wishlistAndCartSection);
//   const { isLoading } = useSelector((state) => state.productsData);
//   const navigate = useNavigate();

//   //PersistGate ALLOWS RENDERING OF A LOADER BEFORE REDUX STATE IS PERSISTEd
//   return (
//     <motion.div
//       initial={{ x: "100%" }}
//       animate={{ x: isWishlistActive ? "0%" : "100%" }}
//       transition={{ duration: 0.4, ease: "easeInOut" }}
//       className={`fixed top-0 left-0 bottom-0 w-[100%] h-[100vh] z-[1500] bg-opacity-60 bg-[#000000]  ${
//         isWishlistActive && "translate-x-[0%]"
//       }`}
//     >
//       <section className="flex flex-col z-[2000] overflow-y-auto absolute top-0 bg-white items-start w-[98%] right-0 bottom-0 pt-4 pb-12 gap-7 tracking-[0.25px] text-lg h-[100%] md:max-w-[440px] lg:max-w-[480px]  tablet:max-w-[436px] ">
//         <h1 className=" text-center mt-[0.5em] w-[100%] text-[1.75rem] border-b-[2px] border-LightSecondaryColor pb-4 font-bold">
//           My Wishlist
//         </h1>
//         <IoCloseOutline
//           className="absolute top-6 right-6 w-9 h-9 cursor-pointer"
//           onClick={() => setIsWishlistActive(false)}
//         />
//         {isLoading ? (
//           <ProductLoader />
//         ) : (
//           <PersistGate loading={<ProductLoader />} persistor={persistor}>
//             {wishlist.length < 1 ? (
//               <div className="flex justify-center items-center w-[100%] h-[50vh]">
//                 {" "}
//                 <h2 className="font-bold text-xl">Your wishlist is currently empty</h2>{" "}
//               </div>
//             ) : (
//               <div className="w-[100%] flex flex-col px-[5%] gap-4">
//                 {wishlist.map((wishlistData) => {
//                   return <SingleProductSection key={wishlistData._id} {...{ wishlistData, setIsWishlistActive }} />;
//                 })}
//               </div>
//             )}
//             <div className="pt-4 border-t-[2px] border-LightSecondaryColor mt-20 w-[100%]">
//               <div className="w-[100%] px-[5%]">
//                 <motion.button
//                   variants={primaryBtnVariant}
//                   initial="initial"
//                   whileTap="click"
//                   className="bg-primaryColor text-[#ffffff] h-[54px] rounded-md  w-[100%]"
//                   onClick={() => {
//                     navigate("/shop");
//                     setIsWishlistActive(false);
//                   }}
//                 >
//                   Continue Shopping
//                 </motion.button>
//               </div>
//             </div>
//           </PersistGate>
//         )}
//       </section>
//     </motion.div>
//   );
// };
import { IoCloseOutline } from "react-icons/io5";
import { SingleProductSection } from "./singleProductSection.jsx";
import { useSelector } from "react-redux";
import { persistor } from "../../store.jsx";
import { ProductLoader } from "../loaders/productLoader.jsx";
import { PersistGate } from "redux-persist/integration/react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { primaryBtnVariant } from "../../utils/animation.jsx";

export const Wishlist = ({ isWishlistActive, setIsWishlistActive }) => {
  const { wishlist } = useSelector((state) => state.wishlistAndCartSection);
  const { isLoading } = useSelector((state) => state.productsData);
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isWishlistActive ? "0%" : "100%" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`fixed inset-0 z-[1500] bg-black bg-opacity-50 backdrop-blur-sm ${
        isWishlistActive ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <section className="flex flex-col z-[2000] overflow-y-auto absolute top-0 right-0 bg-white shadow-xl items-start w-[95%] md:max-w-[440px] lg:max-w-[480px] tablet:max-w-[436px] h-full rounded-l-xl px-6 pt-6 pb-12 gap-6 text-base">
        <div className="flex items-center justify-between w-full border-b pb-4">
          <h1 className="text-2xl font-bold tracking-tight text-secondaryColor">My Wishlist</h1>
          <IoCloseOutline
            className="w-8 h-8 text-gray-600 hover:text-black transition cursor-pointer"
            onClick={() => setIsWishlistActive(false)}
            aria-label="Close wishlist"
          />
        </div>

        {isLoading ? (
          <ProductLoader />
        ) : (
          <PersistGate loading={<ProductLoader />} persistor={persistor}>
            {wishlist.length === 0 ? (
              <div className="flex flex-col justify-center items-center w-full h-[50vh] text-center">
                <h2 className="text-xl font-semibold text-gray-700">Your wishlist is currently empty</h2>
              </div>
            ) : (
              <div className="flex flex-col w-full gap-5">
                {wishlist.map((wishlistData) => (
                  <SingleProductSection key={wishlistData._id} {...{ wishlistData, setIsWishlistActive }} />
                ))}
              </div>
            )}

            <div className="mt-auto pt-6 border-t w-full">
              <motion.button
                variants={primaryBtnVariant}
                initial="initial"
                whileTap="click"
                className="bg-primaryColor text-white text-base font-semibold h-12 w-full rounded-md shadow-md hover:opacity-90 transition"
                onClick={() => {
                  navigate("/shop");
                  setIsWishlistActive(false);
                }}
              >
                Continue Shopping
              </motion.button>
            </div>
          </PersistGate>
        )}
      </section>
    </motion.div>
  );
};
