// import { useDispatch, useSelector } from "react-redux";
// import { setShippingMethod } from "../../features/authSlice";
// import { FullpageSpinnerLoader } from "../../components/loaders/spinnerIcon";

// export const CheckoutForm = ({ placeOrderFn, checkoutFormData, setCheckoutFormData }) => {
//   const {
//     userData: { isLoading, email },
//   } = useSelector((state) => state.userAuth);

//   const dispatch = useDispatch();

//   return (
//     <form
//       className="mt-20 w-[92%] mx-auto tablet:w-[88%] lg:basis-[50%] xl:basis-[60%] lg:order-1 lg:mx-0  max-w-[500px] xl:max-w-[600px]"
//       onSubmit={placeOrderFn}
//     >
//       <article>
//         <h2 className="text-[24px] font-bold  mb-6">Contact Information</h2>
//         <section className="flex flex-col gap-4 w-[100%] mx-auto">
//           <div className="w-[100%] ">
//             <label htmlFor="" className="font-medium text-[18px]">
//               Username
//             </label>{" "}
//             <br />
//             <input
//               type="text"
//               name=""
//               id=""
//               required
//               className="pl-3 w-[100%] h-[52px] focus-border-[1px] rounded focus:outline-none border-[1px] border-LightSecondaryColor"
//               placeholder="username"
//               value={checkoutFormData.username}
//               onChange={(e) => {
//                 setCheckoutFormData((prevData) => {
//                   return { ...prevData, username: e.target.value };
//                 });
//               }}
//             />
//           </div>
//           <div className="w-[100%] ">
//             <label htmlFor="" className="font-medium  text-[18px]">
//               Email address
//             </label>{" "}
//             <br />
//             <input
//               type="email"
//               name=""
//               readOnly
//               id=""
//               required
//               defaultValue={email}
//               className="pl-3 cursor-not-allowed w-[100%] h-[52px] focus-border-[1px] rounded focus:outline-none border-[1px] border-LightSecondaryColor"
//               placeholder="user@gmail.com"
//             />
//           </div>
//         </section>
//       </article>
//       <article className="mt-6">
//         <h2 className="text-[24px] font-bold  mb-6">Billing Address</h2>
//         <section className="flex flex-col gap-4 w-[100%] mx-auto">
//           <div className="w-[100%] ">
//             <label htmlFor="" className="font-medium  text-[18px]">
//               Address
//             </label>{" "}
//             <br />
//             <input
//               type="text"
//               name=""
//               id=""
//               required
//               className="pl-3 w-[100%] h-[52px] focus-border-[1px] rounded focus:outline-none border-[1px] border-LightSecondaryColor"
//               placeholder="Address"
//               value={checkoutFormData.address}
//               onChange={(e) => {
//                 setCheckoutFormData((prevData) => {
//                   return { ...prevData, address: e.target.value };
//                 });
//               }}
//             />
//           </div>
//           <div className="w-[100%] ">
//             <label htmlFor="" className="font-medium  text-[18px]">
//               Country
//             </label>{" "}
//             <br />
//             <select
//               name=""
//               className="pl-3 w-[100%] h-[52px] focus-border-[1px] rounded focus:outline-none border-[1px] border-LightSecondaryColor"
//               id=""
//               required
//               value={checkoutFormData.country}
//               onChange={(e) => {
//                 setCheckoutFormData((prevData) => {
//                   return { ...prevData, country: e.target.value };
//                 });
//               }}
//             >
//               <option value="" selected disabled className="value">
//                 Select your country
//               </option>
//               <option value="Nigeria">Nigeria</option>
//               <option value="United states">United states</option>
//             </select>
//           </div>
//           <div className="w-[100%] flex justify-between gap-[5%] items-center">
//             <div className="w-[100%]">
//               <label htmlFor="" className="font-medium  text-[18px]">
//                 City
//               </label>{" "}
//               <br />
//               <input
//                 type="text"
//                 name=""
//                 required
//                 id=""
//                 className="pl-3 w-[100%] h-[52px] focus-border-[1px] rounded focus:outline-none border-[1px] border-LightSecondaryColor"
//                 placeholder="city"
//                 value={checkoutFormData.city}
//                 onChange={(e) => {
//                   setCheckoutFormData((prevData) => {
//                     return { ...prevData, city: e.target.value };
//                   });
//                 }}
//               />
//             </div>
//             <div className="w-[100%]">
//               <label htmlFor="" className="font-medium  text-[18px]">
//                 Postal code
//               </label>{" "}
//               <br />
//               <input
//                 type="tel"
//                 name=""
//                 id=""
//                 required
//                 className="pl-3 w-[100%] h-[52px] focus-border-[1px] rounded focus:outline-none border-[1px] border-LightSecondaryColor"
//                 placeholder="Zip code"
//                 value={checkoutFormData.postalCode}
//                 onChange={(e) => {
//                   setCheckoutFormData((prevData) => {
//                     return { ...prevData, postalCode: e.target.value };
//                   });
//                 }}
//               />
//             </div>
//           </div>
//         </section>
//       </article>
//       <article className="mt-6">
//         <h2 className="text-[24px] font-bold  mb-6">Shipping options</h2>
//         <div
//           className="flex flex-col gap-2"
//           onChange={(e) => {
//             if (e.target.type === "radio" && e.target.checked) {
//               dispatch(setShippingMethod(e.target.value));
//               setCheckoutFormData((prevData) => {
//                 return { ...prevData, shippingMethod: e.target.value };
//               });
//             }
//           }}
//         >
//           {" "}
//           <div className="flex gap-4 items-center">
//             <input type="radio" name="shipping-rate" required value="standard" className="w-4 h-4" />{" "}
//             <span className=" text-lg">Standard Rate :&nbsp;$7.00 </span>
//           </div>
//           <div className="flex gap-4 items-center">
//             <input type="radio" name="shipping-rate" required value="express" className="w-4 h-4" />{" "}
//             <span className=" text-lg">express Rate :&nbsp;$10.00 </span>
//           </div>
//           <div className="flex gap-4 items-center">
//             <input type="radio" name="shipping-rate" required value="free shipping" className="w-4 h-4" />{" "}
//             <span className=" text-lg">Free Shipping :&nbsp;$0 </span>
//           </div>
//         </div>
//       </article>
//       <article className="mt-6">
//         <h2 className="text-[24px] font-bold  mb-6">Payment method</h2>
//         <p className="font-medium text-[18px] text-primaryColor ">There is no payment functionalities yet*</p>
//       </article>
//       <button
//         type="submit"
//         className="my-12 w-[100%] mx-auto block h-[52px] bg-primaryColor text-white font-medium rounded"
//       >
//         {isLoading ? <>Processing</> : "Place Order"}
//       </button>

