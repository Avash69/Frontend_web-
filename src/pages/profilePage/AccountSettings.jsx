// import { motion } from "framer-motion";
// import { primaryBtnVariant } from "../../utils/animation";

// export const AccountSettings = () => {
//   return (
//     <div className="w-[100] tablet:px-[6%] mb-20 xl:px-[4%] px-[4%] lg:px-[2%]">
//       <h2 className="text-2xl text-center">Account settings</h2>
//       <div className="mt-20 mx-auto  lg:basis-[50%] xl:basis-[60%] lg:order-1 lg:mx-0  max-w-[500px] xl:max-w-[600px]">
//         <article>
//           <h2 className="text-[24px] font-bold  mb-6">Contact Information</h2>
//           <section className="flex flex-col gap-4 w-[100%] mx-auto">
//             <div className="w-[100%] ">
//               <label htmlFor="" className="font-medium text-[18px]">
//                 Username
//               </label>{" "}
//               <br />
//               <input
//                 type="text"
//                 name=""
//                 id=""
//                 className="pl-3 w-[100%] h-[52px] focus-border-[1px] rounded focus:outline-none border-[1px] border-secondaryColor"
//                 placeholder="username"
//               />
//             </div>
//             <div className="w-[100%] flex justify-between">
//               <div className=" p-4 w-[49%] flex-col rounded-sm bg-neutralColor flex items-start md:justify-between gap-6">
//                 <div>
//                   <h4 className="mb-4">Password</h4>
//                   <span className="mt-4">
//                     A verification link will be sent to your email for the password reset after clicking change
//                   </span>
//                 </div>
//                 <motion.button
//                   initial="initial"
//                   whileTap="click"
//                   variants={primaryBtnVariant}
//                   className=" block h-[28px] mx-auto w-[80%] max-w-[100px] bg-primaryColor text-white font-medium rounded"
//                 >
//                   Change
//                 </motion.button>
//               </div>
//               <div className=" p-4 w-[49%] flex-col bg-neutralColor flex rounded-sm items-start md:justify-between gap-6">
//                 <div>
//                   <h4 className="mb-4">Email address</h4>
//                   <span>
//                     A verification link will be sent to your email for the password reset after clicking change
//                   </span>
//                 </div>
//                 <motion.button
//                   initial="initial"
//                   whileTap="click"
//                   variants={primaryBtnVariant}
//                   className=" block h-[28px] mx-auto w-[80%] max-w-[100px] bg-primaryColor text-white font-medium rounded"
//                 >
//                   Change
//                 </motion.button>
//               </div>
//             </div>
//           </section>
//         </article>
//         <article className="mt-6">
//           <h2 className="text-[24px] font-bold  mb-6">Billing Address</h2>
//           <section className="flex flex-col gap-4 w-[100%] mx-auto">
//             <div className="w-[100%] ">
//               <label htmlFor="" className="font-medium  text-[18px]">
//                 Address
//               </label>{" "}
//               <br />
//               <input
//                 type="text"
//                 name=""
//                 id=""
//                 className="pl-3 w-[100%] h-[52px] focus-border-[1px] rounded focus:outline-none border-[1px] border-secondaryColor"
//                 placeholder="Address"
//               />
//             </div>
//             <div className="w-[100%] ">
//               <label htmlFor="" className="font-medium  text-[18px]">
//                 Country
//               </label>{" "}
//               <br />
//               <select
//                 name=""
//                 className="pl-3 w-[100%] h-[52px] focus-border-[1px] rounded focus:outline-none border-[1px] border-secondaryColor"
//                 id=""
//               >
//                 <option value="Nigeria">Nigeria</option>
//                 <option value="United states">United states</option>
//               </select>
//             </div>
//             <div className="w-[100%] flex justify-between gap-[5%] items-center">
//               <div className="w-[100%]">
//                 <label htmlFor="" className="font-medium  text-[18px]">
//                   City
//                 </label>{" "}
//                 <br />
//                 <input
//                   type="text"
//                   name=""
//                   id=""
//                   className="pl-3 w-[100%] h-[52px] focus-border-[1px] rounded focus:outline-none border-[1px] border-secondaryColor"
//                   placeholder="city"
//                 />
//               </div>
//               <div className="w-[100%]">
//                 <label htmlFor="" className="font-medium  text-[18px]">
//                   Postal code
//                 </label>{" "}
//                 <br />
//                 <input
//                   type="tel"
//                   name=""
//                   id=""
//                   className="pl-3 w-[100%] h-[52px] focus-border-[1px] rounded focus:outline-none border-[1px] border-secondaryColor"
//                   placeholder="Zip code"
//                 />
//               </div>
//             </div>
//           </section>
//         </article>
//         <article className="mt-6">
//           <h2 className="text-[24px] font-bold  mb-6">Shipping options</h2>
//           <div className="flex flex-col gap-2">
//             {" "}
//             <div className="flex gap-4 items-center">
//               <input type="radio" name="shipping-rate" value="standard" className="w-4 h-4" />{" "}
//               <span className=" text-lg">Standard Rate :&nbsp;$5.00 </span>
//             </div>
//             <div className="flex gap-4 items-center">
//               <input type="radio" name="shipping-rate" value="express" className="w-4 h-4" />{" "}
//               <span className=" text-lg">express Rate :&nbsp;$8.00 </span>
//             </div>
//             <div className="flex gap-4 items-center">
//               <input type="radio" name="shipping-rate" value="Free shipping" className="w-4 h-4" />{" "}
//               <span className=" text-lg">Free Shipping :&nbsp;$0 </span>
//             </div>
//           </div>
//         </article>
//         <article className="mt-6">
//           <h2 className="text-[24px] font-bold  mb-6">Payment method</h2>
//           <p className="font-medium text-[18px] text-primaryColor ">There is no payment functionalities yet*</p>
//         </article>
//         <motion.button
//           initial="initial"
//           whileTap="click"
//           variants={primaryBtnVariant}
//           className="my-12 w-[100%] mx-auto block h-[52px] bg-primaryColor text-white font-medium rounded"
//         >
//           Update Changes
//         </motion.button>
//       </div>
//     </div>
//   );
// };
import { motion } from "framer-motion";
import { primaryBtnVariant } from "../../utils/animation";

