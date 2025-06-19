// export const ProductsNotFound = ({ searchTerm }) => {
//   return (
//     <h2 className="text-[20px] px-[10%] font-medium text-center">
//       Searched term `{searchTerm}` doesnt match any product criteria
//     </h2>
//   );
// };
import React from "react";

export const ProductsNotFound = ({ searchTerm }) => {
  return (
    <div className="py-12 px-6 max-w-xl mx-auto text-center">
      <h2 className="text-2xl font-semibold mb-4">
        No products found for <span className="text-primaryColor">"{searchTerm}"</span>
      </h2>
      <p className="text-gray-600">
        Sorry, we couldn't find any products matching your search. Please try different keywords or check back later.
      </p>
    </div>
  );
};
