// import { DealOfTheMonth } from "./dealOfTheMonth";
// import { HomepageCategoryProducts } from "./homepageCategoryProducts";
// import { FeaturedCategories } from "./featuredCategories";
// import { useState, useEffect, useRef } from "react";
// import { useSelector } from "react-redux";
// import { ProductLoader } from "../../../components/loaders/productLoader";
// // import { toast } from "react-toastify";
// import { toast } from 'react-toastify';


// const Index = () => {
//   const [currentlyRequestedCategories, setCurrentlyRequestedCategories] = useState([]);
//   const categoryContainerRef = useRef();
//   const { allProductsData, isLoading, fetchingError } = useSelector((state) => state.productsData);



//   useEffect(() => {
//     shuffleArr(featuredProducts);
//   }, [allProductsData]);

//   const shuffleArr = (Arr) => {
//     let slicedShuffledArr = Arr.sort(() => Math.random() - 0.5).slice(0, 10);
//     setCurrentlyRequestedCategories(slicedShuffledArr);
//   };

//   const featuredProducts = allProductsData.filter((products) =>
//     products.categories["Featured Categories"].includes("featured")
//   );
//   const firstOrderDeals = allProductsData.filter((products) =>
//     products.categories["Featured Categories"].includes("first order deal")
//   );
//   const bestDeals = allProductsData.filter((products) =>
//     products.categories["Featured Categories"].includes("discounts")
//   );

//   const categoriesArr = {
//     featuredProducts: featuredProducts,
//     firstOrderDeals: firstOrderDeals,
//     bestDeals: bestDeals,
//   };

//   const handleCategoryClick = (e) => {
//     for (let key in categoriesArr) {
//       if (e.target.dataset.id === key) {
//         e.target.parentElement.classList.add("homepage-active-category-tab");
//         e.target.parentElement.style.order = 1;
//         shuffleArr(categoriesArr[key]);

//         // order 1 is assigned to the default categoryDom and the other unclicked categoryDom gets order style values from the orderNumbering variable
//         let orderNumbering = [0, 2];
//         let categoriesDomListArr = Array.from(categoryContainerRef.current.children);
//         let theNonTargetedCategoryDomArr = categoriesDomListArr.filter((elem) => elem !== e.target.parentElement);
//         theNonTargetedCategoryDomArr.map((elem, i) => {
//           elem.classList.remove("homepage-active-category-tab");
//           elem.style.order = orderNumbering[i];
//           return null;
//         });
//       }
//     }
//   };

//   return (
//     <>
//       <h1 className="text-[40px] text-center font-bold">Our products</h1>
//       {isLoading ? (
//         <ProductLoader />
//       ) : (
//         <>
//           <div
//             className="flex tablet:justify-center md:justify-center items-center whitespace-nowrap  mx-auto w-[92%] tablet:w-[88%] overflow-x-auto  flex-nowrap gap-6 my-10 tablet:gap-8 "
//             onClick={(e) => handleCategoryClick(e)}
//             ref={categoryContainerRef}
//           >
//             <div className="cursor-pointer order-1 transition-all ease-in-out duration-[0.25s] homepage-active-category-tab">
//               <h2 data-id="featuredProducts" className="text-center text-[24px] font-medium ">
//                 Featured{" "}
//               </h2>
//               <div className="bg-primaryColor h-[3px] w-0 "></div>
//             </div>
//             <div className="cursor-pointer order-2 transition-all ease-in-out duration-[0.25s]">
//               <h2 data-id="firstOrderDeals" className="text-center text-[24px] font-medium ">
//                 First order deals
//               </h2>
//               <div className="bg-primaryColor h-[3px] w-0"></div>
//             </div>
//             <div className="cursor-pointer order-0 transition-all ease-in-out duration-[0.25s]">
//               <h2 data-id="bestDeals" className="text-center text-[24px] font-medium ">
//                 Best Deals
//               </h2>
//               <div className="bg-primaryColor h-[3px] w-0"></div>
//             </div>
//           </div>
//           <HomepageCategoryProducts currentlyRequestedCategories={currentlyRequestedCategories} />
//         </>
//       )}
//       <FeaturedCategories />
//       <DealOfTheMonth />
//     </>
//   );
// };

