// import { RiArrowDropDownLine } from "react-icons/ri";
// import { RiArrowDropUpLine } from "react-icons/ri";
// import { useState } from "react";
// import { setPriceRange } from "../../features/filterBySlice";
// import { useDispatch } from "react-redux";
// import { AnimatePresence } from "framer-motion";
// import { motion } from "framer-motion";

// export const PriceRange = ({ setCheckedPriceRangeDOM }) => {
//   const [isPriceSectionOpen, setIsPriceSectionOpen] = useState(true);

//   const dispatch = useDispatch();

//   // LOOP THROUGH THE DESCENDANTS WHILE SKIPPING THE EVENT TARGET AND GET THE CHECKBOXES DOM
//   const handleCheckedPrice = (e) => {
//     const descendants = e.currentTarget.getElementsByTagName("*");
//     for (let i = 0; i < descendants.length; i++) {
//       if (descendants[i] === e.target) {
//         continue;
//       }
//       descendants[i].checked = false;
//     }

//     if (e.target.checked) {
//       dispatch(setPriceRange(e.target.value));
//       setCheckedPriceRangeDOM(e.target);
//     } else {
//       dispatch(setPriceRange(e.target.value));
//     }
//   };

//   return (
//     <article className="flex flex-col md:gap-5 tablet:gap-5 gap-4 w-[100%] mt-4">
//       <div className="flex items-center justify-between">
//         <h3 className="text-lg tablet:text-xl font-bold">Price</h3>
//         {isPriceSectionOpen ? (
//           <RiArrowDropUpLine
//             className=" w-8 h-6 cursor-pointer"
//             onClick={() => setIsPriceSectionOpen(!isPriceSectionOpen)}
//           />
//         ) : (
//           <RiArrowDropDownLine
//             className="w-8 h-6 cursor-pointer"
//             onClick={() => setIsPriceSectionOpen(!isPriceSectionOpen)}
//           />
//         )}
//       </div>
//       <AnimatePresence>
//         {" "}
//         {isPriceSectionOpen && (
//           <motion.div
//             initial={{ height: 0 }}
//             animate={{ height: "auto" }}
//             exit={{ overflowY: "hidden", height: 0, transition: { duration: 0.3, ease: "easeOut" } }}
//             className="flex flex-col gap-2 md:gap-3 tablet:gap-3   text-base tablet:text-lg md:text-lg"
//             onChange={(e) => handleCheckedPrice(e)}
//           >
//             <div className="flex gap-2 items-center">
//               <input type="checkbox" name="priceRange" value="1-10" id="1-10" />
//               <label htmlFor="1-10" className="flex gap-[1px] items-center cursor-pointer">
//                 <span>$1</span>
//                 <span>-</span> <span>$10</span>
//               </label>
//             </div>
//             <div className="flex gap-2 md:gap-3 tablet:gap-3 items-center">
//               <input type="checkbox" name="priceRange" value="11-100" id="11-100" />
//               <label htmlFor="11-100" className="flex gap-[1px] items-center cursor-pointer">
//                 <span>$11</span>
//                 <span>-</span> <span>$100</span>
//               </label>
//             </div>
//             <div className="flex gap-2 md:gap-3 tablet:gap-3 items-center">
//               <input type="checkbox" name="priceRange" value="101-250" id="101-250" />
//               <label htmlFor="101-250" className="flex gap-[1px] items-center cursor-pointer">
//                 <span>$101</span>
//                 <span>-</span> <span>$250</span>
//               </label>
//             </div>
//             <div className="flex gap-2 md:gap-3 tablet:gap-3 items-center">
//               <input type="checkbox" name="priceRange" value="251-" id="251-" />
//               <label htmlFor="251-" className="flex gap-[1px] items-center cursor-pointer">
//                 <span>$251</span>
//                 <span>+</span>
//               </label>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </article>
//   );
// };
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setPriceRange } from "../../features/filterBySlice";
import { AnimatePresence, motion } from "framer-motion";

export const PriceRange = ({ setCheckedPriceRangeDOM }) => {
  const [isPriceSectionOpen, setIsPriceSectionOpen] = useState(true);
  const dispatch = useDispatch();

  const handleCheckedPrice = (e) => {
    const descendants = e.currentTarget.getElementsByTagName("*");

    for (let i = 0; i < descendants.length; i++) {
      if (descendants[i] === e.target) continue;
      if (descendants[i].type === "checkbox") descendants[i].checked = false;
    }

    if (e.target.checked) {
      dispatch(setPriceRange(e.target.value));
      setCheckedPriceRangeDOM(e.target);
    } else {
      dispatch(setPriceRange(null));
    }
  };

  return (
    <article className="flex flex-col gap-4 w-full mt-4">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg md:text-xl font-semibold text-gray-800">Price</h3>
        {isPriceSectionOpen ? (
          <RiArrowDropUpLine
            className="w-7 h-7 text-primaryColor cursor-pointer transition-transform"
            onClick={() => setIsPriceSectionOpen(false)}
          />
        ) : (
          <RiArrowDropDownLine
            className="w-7 h-7 text-gray-500 cursor-pointer transition-transform"
            onClick={() => setIsPriceSectionOpen(true)}
          />
        )}
      </div>

      {/* Collapsible Price Options */}
      <AnimatePresence>
        {isPriceSectionOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex flex-col gap-3 pl-1 text-base text-gray-700"
            onChange={(e) => handleCheckedPrice(e)}
          >
            {[
              { label: "$1 - $10", value: "1-10", id: "1-10" },
              { label: "$11 - $100", value: "11-100", id: "11-100" },
              { label: "$101 - $250", value: "101-250", id: "101-250" },
              { label: "$251+", value: "251-", id: "251-" },
            ].map((price, idx) => (
              <div key={idx} className="flex items-center gap-3 group">
                <input
                  type="checkbox"
                  name="priceRange"
                  value={price.value}
                  id={price.id}
                  className="accent-primaryColor w-4 h-4 cursor-pointer"
                />
                <label htmlFor={price.id} className="cursor-pointer group-hover:text-primaryColor transition-colors">
                  {price.label}
                </label>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};
