// import React from "react";
// import { BsArrowRight } from "react-icons/bs";
// import { useEffect, useState, useMemo } from "react";
// import { countDownOnTheLastDayOfTheMonth, countDownToTheEndOfTheMonth } from "../../../utils/countDownFns";
// import dealOfTheMonthImg from "../../../assets/livingRoomCategory.jpg";
// import { FaQuestion } from "react-icons/fa";

// export const DealOfTheMonth = () => {
//   const [isOfferOn, setIsOfferOn] = useState(false);
//   const [offerProduct, setOfferProduct] = useState({
//     title: "borsalino chair",
//     price: 500,
//     discountPercentValue: 97,
//     stock: 1,
//     imgUrl: dealOfTheMonthImg,
//   });

//   const { title, price, discountPercentValue, stock, imgUrl } = offerProduct;

//   const [periodToLastDayOfTheMonth, setPeriodsToLastDayOfTheMonth] = useState({ days: 0, mins: 0, secs: 0, hours: 0 });

//   const startDateInDateFormat = new Date();
//   let currentMonth = startDateInDateFormat.getMonth();
//   let currentYear = startDateInDateFormat.getFullYear();
//   let lastDayOfTheCurrentMonth = new Date(currentYear, currentMonth + 1, 0);

//   const [isCurrentDateLastDayOfTheMonth, setIsCurrentDateLastDayOfTheMonth] = useState(
//     new Date().getDate() === lastDayOfTheCurrentMonth.getDate()
//   );

//   useEffect(() => {
//     if (!isCurrentDateLastDayOfTheMonth) {
//       setIsOfferOn(false);

//       let clearCountDownToLastDayOfTheMonth = setInterval(() => {
//         countDownToTheEndOfTheMonth(
//           clearCountDownToLastDayOfTheMonth,
//           lastDayOfTheCurrentMonth,
//           setIsCurrentDateLastDayOfTheMonth,
//           setPeriodsToLastDayOfTheMonth
//         );
//       }, 1000);
//     } else if (isCurrentDateLastDayOfTheMonth) {
//       setIsOfferOn(true);

//       // endingOfTheLastDayOfTheMonth is the last milliseconds of the lastDayOfTheMonth

//       let clearLastDayOfMonthCount = setInterval(() => {
//         countDownOnTheLastDayOfTheMonth(
//           clearLastDayOfMonthCount,
//           lastDayOfTheCurrentMonth,
//           setIsCurrentDateLastDayOfTheMonth,
//           setPeriodsToLastDayOfTheMonth
//         );
//       }, 1000);
//     }
//   }, [isCurrentDateLastDayOfTheMonth]);

//   let discountedPrice = price - (price * discountPercentValue) / 100;

//   return (
//     <section className="mb-20">
//       <h1 className="font-bold text-[36px] mb-8 text-center ">Deal of the Month</h1>
//       <div className="w-[100%] md:w-[100%] lg:gap-0  lg:justify-between bg-neutralColor  pb-14 gap-9 lg:order-1 flex flex-col lg:pl-0  lg:flex-row md:py-0 lg:min-h-[480px]  lg:pr-[1%]">
//         <div className="w-[100%] lg:max-h-[600px] max-h-[620px] md:h-[600px] h-auto md:min-h-[600px] relative lg:mx-0 mx-auto lg:basis-[55%]">
//           {imgUrl.length < 0 ? (
//             <div className="w-[100%] border-b-2 border-LightSecondaryColor h-auto flex flex-col items-center gap-4 py-20 md:py-0 md:h-[100%] justify-center lg:border-b-0 lg:border-r-2">
//               <FaQuestion className="w-20 h-20 md:w-40 md:h-40" />
//               <h2 className="text-lg md:text-xl lg:text-2xl"> Product image</h2>
//               <h2 className="text-lg md:text-xl lg:text-2xl"> Coming soon ...</h2>
//             </div>
//           ) : (
//             <>
//               <img className="w-[100%]  h-[100%]" alt="monthly-deal" src={dealOfTheMonthImg} />

