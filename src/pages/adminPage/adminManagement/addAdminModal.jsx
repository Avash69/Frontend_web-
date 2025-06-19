// export const RemoveAdminModal = () => {
//   return (
//     <div className="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center">
//       <div className="fixed inset-0 transition-opacity">
//         <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
//       </div>

//       <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
//         <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
//           <div className="sm:flex sm:items-start">
//             <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
//               <svg className="h-6 w-6 text-red-600" stroke="currentColor" fill="none" viewBox="0 0 24 24">
//                 <path
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2"
//                   d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
//                 />
//               </svg>
//             </div>
//             <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
//               <h3 className="text-lg leading-6 font-medium text-gray-900">Confirm removal of admin</h3>
//               <div className="mt-2">
//                 <p className="text-sm leading-5 text-gray-500">Are you sure you want to remove this admin?</p>
//               </div>
//               <div className="mt-4">
//                 <form>
//                   <div className="shadow-sm">
//                     <div className="relative">
//                       <input
//                         id="email"
//                         type="email"
//                         required
//                         className="form-input block w-full py-2 px-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
//                         placeholder="Admin Email"
//                       />
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
//           <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
//             <button
//               type="button"
//               className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
//             >
//               Remove Admin
//             </button>
//           </span>
//           <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
//             <button
//               type="button"
//               className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
//             >
//               Cancel
//             </button>
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };
import { useState, useEffect, useRef } from "react";

export const RemoveAdminModal = ({ onConfirm, onCancel }) => {
  const [email, setEmail] = useState("");
  const modalRef = useRef(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onCancel();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onCancel]);

  // Focus modal on mount
  useEffect(() => {
    modalRef.current?.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      onConfirm(email.trim());
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="remove-admin-title"
      tabIndex={-1}
      ref={modalRef}
      className="fixed inset-0 flex items-center justify-center z-50 px-4 pb-4 sm:pb-0 bg-black bg-opacity-50"
    >
      <div className="bg-white rounded-lg shadow-xl max-w-lg w-full sm:w-auto focus:outline-none">
        <div className="px-6 pt-6 pb-4">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-red-100">
              <svg
                className="h-6 w-6 text-red-600"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
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
              id="remove-admin-title"
              className="ml-4 text-lg font-medium text-gray-900"
            >
              Confirm removal of admin
            </h3>
          </div>

          <p className="mt-3 text-sm text-gray-500">
            Are you sure you want to remove this admin? Please enter the admin
            email below to confirm.
          </p>

          <form className="mt-5" onSubmit={handleSubmit}>
            <label htmlFor="admin-email" className="sr-only">
              Admin Email
            </label>
            <input
              id="admin-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Admin Email"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 sm:text-sm"
            />

            <div className="mt-6 flex justify-end space-x-3">
              <button
                type="submit"
                className="inline-flex justify-center px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Remove Admin
              </button>
              <button
                type="button"
                onClick={onCancel}
                className="inline-flex justify-center px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