export const AccountSettings = () => {
  return (
    <section className="w-full tablet:px-[6%] xl:px-[4%] px-[4%] lg:px-[2%] mb-20">
      <h2 className="text-2xl text-center font-semibold mb-10">Account Settings</h2>

      <div className="mx-auto max-w-[600px] flex flex-col gap-10">
        {/* Contact Information */}
        <article>
          <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

          <section className="flex flex-col gap-6">
            {/* Username */}
            <div>
              <label htmlFor="username" className="font-medium text-lg block mb-1">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="username"
                className="w-full h-12 pl-3 rounded border border-secondaryColor focus:outline-none focus:ring-2 focus:ring-primaryColor transition"
              />
            </div>

            {/* Password and Email Change Sections */}
            <div className="flex gap-6 flex-wrap">
              {/* Password */}
              <div className="flex-1 min-w-[240px] bg-neutralColor rounded p-4 flex flex-col justify-between">
                <div>
                  <h4 className="mb-3 text-lg font-semibold">Password</h4>
                  <p className="text-sm">
                    A verification link will be sent to your email for the password reset after clicking change.
                  </p>
                </div>
                <motion.button
                  initial="initial"
                  whileTap="click"
                  variants={primaryBtnVariant}
                  className="mt-4 h-8 max-w-[120px] w-full bg-primaryColor text-white font-semibold rounded transition hover:bg-primaryColor/90"
                >
                  Change
                </motion.button>
              </div>

              {/* Email */}
              <div className="flex-1 min-w-[240px] bg-neutralColor rounded p-4 flex flex-col justify-between">
                <div>
                  <h4 className="mb-3 text-lg font-semibold">Email Address</h4>
                  <p className="text-sm">
                    A verification link will be sent to your email for the email change after clicking change.
                  </p>
                </div>
                <motion.button
                  initial="initial"
                  whileTap="click"
                  variants={primaryBtnVariant}
                  className="mt-4 h-8 max-w-[120px] w-full bg-primaryColor text-white font-semibold rounded transition hover:bg-primaryColor/90"
                >
                  Change
                </motion.button>
              </div>
            </div>
          </section>
        </article>

        {/* Billing Address */}
        <article>
          <h3 className="text-2xl font-bold mb-6">Billing Address</h3>

          <section className="flex flex-col gap-6">
            <div>
              <label htmlFor="billing-address" className="font-medium text-lg block mb-1">
                Address
              </label>
              <input
                type="text"
                id="billing-address"
                name="billingAddress"
                placeholder="Address"
                className="w-full h-12 pl-3 rounded border border-secondaryColor focus:outline-none focus:ring-2 focus:ring-primaryColor transition"
              />
            </div>

            <div>
              <label htmlFor="billing-country" className="font-medium text-lg block mb-1">
                Country
              </label>
              <select
                id="billing-country"
                name="billingCountry"
                className="w-full h-12 pl-3 rounded border border-secondaryColor focus:outline-none focus:ring-2 focus:ring-primaryColor transition"
              >
                <option value="Nigeria">Nigeria</option>
                <option value="United States">United States</option>
              </select>
            </div>

            <div className="flex gap-4 flex-wrap">
              <div className="flex-1 min-w-[200px]">
                <label htmlFor="billing-city" className="font-medium text-lg block mb-1">
                  City
                </label>
                <input
                  type="text"
                  id="billing-city"
                  name="billingCity"
                  placeholder="City"
                  className="w-full h-12 pl-3 rounded border border-secondaryColor focus:outline-none focus:ring-2 focus:ring-primaryColor transition"
                />
              </div>

              <div className="flex-1 min-w-[200px]">
                <label htmlFor="billing-postal-code" className="font-medium text-lg block mb-1">
                  Postal Code
                </label>
                <input
                  type="text"
                  id="billing-postal-code"
                  name="billingPostalCode"
                  placeholder="Zip code"
                  className="w-full h-12 pl-3 rounded border border-secondaryColor focus:outline-none focus:ring-2 focus:ring-primaryColor transition"
                />
              </div>
            </div>
          </section>
        </article>

        {/* Shipping Options */}
        <article>
          <h3 className="text-2xl font-bold mb-6">Shipping Options</h3>

          <fieldset className="flex flex-col gap-4" name="shipping-rate" aria-label="Shipping Options">
            <label className="flex items-center gap-3 text-lg cursor-pointer">
              <input type="radio" name="shipping-rate" value="standard" className="w-5 h-5" />
              <span>Standard Rate : $5.00</span>
            </label>

            <label className="flex items-center gap-3 text-lg cursor-pointer">
              <input type="radio" name="shipping-rate" value="express" className="w-5 h-5" />
              <span>Express Rate : $8.00</span>
            </label>

            <label className="flex items-center gap-3 text-lg cursor-pointer">
              <input type="radio" name="shipping-rate" value="free" className="w-5 h-5" />
              <span>Free Shipping : $0</span>
            </label>
          </fieldset>
        </article>

        {/* Payment Method */}
        <article>
          <h3 className="text-2xl font-bold mb-4">Payment Method</h3>
          <p className="font-medium text-lg text-primaryColor">There is no payment functionality yet*</p>
        </article>

        {/* Update Button */}
        <motion.button
          initial="initial"
          whileTap="click"
          variants={primaryBtnVariant}
          className="mt-8 w-full h-12 bg-primaryColor text-white font-semibold rounded transition hover:bg-primaryColor/90"
        >
          Update Changes
        </motion.button>
      </div>
    </section>
  );
};