// export default Index;
import React, { useState, useEffect, useRef, useMemo } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { DealOfTheMonth } from "./dealOfTheMonth";
import { HomepageCategoryProducts } from "./homepageCategoryProducts";
import { FeaturedCategories } from "./featuredCategories";
import { ProductLoader } from "../../../components/loaders/productLoader";

const Index = () => {
  const { allProductsData = [], isLoading, fetchingError } = useSelector(
    (state) => state.productsData || {}
  );

  const [currentlyRequestedCategories, setCurrentlyRequestedCategories] = useState([]);
  const [activeCategoryKey, setActiveCategoryKey] = useState("featuredProducts");

  // Memoize filtered category arrays to prevent unnecessary recalculations
  const categoriesArr = useMemo(() => ({
    featuredProducts: allProductsData.filter(
      (product) =>
        product?.categories?.["Featured Categories"]?.includes("featured")
    ),
    firstOrderDeals: allProductsData.filter(
      (product) =>
        product?.categories?.["Featured Categories"]?.includes("first order deal")
    ),
    bestDeals: allProductsData.filter(
      (product) =>
        product?.categories?.["Featured Categories"]?.includes("discounts")
    ),
  }), [allProductsData]);

  // Shuffle helper function
  const shuffleArr = (arr) => {
    if (!arr || arr.length === 0) return [];
    return arr
      .slice() // copy array
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);
  };

  // Update currently requested categories when allProductsData or activeCategoryKey changes
  useEffect(() => {
    const selectedCategoryArr = categoriesArr[activeCategoryKey] || [];
    setCurrentlyRequestedCategories(shuffleArr(selectedCategoryArr));
  }, [categoriesArr, activeCategoryKey]);

  // Show toast on fetching error
  useEffect(() => {
    if (fetchingError) {
      toast.error(fetchingError);
    }
  }, [fetchingError]);

  // Handler for category tab click
  const handleCategoryClick = (key) => {
    if (key !== activeCategoryKey) {
      setActiveCategoryKey(key);
    }
  };

  // Categories tab metadata
  const categoriesTabs = [
    { key: "featuredProducts", label: "Featured" },
    { key: "firstOrderDeals", label: "First order deals" },
    { key: "bestDeals", label: "Best Deals" },
  ];

  return (
    <>
      <h1 className="text-[40px] text-center font-bold mb-12">Our Products</h1>

      {isLoading ? (
        <ProductLoader />
      ) : (
        <>
          {/* Category Tabs */}
          <nav
            aria-label="Product categories"
            className="flex justify-center gap-10 mx-auto w-[92%] tablet:w-[88%] overflow-x-auto whitespace-nowrap pb-4 border-b border-gray-300 mb-10"
          >
            {categoriesTabs.map(({ key, label }) => {
              const isActive = key === activeCategoryKey;
              return (
                <button
                  key={key}
                  onClick={() => handleCategoryClick(key)}
                  className={`relative text-[24px] font-medium transition-colors duration-300 whitespace-nowrap
                    ${isActive ? "text-primaryColor" : "text-gray-600 hover:text-primaryColor"}
                  `}
                  aria-current={isActive ? "true" : undefined}
                >
                  {label}
                  <span
                    className={`absolute left-0 bottom-[-6px] h-1 rounded-full bg-primaryColor transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  ></span>
                </button>
              );
            })}
          </nav>

          {/* Products Grid */}
          <HomepageCategoryProducts currentlyRequestedCategories={currentlyRequestedCategories} />
        </>
      )}

      <FeaturedCategories />
      <DealOfTheMonth />
    </>
  );
};

export default Index;
