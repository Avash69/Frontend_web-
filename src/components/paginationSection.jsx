// import { useSelector } from "react-redux";

// export const PaginationSection = ({ setCurrentPageNo, NoOfProductsPerPage, currentPageNo }) => {
//   const { placeholderOfproductsDataCurrentlyRequested } = useSelector((state) => state.productsData);

//   let pageNumbers = [];
//   for (let i = 1; i <= Math.ceil(placeholderOfproductsDataCurrentlyRequested.length / NoOfProductsPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   const handleChangePageNo = (number) => {
//     setCurrentPageNo(number);
//   };

//   return (
//     <div className="grid grid-cols-5 tablet:grid-cols-5 md:grid-cols-7 mx-[10%] mt-16 mb-24 md:mx-[12%] lg:mx-[15%] gap-4 lg:gap-6">
//       <h3 className="self-center">Page no : </h3>
//       {pageNumbers.map((number, index) => {
//         return (
//           <li
//             key={index}
//             className={`p-3 flex items-center justify-center border-[2px] transition-all duration-500 bg-white text-secondaryColor border-LightSecondaryColor ${
//               currentPageNo === number ? "active-product-page-no" : ""
//             } `}
//             data-id={number}
//             onClick={() => handleChangePageNo(number)}
//           >
//             {number}
//           </li>
//         );
//       })}
//     </div>
//   );
// };
import { useSelector } from "react-redux";

export const PaginationSection = ({ setCurrentPageNo, NoOfProductsPerPage, currentPageNo }) => {
  const { placeholderOfproductsDataCurrentlyRequested } = useSelector((state) => state.productsData);

  const totalPages = Math.ceil(placeholderOfproductsDataCurrentlyRequested.length / NoOfProductsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handleChangePageNo = (number) => {
    setCurrentPageNo(number);
  };

  return (
    <div className="w-full flex justify-center mt-16 mb-24 px-4">
      <ul className="flex flex-wrap justify-center items-center gap-3 md:gap-4 lg:gap-5 text-base font-medium">
        <span className="text-secondaryColor text-[16px] md:text-[18px]">Page:</span>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 flex items-center justify-center rounded-md border-2 cursor-pointer transition-all duration-300 
              ${
                currentPageNo === number
                  ? "bg-primaryColor text-white border-primaryColor"
                  : "bg-white text-secondaryColor border-LightSecondaryColor hover:bg-primaryColor hover:text-white"
              }`}
            onClick={() => handleChangePageNo(number)}
            aria-label={`Go to page ${number}`}
          >
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
};
