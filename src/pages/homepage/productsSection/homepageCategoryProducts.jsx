// import React from "react";
// import { FaLongArrowAltRight } from "react-icons/fa";
// import { SingleProductBox } from "../../../components/singleProductBox";
// import { Link } from "react-router-dom";

// export const HomepageCategoryProducts = ({ currentlyRequestedCategories }) => {
//   return (
//     // tablet:w-[48%] xl:w-[23%] md:w-[31%]  md:mx-0 tablet:mx-0
//     <div className="w-[92%] grid grid-cols-1 tablet:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  lg:w-[96%]  tablet:w-[88%] mx-auto tablet:gap-y-12 md:gap-y-12 items-center tablet:justify-between justify-center gap-[4rem] md:justify-between md:gap-[5%]  tablet:gap-[4%]">
//       {currentlyRequestedCategories.map((productData) => (
//         <SingleProductBox productsData={productData} key={productData._id} />
//       ))}
//       <div className="self-end tablet:ml-auto md:ml-auto flex gap-3 items-center md:self-center">
//         <Link
//           to="/shop"
//           className="text-lg lg:text-2xl text-primaryColor font-semibold hover:underline transition underline-offset-[6px] decoration-2"
//         >
//           Shop for more
//         </Link>
//         <FaLongArrowAltRight className="w-6 lg:w-10 h-10 fill-primaryColor" />
//       </div>
//     </div>
//   );
// };
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { SingleProductBox } from "../../../components/singleProductBox";
import { Link } from "react-router-dom";

export const HomepageCategoryProducts = ({ currentlyRequestedCategories }) => {
  return (
    <section className="w-full px-4 my-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 tablet:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
        {currentlyRequestedCategories.map((productData) => (
          <SingleProductBox productsData={productData} key={productData._id} />
        ))}
      </div>

      {/* Call to action link */}
      <div className="mt-12 flex justify-center md:justify-end max-w-7xl mx-auto px-2">
        <Link
          to="/shop"
          className="group flex items-center gap-3 text-lg md:text-xl lg:text-2xl font-semibold text-primaryColor hover:underline underline-offset-4 decoration-2 transition"
        >
          <span>Shop for more</span>
          <FaLongArrowAltRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </section>
  );
};
