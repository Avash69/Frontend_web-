// import axios from "axios";
// import { useState } from "react";
// import { toast } from "react-toastify";
// import { FullpageSpinnerLoader } from "../../../components/loaders/spinnerIcon";

// export const DeleteProductModal = ({ isDeleteModalOn, setIsDeleteModalOn, _id }) => {
//   const [isDeleteLoading, setIsDeleteLoading] = useState(false);

//   const serverUrl = process.env.REACT_APP_SERVER_URL || "http://localhost:5000";

//   const fetchDeleteProduct = async () => {
//     setIsDeleteLoading(true);
//     try {
//       const LoginToken = JSON.parse(localStorage.getItem("UserData"))?.loginToken || " ";
//       const data = await axios.delete(`${serverUrl}/api/v1/products/deleteProduct/${_id}`, {
//         headers: {
//           authorization: `Bearer ${LoginToken}`,
//           "Content-Type": "application/json",
//         },
//       });

//       setIsDeleteLoading(false);
//       setIsDeleteModalOn(false);

//       toast("Product has been successfully deleted", {
//         type: "success",
//         autoClose: 3000,
//         position: "top-center",
//       });
//     } catch (error) {
//       setIsDeleteLoading(false);
//       toast(error?.response?.data?.message || error?.message, {
//         type: "error",
//         autoClose: 3000,
//         position: "top-center",
//       });
//     }
//   };

//   return (
//     <>
//       {isDeleteLoading && <FullpageSpinnerLoader />}

//       <div
//         className={`fixed top-[30%] sm:top-0 inset-x-0 h-[100vh] px-4 pb-4 sm:inset-0  sm:items-center sm:justify-center z-[3000]  ${
//           isDeleteModalOn ? "sm:flex  block" : "hidden"
//         }`}
//       >
//         <div className="fixed inset-0 transition-opacity">
//           <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
//         </div>

//         <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
//           <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
//             <div className="sm:flex sm:items-start">
//               <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-lighterPrimaryColor sm:mx-0 sm:h-10 sm:w-10">
//                 <svg className="h-6 w-6 text-primaryColor" stroke="currentColor" fill="none" viewBox="0 0 24 24">
//                   <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
//                   />
//                 </svg>
//               </div>
//               <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
//                 <h3 className="text-lg leading-6 font-medium text-gray-900">Confirm delete of product</h3>
//                 <div className="mt-2">
//                   <p className="text-sm leading-5 text-gray-500">Are you sure you want to delete this product?</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
//             <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
//               <button
//                 type="button"
//                 className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-primaryColor text-base leading-6 font-medium text-white shadow-sm hover:bg-darkPrimaryColor focus:outline-none focus:border-primaryColor focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
//                 onClick={fetchDeleteProduct}
//               >
//                 Delete product
//               </button>
//             </span>
//             <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
//               <button
//                 type="button"
//                 className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
//                 onClick={() => {
//                   setIsDeleteModalOn(false);
//                 }}
//               >
//                 Cancel
//               </button>
//             </span>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { FullpageSpinnerLoader } from "../../../components/loaders/spinnerIcon";

export const DeleteProductModal = ({ isDeleteModalOn, setIsDeleteModalOn, _id }) => {
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);
  const cancelButtonRef = useRef(null);

  const serverUrl = process.env.REACT_APP_SERVER_URL || "http://localhost:5000";

  // Lock background scroll when modal open
  useEffect(() => {
    if (isDeleteModalOn) {
      document.body.style.overflow = "hidden";
      // Focus the cancel button when modal opens for accessibility
      if (cancelButtonRef.current) {
        cancelButtonRef.current.focus();
      }
    } else {
      document.body.style.overflow = "";
    }
  }, [isDeleteModalOn]);

  const fetchDeleteProduct = async () => {
    setIsDeleteLoading(true);
    try {
      const LoginToken = JSON.parse(localStorage.getItem("UserData"))?.loginToken || "";
      await axios.delete(`${serverUrl}/api/v1/products/deleteProduct/${_id}`, {
        headers: {
          authorization: `Bearer ${LoginToken}`,
          "Content-Type": "application/json",
        },
      });

      setIsDeleteLoading(false);
      setIsDeleteModalOn(false);

      toast.success("Product has been successfully deleted", {
        autoClose: 3000,
        position: "top-center",
      });
    } catch (error) {
      setIsDeleteLoading(false);
      toast.error(error?.response?.data?.message || error?.message || "Failed to delete product", {
        autoClose: 3000,
        position: "top-center",
      });
    }
  };

  if (!isDeleteModalOn) return null;

  return (
    <>
      {isDeleteLoading && <FullpageSpinnerLoader />}

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="delete-product-title"
        aria-describedby="delete-product-description"
        className="fixed inset-0 z-[3000] flex items-center justify-center px-4 pb-4 sm:inset-0 sm:pb-0 bg-black bg-opacity-50"
      >
        <div className="bg-white rounded-lg shadow-xl max-w-lg w-full sm:m-auto sm:max-h-[90vh] overflow-y-auto transform transition-all">
          <div className="p-6 sm:p-8">
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                <svg
                  className="h-6 w-6 text-red-600"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h3
                id="delete-product-title"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                Confirm Delete Product
              </h3>
            </div>
            <p
              id="delete-product-description"
              className="mt-4 text-sm text-gray-500"
            >
              Are you sure you want to delete this product? This action cannot be undone.
            </p>
          </div>

          <div className="bg-gray-50 px-6 py-4 flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-3 sm:space-x-reverse">
            <button
              type="button"
              onClick={() => setIsDeleteModalOn(false)}
              ref={cancelButtonRef}
              className="mt-3 sm:mt-0 inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={fetchDeleteProduct}
              disabled={isDeleteLoading}
              className={`inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                isDeleteLoading
                  ? "bg-red-300 cursor-not-allowed focus:ring-red-300"
                  : "bg-red-600 hover:bg-red-700 focus:ring-red-500"
              }`}
            >
              {isDeleteLoading ? "Deleting..." : "Delete Product"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
