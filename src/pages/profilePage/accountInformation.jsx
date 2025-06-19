// import { BiArrowToRight } from "react-icons/bi";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// export const AccountInformation = () => {
//   const { userData } = useSelector((state) => state.userAuth);
//   const navigate = useNavigate();
//   return (
//     <div className="w-[100] tablet:px-[6%] mb-20 xl:px-[4%] px-[4%] lg:px-[2%]">
//       <h2 className="text-2xl text-center">Account Information</h2>

//       <div className="mt-16 flex flex-col gap-4">
//         {userData.adminStatus && (
//           <div
//             className="text-center w-[60%] max-w-[240px] self-end h-16  px-2 justify-center hover:opacity-100 bg-lightestPrimaryColor text-[hsl(37,98%,53%)] cursor-pointer shadow-[0px_3px_8px_0px_rgba(0,0,0,0.1)]  rounded-md flex items-center "
//             onClick={() => navigate("/administrator/product-management")}
//           >
//             <span>Proceed to Admin page</span> &nbsp; &nbsp; <BiArrowToRight className="w-6 h-6 stroke-primaryColor" />
//           </div>
//         )}

//         <h3 className="text-xl ">Personal information</h3>
//         <div className="flex gap-4">
//           <h4 className="font-bold">Email :</h4>
//           <span>{userData.email}</span>
//         </div>
//         <div className="flex gap-4">
//           <h4 className="font-bold">Username :</h4>
//           <span>{userData.username}</span>
//         </div>
//       </div>
//       <div className="mt-16 flex flex-col  gap-4">
//         <h3 className="text-xl ">Customer metrics</h3>
//         <div className="flex gap-4">
//           <h4 className="font-bold">Year joined :</h4>
//           <span>2024</span>
//         </div>
//         <div className="flex gap-4">
//           <h4 className="font-bold">Complete purchases :</h4>
//           <span>0</span>
//         </div>
//         <div className="flex gap-4">
//           <h4 className="font-bold">Value of purchases :</h4>
//           <span>0</span>
//         </div>
//       </div>
//     </div>
//   );
// };
import { BiArrowToRight } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const AccountInformation = () => {
  const { userData } = useSelector((state) => state.userAuth);
  const navigate = useNavigate();

  if (!userData) {
    return (
      <div className="w-full px-4 py-10 text-center text-gray-500">
        Loading user information...
      </div>
    );
  }

  return (
    <section className="w-full tablet:px-[6%] xl:px-[4%] px-[4%] lg:px-[2%] mb-20 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-12">Account Information</h2>

      {/* Admin Redirect Button */}
      {userData.adminStatus && (
        <div
          role="button"
          tabIndex={0}
          onClick={() => navigate("/administrator/product-management")}
          onKeyDown={(e) => { if (e.key === 'Enter') navigate("/administrator/product-management"); }}
          className="cursor-pointer self-end max-w-[240px] w-[60%] h-16 px-4 flex items-center justify-center gap-2 bg-yellow-300 text-yellow-900 rounded-md shadow-md hover:bg-yellow-400 transition focus:outline-none focus:ring-2 focus:ring-yellow-500"
          aria-label="Proceed to Admin page"
        >
          <span className="font-medium">Proceed to Admin page</span>
          <BiArrowToRight className="w-6 h-6 stroke-yellow-900" />
        </div>
      )}

      {/* Personal Info */}
      <article className="mt-16 space-y-6">
        <h3 className="text-xl font-semibold border-b border-gray-300 pb-2">Personal Information</h3>
        <div className="flex gap-4">
          <h4 className="font-bold min-w-[120px]">Email:</h4>
          <p>{userData.email || "Not available"}</p>
        </div>
        <div className="flex gap-4">
          <h4 className="font-bold min-w-[120px]">Username:</h4>
          <p>{userData.username || "Not available"}</p>
        </div>
      </article>

      {/* Customer Metrics */}
      <article className="mt-16 space-y-6">
        <h3 className="text-xl font-semibold border-b border-gray-300 pb-2">Customer Metrics</h3>
        <div className="flex gap-4">
          <h4 className="font-bold min-w-[120px]">Year joined:</h4>
          <p>{userData.yearJoined || "2024"}</p>
        </div>
        <div className="flex gap-4">
          <h4 className="font-bold min-w-[120px]">Completed purchases:</h4>
          <p>{userData.completedPurchases ?? 0}</p>
        </div>
        <div className="flex gap-4">
          <h4 className="font-bold min-w-[120px]">Value of purchases:</h4>
          <p>{userData.valueOfPurchases ?? 0}</p>
        </div>
      </article>
    </section>
  );
};
