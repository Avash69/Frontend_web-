// export const FullpageSpinnerLoader = () => {
//   return (
//     <section className="fixed top-0 left-0 bottom-0 w-[100%] h-[100vh] z-[4000]  bg-[rgba(0,0,0,0.4)] flex justify-center items-center">
//       <svg
//         className="loader z-[2000] ease-linear rounded-full border-8 border-t-primaryColor border-t-8 border-gray-200  h-16 w-16 ..."
//         viewBox="0 0 24 24"
//       ></svg>
//     </section>
//   );
// };
export const FullpageSpinnerLoader = () => {
  return (
    <section
      className="fixed inset-0 z-[4000] bg-black bg-opacity-40 flex justify-center items-center"
      aria-busy="true"
      aria-label="Loading"
    >
      <svg
        className="animate-spin h-16 w-16 text-primaryColor"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        ></path>
      </svg>
    </section>
  );
};
