// export const PaymentAndShipping = () => {
//   return (
//     <div className="w-[100] tablet:px-[6%] mb-20 xl:px-[4%] px-[4%] lg:px-[2%]">
//       <h2 className="text-2xl text-center">Shipping details</h2>
//       <div className="mt-16 flex flex-col gap-4 ">
//         <div className="flex gap-4">
//           <h4 className="font-bold">Delivery method:</h4>
//           <div className=" p-4 max-w-[200px] flex-col rounded-sm bg-neutralColor flex  gap-4">
//             <h4 className="mb-2 font-medium text-center">Standard rate</h4>
//             <h5 className="font-bold text-center">$5.00 USD</h5>
//             <span className="text-center">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, laborum? Lorem ipsum dolor sit amet
//               consectetur, adipisicing elit.
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
import React from "react";

export const PaymentAndShipping = () => {
  return (
    <section className="w-full tablet:px-[6%] mb-20 xl:px-[4%] px-[4%] lg:px-[2%] max-w-4xl mx-auto">
      <h2 className="text-3xl text-center font-semibold mb-10">Shipping Details</h2>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center md:gap-6">
          <h4 className="font-bold text-lg min-w-[150px]">Delivery Method:</h4>
          <div className="p-6 max-w-md bg-neutralColor rounded-md shadow-md flex flex-col gap-4">
            <h5 className="text-xl font-semibold text-center">Standard Rate</h5>
            <p className="text-primaryColor text-center font-bold text-lg">$5.00 USD</p>
            <p className="text-center text-gray-700 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus laborum, distinctio itaque dolore
              doloremque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        {/* Future enhancement: Add more delivery options or payment details here */}
      </div>
    </section>
  );
};