//               {isOfferOn && stock <= 0 && (
//                 <div className="flex justify-center items-center absolute w-16 tablet:w-24 tablet:h-24 md:w-28 md:h-28  h-16 z-[100] top-4 left-4 rounded-[50%] hover:opacity-100 bg-lightPrimaryColor text-white  shadow-[0px_3px_8px_0px_rgba(0,0,0,0.2)]  ">
//                   <span className="text-sm tablet:text-base font-bold md:text-base">sold out</span>
//                 </div>
//               )}
//             </>
//           )}
//         </div>
//         <div className="lg:basis-[45%] tablet:pl-[6%] pl-[4%] md:pl-[4%] md:order-2 flex-col flex gap-5 md:pb-8 lg:mt-8">
//           <h2 className="text-3xl tablet:text-4xl  md:text-4xl font-bold mr-[35%] leading-[120%] tablet:leading-[130%] md:leading-[140%] lg:leading-[120%] md:mr-[60%] lg:mr-[25%] max-w-[400px]">
//             Get &nbsp;
//             <span className="text-primaryColor font-bold">
//               {isOfferOn ? `${discountPercentValue}% discount` : "a huge discount"}
//             </span>
//             &nbsp; from this Furniture set
//           </h2>
//           <h3 className="text-primaryColor mt-2 font-RobotoSlab  font-medium  text-xl tablet:text-2xl md:text-2xl xl:text-3xl">
//             {" "}
//             {isOfferOn ? "Offer ends by :" : "Offer begins by :"}{" "}
//           </h3>
//           <div className="flex gap-[0.9rem] lg:[0.8rem] w-[96%] lg:gap-[0.9rem] lg:w-[100%] tablet:w-[88%]  md:w[92%] tablet:py-4 max-w-[372px]  md:max-w-[392px] lg:max-w-[400px] items-start bg-primaryColor text-white font-bold font-RobotoCondensed py-2 justify-center mr-auto">
//             <div className="flex flex-col gap-[2px] items-center">
//               <span className="text-2xl tablet:text-3xl lg:text-3xl ">{periodToLastDayOfTheMonth.days}</span>
//               <span className="text-xs tablet:text-sm  lg:text-sm  tracking-wider">DAYS</span>
//             </div>
//             <span className="text-2xl tablet:text-3xl lg:text-3xl">:</span>
//             <div className="flex flex-col gap-[2px] items-center">
//               <span className="text-2xl tablet:text-3xl lg:text-3xl ">{periodToLastDayOfTheMonth.hours}</span>
//               <span className="text-xs tablet:text-sm  lg:text-sm tracking-wider">HOURS</span>
//             </div>
//             <span className="text-2xl tablet:text-3xl lg:text-3xl">:</span>
//             <div className="flex flex-col gap-[2px] items-center">
//               <span className="text-2xl tablet:text-3xl lg:text-3xl  ">{periodToLastDayOfTheMonth.mins}</span>
//               <span className="text-xs tablet:text-sm  lg:text-sm tracking-wider">MINUTES</span>
//             </div>
//             <span className="text-2xl tablet:text-3xl lg:text-3xl">:</span>
//             <div className="flex flex-col gap-[2px] items-center">
//               <span className="text-2xl tablet:text-3xl lg:text-3xl  ">{periodToLastDayOfTheMonth.secs}</span>
//               <span className="text-xs tablet:text-sm  lg:text-sm tracking-wider">SECONDS</span>
//             </div>
//           </div>

//           <div className="flex flex-col gap-5 mt-2">
//             <div className=" flex gap-2 items-center">
//               <h3 className="font-bold text-[20px] md:text-[24px] lg:text-[20px] xl:text-2xl font-RobotoSlab  tracking-[0.5px]">
//                 Title :
//               </h3>
//               <h3 className="font-bold capitalize font-RobotoSlab text-xl tablet:text-2xl lg:text-2xl">
//                 {isOfferOn ? title : <span className="font-bold text-[16px]">???</span>}
//               </h3>
//             </div>
//             <div className="flex gap-2 items-center">
//               <h3 className="font-bold text-[20px] md:text-[24px] lg:text-[20px] xl:text-2xl tracking-[0.5px] font-RobotoSlab ">
//                 Price :
//               </h3>
//               {isOfferOn ? (
//                 <>
//                   {" "}
//                   {discountPercentValue > 0 ? (
//                     <div className="flex gap-3">
//                       <h3 className="font-bold text-[20px] md:text-[28px] font-RobotoSlab tracking-[1px]">
//                         ${discountedPrice.toFixed(2)}
//                       </h3>
//                       <h3 className="line-through tracking-[1px] text-[18px] md:text-[20px] font-RobotoSlab">
//                         ${price.toFixed(2)}
//                       </h3>
//                     </div>
//                   ) : (
//                     <h3 className="font-bold text-[20px] md:text-[28px] tracking-[1px] font-RobotoSlab">
//                       ${price.toFixed(2)}
//                     </h3>
//                   )}
//                 </>
//               ) : (
//                 <span className="font-bold">???</span>
//               )}
//             </div>
//             <div className="flex gap-2 items-center">
//               <h3 className="font-bold text-[20px] md:text-[24px] lg:text-[20px] xl:text-2xl tracking-[0.5px] font-RobotoSlab ">
//                 Availability :
//               </h3>
//               {isOfferOn ? (
//                 <span className="text-primaryColor text-lg md:text-xl xl:text-2xl tracking-[0.7px] font-RobotoSlab md:xl ">
//                   {offerProduct.stock < 0 ? "Out of stock" : <strong>{offerProduct.stock}</strong>}
//                   {offerProduct.stock >= 0 && " left in stock"}
//                 </span>
//               ) : (
//                 <span className="font-bold">???</span>
//               )}
//             </div>
//           </div>