//       {isLoading && <FullpageSpinnerLoader />}
//     </form>
//   );
// };
import { useDispatch, useSelector } from "react-redux";
import { setShippingMethod } from "../../features/authSlice";
import { FullpageSpinnerLoader } from "../../components/loaders/spinnerIcon";

export const CheckoutForm = ({ placeOrderFn, checkoutFormData, setCheckoutFormData }) => {
  const {
    userData: { isLoading, email },
  } = useSelector((state) => state.userAuth);

  const dispatch = useDispatch();

  const handleInputChange = (field) => (e) => {
    setCheckoutFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleShippingChange = (e) => {
    const { value } = e.target;
    dispatch(setShippingMethod(value));
    setCheckoutFormData((prev) => ({ ...prev, shippingMethod: value }));
  };

  return (
    <form
      className="mt-20 w-[92%] mx-auto tablet:w-[88%] lg:basis-[50%] xl:basis-[60%] lg:order-1 lg:mx-0 max-w-[600px]"
      onSubmit={placeOrderFn}
    >
      {/* Contact Info */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="username" className="font-medium text-lg block mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              required
              className="pl-3 w-full h-[52px] rounded border border-LightSecondaryColor focus:outline-none"
              placeholder="Enter your name"
              value={checkoutFormData.username}
              onChange={handleInputChange("username")}
            />
          </div>
          <div>
            <label htmlFor="email" className="font-medium text-lg block mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              readOnly
              defaultValue={email}
              className="pl-3 w-full h-[52px] cursor-not-allowed rounded border border-LightSecondaryColor bg-gray-100"
            />
          </div>
        </div>
      </section>

      {/* Billing Address */}
      <section className="mt-6">
        <h2 className="text-2xl font-bold mb-6">Billing Address</h2>
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="address" className="font-medium text-lg block mb-1">
              Address
            </label>
            <input
              type="text"
              id="address"
              required
              className="pl-3 w-full h-[52px] rounded border border-LightSecondaryColor focus:outline-none"
              placeholder="Street address"
              value={checkoutFormData.address}
              onChange={handleInputChange("address")}
            />
          </div>
          <div>
            <label htmlFor="country" className="font-medium text-lg block mb-1">
              Country
            </label>
            <select
              id="country"
              required
              className="pl-3 w-full h-[52px] rounded border border-LightSecondaryColor focus:outline-none"
              value={checkoutFormData.country}
              onChange={handleInputChange("country")}
            >
              <option value="" disabled>
                Select your country
              </option>
              <option value="Nepal">Nepal</option>
              <option value="United States">United States</option>
              <option value="India">India</option>
            </select>
          </div>

          <div className="flex gap-4">
            <div className="w-full">
              <label htmlFor="city" className="font-medium text-lg block mb-1">
                City
              </label>
              <input
                type="text"
                id="city"
                required
                className="pl-3 w-full h-[52px] rounded border border-LightSecondaryColor focus:outline-none"
                placeholder="City"
                value={checkoutFormData.city}
                onChange={handleInputChange("city")}
              />
            </div>
            <div className="w-full">
              <label htmlFor="postalCode" className="font-medium text-lg block mb-1">
                Postal Code
              </label>
              <input
                type="tel"
                id="postalCode"
                required
                className="pl-3 w-full h-[52px] rounded border border-LightSecondaryColor focus:outline-none"
                placeholder="Zip code"
                value={checkoutFormData.postalCode}
                onChange={handleInputChange("postalCode")}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Options */}
      <section className="mt-6">
        <h2 className="text-2xl font-bold mb-6">Shipping Options</h2>
        <div className="flex flex-col gap-2" onChange={handleShippingChange}>
          {[
            { label: "Standard Rate : $7.00", value: "standard" },
            { label: "Express Rate : $10.00", value: "express" },
            { label: "Free Shipping : $0", value: "free shipping" },
          ].map(({ label, value }) => (
            <div key={value} className="flex items-center gap-4">
              <input
                type="radio"
                name="shipping-rate"
                value={value}
                required
                className="w-4 h-4"
                checked={checkoutFormData.shippingMethod === value}
              />
              <span className="text-lg">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Payment Method */}
      <section className="mt-6">
        <h2 className="text-2xl font-bold mb-6">Payment Method</h2>
        <p className="text-primaryColor text-lg font-medium">
          * Payment functionality will be added soon.
        </p>
      </section>

      <button
        type="submit"
        className="my-12 w-full h-[52px] bg-primaryColor text-white font-medium rounded hover:opacity-90 transition"
      >
        {isLoading ? "Processing..." : "Place Order"}
      </button>

      {isLoading && <FullpageSpinnerLoader />}
    </form>
  );
};
