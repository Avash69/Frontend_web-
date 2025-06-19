// import { useEffect } from "react";
// import { AiOutlineClose } from "react-icons/ai";
// import { FullpageSpinnerLoader } from "../../../components/loaders/spinnerIcon";

// export const ProductDetailsModal = ({
//   isProductDetailsModalOn,
//   setIsProductDetailsModalOn,
//   productDetails,
//   isFetchingUpdatedDataLoading,
// }) => {
//   const { image, title, price, stock, categories, discountPercentValue } = productDetails;

//   //loop through and get the sub categories arr so it can be displayed as part of the details
//   let subCategoriesArr = [];

//   for (let key in categories) {
//     if (categories[key].length > 0) subCategoriesArr.push(...categories[key]);
//   }

//   return (
//     <>
//       {" "}
//       {isFetchingUpdatedDataLoading && <FullpageSpinnerLoader />}
//       <div
//         className={`fixed top-[30%] sm:top-0 inset-x-0 h-[100vh] px-4 pb-4 sm:inset-0  sm:items-center sm:justify-center z-[3000]  ${
//           isProductDetailsModalOn ? "sm:flex  block" : "hidden"
//         }`}
//       >
//         <div className="fixed inset-0 transition-opacity flex justify-center items-center">
//           <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
//           <div className=" bg-white w-[90%] tablet:w-[90%] max-w-[400px] p-6 rounded-lg shadow-lg flex flex-col items-center relative">
//             <AiOutlineClose
//               className="w-8 h-8 fill-primaryColor absolute right-5 cursor-pointer top-5"
//               onClick={() => setIsProductDetailsModalOn(false)}
//             />
//             <div className="h-48 my-8 w-[100%] ">
//               <img src={image} className="w-full  max-h-full h-auto object-contain " alt="Product" />
//             </div>
//             <div className="flex flex-col items-center mb-4">
//               <h4 className=" mb-2">Product Title</h4> <span className=" text-lg font-bold capitalize">{title}</span>
//             </div>
//             <div className="flex flex-col items-center mb-4">
//               <h4 className=" ">Price</h4> <span className=" text-lg font-bold">{price} USD</span>
//             </div>
//             <div className="flex flex-col items-center mb-4">
//               <h4 className=" ">sub-categories</h4>{" "}
//               <span className=" text-lg font-bold text-center">
//                 {" "}
//                 {subCategoriesArr.map((categories) => categories).join(", ")}
//               </span>
//             </div>
//             <h4 className="  text-lg font-bold mb-4">{stock} in Stock</h4>
//             {discountPercentValue > 0 && (
//               <div className="flex flex-col items-center mb-4">
//                 <h4 className=" ">Discount percent</h4>{" "}
//                 <span className=" text-lg font-bold">-{discountPercentValue}%</span>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
import { AiOutlineClose } from "react-icons/ai";
import { FullpageSpinnerLoader } from "../../../components/loaders/spinnerIcon";

export const ProductDetailsModal = ({
  isProductDetailsModalOn,
  setIsProductDetailsModalOn,
  productDetails,
  isFetchingUpdatedDataLoading,
}) => {
  const { image, title, price, stock, categories, discountPercentValue } = productDetails || {};

  // Extract subcategories into a flat array
  const subCategoriesArr = [];
  for (let key in categories) {
    if (categories[key]?.length > 0) subCategoriesArr.push(...categories[key]);
  }

  return (
    <>
      {isFetchingUpdatedDataLoading && <FullpageSpinnerLoader />}
      <div
        className={`fixed inset-0 z-[3000] flex items-center justify-center bg-black bg-opacity-50 transition-opacity ${
          isProductDetailsModalOn ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-modal="true"
        role="dialog"
        aria-labelledby="product-details-title"
        aria-describedby="product-details-description"
      >
        <div
          className="bg-white rounded-lg shadow-lg max-w-md w-[90%] max-h-[90vh] overflow-y-auto p-6 relative"
          role="document"
        >
          <button
            aria-label="Close product details modal"
            className="absolute top-4 right-4 text-primaryColor hover:text-darkPrimaryColor focus:outline-none"
            onClick={() => setIsProductDetailsModalOn(false)}
          >
            <AiOutlineClose className="w-7 h-7" />
          </button>

          <div className="mb-6 flex justify-center">
            <img
              src={image}
              alt={title || "Product Image"}
              className="max-h-48 w-full object-contain rounded-md"
              loading="lazy"
            />
          </div>

          <div className="space-y-5 text-center">
            <section>
              <h3
                id="product-details-title"
                className="text-xl font-semibold text-gray-900 mb-1"
              >
                {title || "Product Title"}
              </h3>
            </section>

            <section>
              <h4 className="text-sm font-medium text-gray-700">Price</h4>
              <p className="text-lg font-bold text-gray-900">{price ? `${price} USD` : "N/A"}</p>
            </section>

            <section>
              <h4 className="text-sm font-medium text-gray-700">Sub-categories</h4>
              <p className="text-md font-semibold text-gray-800">
                {subCategoriesArr.length > 0 ? subCategoriesArr.join(", ") : "None"}
              </p>
            </section>

            <section>
              <h4 className="text-sm font-medium text-gray-700">Stock</h4>
              <p className="text-md font-semibold text-gray-900">{stock ?? "N/A"} in Stock</p>
            </section>

            {discountPercentValue > 0 && (
              <section>
                <h4 className="text-sm font-medium text-gray-700">Discount Percent</h4>
                <p className="text-md font-semibold text-green-600">-{discountPercentValue}%</p>
              </section>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
