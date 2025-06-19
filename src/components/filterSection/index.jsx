// import { IoCloseOutline } from "react-icons/io5";
// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import CategoriesSection from "./CategorySection";
// import { PriceRange } from "./priceRange";
// import { handleFilterByCategoriesAndPrice } from "../../utils/handleFilterByCategoriesAndPrice";
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { resetFilter } from "../../utils/resetFilter";
// import { motion } from "framer-motion";
// import { primaryBtnVariant } from "../../utils/animation";

// export const FilterBySection = ({
//   isFilterBySectionOpen,
//   setIsFilterBySectionOpen,
//   currentPageNo,
//   NoOfProductsPerPage,
//   setIsFilterFnApplied,
// }) => {
//   // DOMS OF THE CHECKED ELEM FOR UNCHECKING DURING RESET
//   const [checkedCategoryDOM, setCheckedCategoryDOM] = useState(null);
//   const [checkedPriceRangeDOM, setCheckedPriceRangeDOM] = useState(null);
//   const [isScreenAbove1024, setIsScreenAbove1024] = useState(false);

//   const dispatch = useDispatch();
//   const location = useLocation();

//   const { sortedAllProductsData, sortedSearchedProductData } = useSelector((state) => state.productsData);

//   //this is to distinguish between when the filter function is to display toast message and when its not to
//   let theFnCallDoesNotNeedToast = true;

//   // RESET FILTERS WHEN LOCATION URL CHANGES
//   useEffect(() => {
//     resetFilter(checkedCategoryDOM, checkedPriceRangeDOM, location, dispatch, theFnCallDoesNotNeedToast);
//   }, [location.pathname]);

//   // Filter in the shop page is from the sortedAllProductsData while the one in the searchpage is from sortedSearchedProductsData

//   useEffect(() => {
//     if (location.pathname === "/shop") {
//       handleFilterByCategoriesAndPrice(
//         dispatch,
//         NoOfProductsPerPage,
//         currentPageNo,
//         sortedAllProductsData,
//         theFnCallDoesNotNeedToast
//       );
//     }
//   }, [location.pathname, sortedAllProductsData]);

//   useEffect(() => {
//     if (location.pathname === "/search") {
//       handleFilterByCategoriesAndPrice(
//         dispatch,
//         NoOfProductsPerPage,
//         currentPageNo,
//         sortedSearchedProductData,
//         theFnCallDoesNotNeedToast
//       );
//     }
//   }, [location.pathname, sortedSearchedProductData]);

//   useEffect(() => {
//     if (window.innerWidth >= 1024) {
//       setIsScreenAbove1024(true);
//     } else if (window.innerWidth < 1024) {
//       setIsScreenAbove1024(false);
//     }

//     window.addEventListener("resize", (e) => {
//       if (e.currentTarget.innerWidth >= 1024) {
//         setIsScreenAbove1024(true);
//       } else if (e.currentTarget.innerWidth < 1024) {
//         setIsScreenAbove1024(false);
//       }
//     });
//   }, [isScreenAbove1024]);

//   useEffect(() => {
//     isScreenAbove1024 && setIsFilterBySectionOpen(true);
//   }, [isScreenAbove1024]);

//   return (
//     <motion.div
//       initial={{ x: "100%" }}
//       animate={{ x: isFilterBySectionOpen ? "0%" : "100%" }}
//       transition={{ duration: 0.4, ease: "easeInOut" }}
//       className={`fixed  lg:mt-16 h-[100vh] lg:max-w-[250px]  lg:static lg:ml-[10%] xl:ml-[24%] lg:col-span-1 lg:row-span-2 lg:w-[100%] lg:translate-x-0 lg:h-auto lg:bg-opacity-100 top-0 left-0 w-[100%] lg:bg-transparent z-[1500] bg-opacity-60 bg-[#000000] translate-x-[100%] lg:z-0  ${
//         isFilterBySectionOpen && "translate-x-[0%]"
//       }`}
//     >
//       <section className="flex lg:w-[100%]  flex-col md:w-[50%] md:max-w-[450px] tablet:w-[60%] tablet:max-w-[400px] max-w-[360px] lg:z-0 z-[2000] overflow-y-auto absolute top-0 bg-white items-start px-[5%] lg:px-0 w-[80%] right-0 pt-4 pb-12 gap-7 tracking-[0.25px] text-lg h-[100%] lg:static ">
//         <h2 className="text-center w-[100%] text-[1.75rem] mt-2 font-bold border-b-[2px] border-LightSecondaryColor pb-2">
//           Filter by
//         </h2>
//         <IoCloseOutline
//           className="absolute top-5 right-4 w-9 h-9 cursor-pointer lg:hidden"
//           onClick={() => setIsFilterBySectionOpen(false)}
//         />
//         <div className="w-[100%]">
//           <CategoriesSection {...{ setCheckedCategoryDOM }} />
//           <PriceRange {...{ setCheckedPriceRangeDOM }} />
//         </div>
//         <div className="flex items-center justify-between w-[100%] gap-[10%] ">
//           <motion.button
//             initial="initial"
//             whileTap="click"
//             variants={primaryBtnVariant}
//             className="h-[45px] basis-[40%] bg-primaryColor text-white"
//             onClick={() => {
//               location.pathname === "/shop" &&
//                 handleFilterByCategoriesAndPrice(dispatch, NoOfProductsPerPage, currentPageNo, sortedAllProductsData);
//               location.pathname === "/search" &&
//                 handleFilterByCategoriesAndPrice(
//                   dispatch,
//                   NoOfProductsPerPage,
//                   currentPageNo,
//                   sortedSearchedProductData
//                 );

