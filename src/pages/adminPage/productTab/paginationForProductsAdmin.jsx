// export const PaginationSectionForProductsAdminPage = ({
//   productsLength,
//   asyncFnParamState,
//   asyncFn,
//   setAsyncFnParamState,
// }) => {
//   const { perPage, pageNo } = asyncFnParamState;

//   let pageNumbers = [];
//   for (let i = 1; i <= Math.ceil(productsLength / perPage); i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <div className="grid grid-cols-5 tablet:grid-cols-5 md:grid-cols-7 mr-[10%] mt-16 mb-24 md:mr-[12%] lg:mr-[15%] gap-4 lg:gap-6">
//       <h3 className="self-center">Page no : </h3>
//       {pageNumbers.map((number, index) => {
//         return (
//           <li
//             key={index}
//             className={`p-1 flex items-center justify-center border-[2px] transition-all duration-500 bg-white text-secondaryColor border-LightSecondaryColor ${
//               pageNo === number ? "active-product-page-no" : ""
//             } `}
//             data-id={number}
//             onClick={() => {
//               asyncFn({ ...asyncFnParamState, pageNo: number });
//               setAsyncFnParamState({ ...asyncFnParamState, pageNo: number });
//             }}
//           >
//             {number}
//           </li>
//         );
//       })}
//     </div>
//   );
// };
export const PaginationSectionForProductsAdminPage = ({
  productsLength,
  asyncFnParamState,
  asyncFn,
  setAsyncFnParamState,
}) => {
  const { perPage, pageNo } = asyncFnParamState;

  const totalPages = Math.ceil(productsLength / perPage);

  if (totalPages <= 1) return null; // No pagination needed if only one page

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const goToPage = (number) => {
    if (number === pageNo) return; // Avoid unnecessary state update
    asyncFn({ ...asyncFnParamState, pageNo: number });
    setAsyncFnParamState({ ...asyncFnParamState, pageNo: number });
  };

  return (
    <nav
      className="flex items-center justify-center gap-4 mt-16 mb-24 mr-[10%] md:mr-[12%] lg:mr-[15%]"
      aria-label="Pagination Navigation"
    >
      <button
        type="button"
        onClick={() => goToPage(pageNo - 1)}
        disabled={pageNo === 1}
        className={`px-3 py-1 border-2 rounded-md font-medium transition-colors duration-300 ${
          pageNo === 1
            ? "cursor-not-allowed border-gray-300 text-gray-400 bg-gray-100"
            : "border-LightSecondaryColor text-secondaryColor bg-white hover:bg-primaryColor hover:text-white"
        }`}
        aria-disabled={pageNo === 1}
        aria-label="Previous Page"
      >
        &laquo; Prev
      </button>

      <ul className="flex gap-3 list-none p-0 m-0">
        <li className="self-center font-semibold mr-2">Page no:</li>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              type="button"
              onClick={() => goToPage(number)}
              aria-current={pageNo === number ? "page" : undefined}
              className={`w-10 h-10 flex items-center justify-center border-2 rounded-md font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primaryColor
                ${
                  pageNo === number
                    ? "bg-primaryColor text-white border-primaryColor"
                    : "bg-white text-secondaryColor border-LightSecondaryColor hover:bg-primaryColor hover:text-white"
                }`}
              tabIndex={0}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => goToPage(pageNo + 1)}
        disabled={pageNo === totalPages}
        className={`px-3 py-1 border-2 rounded-md font-medium transition-colors duration-300 ${
          pageNo === totalPages
            ? "cursor-not-allowed border-gray-300 text-gray-400 bg-gray-100"
            : "border-LightSecondaryColor text-secondaryColor bg-white hover:bg-primaryColor hover:text-white"
        }`}
        aria-disabled={pageNo === totalPages}
        aria-label="Next Page"
      >
        Next &raquo;
      </button>
    </nav>
  );
};