//           {isOfferOn && (
//             <button className=" text-primaryColor min-w-[150px] max-w-[160px] bg-transparent border-[1px] border-primaryColor cursor-pointer rounded-sm h-[52px] tablet:[52px] tablet:w-[154px] w-[20%] gap-2 justify-center  flex items-center font-bold font-RobotoCondensed hover:text-white hover:border-transparent hover:bg-primaryColor hover:duration-500 hover:transition">
//               <span> Buy Now</span>
//               <BsArrowRight />
//             </button>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };
import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaQuestion } from "react-icons/fa";
import dealOfTheMonthImg from "../../../assets/livingRoomCategory.jpg";
import { countDownOnTheLastDayOfTheMonth, countDownToTheEndOfTheMonth } from "../../../utils/countDownFns";

export const DealOfTheMonth = () => {
  const [isOfferOn, setIsOfferOn] = useState(false);
  const [offerProduct, setOfferProduct] = useState({
    title: "Borsalino Chair",
    price: 500,
    discountPercentValue: 97,
    stock: 1,
    imgUrl: dealOfTheMonthImg,
  });

  const { title, price, discountPercentValue, stock, imgUrl } = offerProduct;
  const [periodToLastDayOfTheMonth, setPeriodsToLastDayOfTheMonth] = useState({
    days: 0,
    mins: 0,
    secs: 0,
    hours: 0,
  });

  const today = new Date();
  const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  const [isCurrentDateLastDayOfTheMonth, setIsCurrentDateLastDayOfTheMonth] = useState(
    today.getDate() === lastDayOfMonth.getDate()
  );

  useEffect(() => {
    if (!isCurrentDateLastDayOfTheMonth) {
      const interval = setInterval(() => {
        countDownToTheEndOfTheMonth(
          interval,
          lastDayOfMonth,
          setIsCurrentDateLastDayOfTheMonth,
          setPeriodsToLastDayOfTheMonth
        );
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setIsOfferOn(true);
      const interval = setInterval(() => {
        countDownOnTheLastDayOfTheMonth(
          interval,
          lastDayOfMonth,
          setIsCurrentDateLastDayOfTheMonth,
          setPeriodsToLastDayOfTheMonth
        );
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isCurrentDateLastDayOfTheMonth, lastDayOfMonth]);

  const discountedPrice = price - (price * discountPercentValue) / 100;

  return (
    <section className="mb-20 bg-gradient-to-r from-neutral-100 to-white py-16 px-6 lg:px-20 rounded-lg shadow-md">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-primaryColor">🔥 Deal of the Month 🔥</h1>

      <div className="flex flex-col lg:flex-row gap-10 items-center justify-between">
        {/* Image Section */}
        <div className="w-full lg:w-[50%] h-[360px] lg:h-[480px] relative overflow-hidden rounded-lg shadow-md">
          {imgUrl ? (
            <img src={imgUrl} alt="Deal of the Month" className="w-full h-full object-cover rounded-lg" />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
              <FaQuestion className="w-16 h-16 text-gray-400" />
              <p className="text-xl mt-4">Image Coming Soon...</p>
            </div>
          )}

          {isOfferOn && stock <= 0 && (
            <div className="absolute top-4 left-4 bg-red-500 text-white py-2 px-4 rounded-full font-semibold text-sm shadow-lg animate-bounce">
              Sold Out
            </div>
          )}
        </div>

        {/* Info Section */}
        <div className="w-full lg:w-[45%] flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-gray-800">
            {isOfferOn ? (
              <>
                Get <span className="text-primaryColor">{discountPercentValue}% Off</span> on <br />
                <span className="capitalize">{title}</span>
              </>
            ) : (
              <>A Massive Deal is Coming Soon!</>
            )}
          </h2>

          <div className="bg-primaryColor text-white p-4 rounded flex justify-around max-w-md">
            {['days', 'hours', 'mins', 'secs'].map((label, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-bold">{periodToLastDayOfTheMonth[label]}</p>
                <p className="text-sm uppercase tracking-wide">{label}</p>
              </div>
            ))}
          </div>

          <div className="text-lg space-y-3">
            <p>
              <strong className="text-gray-800">Price:</strong>{" "}
              {isOfferOn ? (
                <>
                  <span className="text-green-600 text-xl font-bold mr-2">${discountedPrice.toFixed(2)}</span>
                  <span className="line-through text-gray-400">${price.toFixed(2)}</span>
                </>
              ) : (
                <span className="text-gray-500">???</span>
              )}
            </p>

            <p>
              <strong className="text-gray-800">Availability:</strong>{" "}
              {isOfferOn ? (
                <span className="text-primaryColor font-semibold">
                  {stock > 0 ? `${stock} left in stock` : "Out of stock"}
                </span>
              ) : (
                <span className="text-gray-500">???</span>
              )}
            </p>
          </div>

          {isOfferOn && stock > 0 && (
            <button className="flex items-center gap-2 bg-primaryColor text-white px-6 py-3 rounded-md shadow hover:bg-primaryDark transition duration-300 max-w-max">
              <span>Buy Now</span>
              <BsArrowRight className="text-lg" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