//               setIsFilterFnApplied(true);
//               isScreenAbove1024 ? setIsFilterBySectionOpen(true) : setIsFilterBySectionOpen(false);
//             }}
//           >
//             Filter
//           </motion.button>
//           <motion.button
//             whileHover={{ backgroundColor: "#000000", borderWidth: "0px", color: "#ffffff" }}
//             transition={{ duration: 0.4 }}
//             className="h-[45px] basis-[60%] bg-transparent border-[1px] border-secondaryColor text-black"
//             onClick={(e) => {
//               resetFilter(checkedCategoryDOM, checkedPriceRangeDOM, location, dispatch);

//               setIsFilterFnApplied(false);
//               isScreenAbove1024 ? setIsFilterBySectionOpen(true) : setIsFilterBySectionOpen(false);
//             }}
//           >
//             Reset Filter
//           </motion.button>
//         </div>
//       </section>
//     </motion.div>
//   );
// };
import { IoCloseOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CategoriesSection from "./CategorySection";
import { PriceRange } from "./priceRange";
import { handleFilterByCategoriesAndPrice } from "../../utils/handleFilterByCategoriesAndPrice";
import { resetFilter } from "../../utils/resetFilter";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { primaryBtnVariant } from "../../utils/animation";

export const FilterBySection = ({
  isFilterBySectionOpen,
  setIsFilterBySectionOpen,
  currentPageNo,
  NoOfProductsPerPage,
  setIsFilterFnApplied,
}) => {
  const [checkedCategoryDOM, setCheckedCategoryDOM] = useState(null);
  const [checkedPriceRangeDOM, setCheckedPriceRangeDOM] = useState(null);
  const [isScreenAbove1024, setIsScreenAbove1024] = useState(window.innerWidth >= 1024);

  const dispatch = useDispatch();
  const location = useLocation();

  const { sortedAllProductsData, sortedSearchedProductData } = useSelector((state) => state.productsData);

  const theFnCallDoesNotNeedToast = true;

  // Reset filter when navigating
  useEffect(() => {
    resetFilter(checkedCategoryDOM, checkedPriceRangeDOM, location, dispatch, theFnCallDoesNotNeedToast);
  }, [location.pathname]);

  // Apply filter on page load for shop
  useEffect(() => {
    const data = location.pathname === "/shop" ? sortedAllProductsData : sortedSearchedProductData;
    handleFilterByCategoriesAndPrice(dispatch, NoOfProductsPerPage, currentPageNo, data, theFnCallDoesNotNeedToast);
  }, [location.pathname]);

  // Listen for screen resize
  useEffect(() => {
    const handleResize = () => setIsScreenAbove1024(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    handleResize(); // Init
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-open on large screens
  useEffect(() => {
    if (isScreenAbove1024) setIsFilterBySectionOpen(true);
  }, [isScreenAbove1024]);

  const applyFilter = () => {
    const data = location.pathname === "/shop" ? sortedAllProductsData : sortedSearchedProductData;
    handleFilterByCategoriesAndPrice(dispatch, NoOfProductsPerPage, currentPageNo, data);
    setIsFilterFnApplied(true);
    if (!isScreenAbove1024) setIsFilterBySectionOpen(false);
  };

  const clearFilter = () => {
    resetFilter(checkedCategoryDOM, checkedPriceRangeDOM, location, dispatch);
    setIsFilterFnApplied(false);
    if (!isScreenAbove1024) setIsFilterBySectionOpen(false);
  };

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isFilterBySectionOpen ? "0%" : "100%" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`fixed inset-0 z-[1500] bg-black/60 lg:static lg:bg-transparent lg:z-0 lg:translate-x-0 ${
        isFilterBySectionOpen && "translate-x-0"
      }`}
    >
      <section className="absolute right-0 top-0 bottom-0 lg:static bg-white w-[80%] max-w-[400px] lg:max-w-none lg:w-full lg:h-auto lg:pt-0 pt-6 pb-12 px-6 overflow-y-auto shadow-lg lg:shadow-none flex flex-col gap-6 lg:gap-8">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-2xl font-bold text-gray-800">Filter by</h2>
          {!isScreenAbove1024 && (
            <IoCloseOutline
              className="w-8 h-8 text-gray-500 hover:text-black cursor-pointer"
              onClick={() => setIsFilterBySectionOpen(false)}
            />
          )}
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-6">
          <CategoriesSection setCheckedCategoryDOM={setCheckedCategoryDOM} />
          <PriceRange setCheckedPriceRangeDOM={setCheckedPriceRangeDOM} />
        </div>

        {/* Buttons */}
        <div className="mt-auto flex gap-4 justify-between">
          <motion.button
            initial="initial"
            whileTap="click"
            variants={primaryBtnVariant}
            className="flex-1 h-[45px] bg-primaryColor text-white rounded-md shadow-sm hover:bg-primaryColor/90 transition"
            onClick={applyFilter}
          >
            Apply Filter
          </motion.button>

          <motion.button
            whileHover={{ backgroundColor: "#000", color: "#fff" }}
            transition={{ duration: 0.4 }}
            className="flex-1 h-[45px] bg-white border border-secondaryColor text-gray-800 rounded-md"
            onClick={clearFilter}
          >
            Reset
          </motion.button>
        </div>
      </section>
    </motion.div>
  );
};
