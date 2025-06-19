// import { AnimatePresence } from "framer-motion";
// import { useState } from "react";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import { RiArrowDropUpLine } from "react-icons/ri";
// import { motion } from "framer-motion";

// export const CategoryLists = ({ categoryTitle, productCategories }) => {
//   const [isCategoryTitleOpen, setIsCategoryTitleOpen] = useState(false);

//   return (
//     <div className="border-b-[1px] border-LightSecondaryColor pb-2">
//       <div className="flex items-center justify-between">
//         <h3 className="text-lg font-medium tablet:text-xl md:text-xl capitalize">{categoryTitle}</h3>
//         {isCategoryTitleOpen ? (
//           <RiArrowDropUpLine
//             className=" w-8 h-6 cursor-pointer"
//             onClick={() => setIsCategoryTitleOpen(!isCategoryTitleOpen)}
//           />
//         ) : (
//           <RiArrowDropDownLine
//             className="w-8 h-6 cursor-pointer"
//             onClick={() => setIsCategoryTitleOpen(!isCategoryTitleOpen)}
//           />
//         )}
//       </div>
//       <AnimatePresence>
//         {isCategoryTitleOpen && (
//           <motion.div
//             initial={{ height: 0 }}
//             animate={{ height: "auto" }}
//             exit={{ overflowY: "hidden", height: 0, transition: { duration: 0.3, ease: "easeOut" } }}
//             className="flex flex-col gap-2 tablet:gap-3 md:gap-3 mt-4"
//           >
//             {productCategories[categoryTitle].map((subCategoryTitle, index) => {
//               return (
//                 <div key={index} className="flex gap-2 tablet:gap-3 md:gap-3 items-center">
//                   <input type="checkbox" name="selectedCategoryTitle" value={subCategoryTitle} id={subCategoryTitle} />
//                   <label htmlFor={subCategoryTitle}>
//                     <h4 className="text-base tablet:text-lg md:text-lg cursor-pointer font-normal">
//                       {subCategoryTitle}
//                     </h4>
//                   </label>
//                 </div>
//               );
//             })}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

export const CategoryLists = ({ categoryTitle, productCategories }) => {
  const [isCategoryTitleOpen, setIsCategoryTitleOpen] = useState(false);

  return (
    <div className="border-b border-LightSecondaryColor pb-3">
      {/* Header */}
      <button
        onClick={() => setIsCategoryTitleOpen((prev) => !prev)}
        className="flex items-center justify-between w-full focus:outline-none"
      >
        <h3 className="text-lg md:text-xl font-semibold capitalize text-gray-800">
          {categoryTitle}
        </h3>
        <span className="text-primaryColor">
          {isCategoryTitleOpen ? (
            <RiArrowDropUpLine className="w-8 h-8 transition-transform duration-200" />
          ) : (
            <RiArrowDropDownLine className="w-8 h-8 transition-transform duration-200" />
          )}
        </span>
      </button>

      {/* Collapsible Subcategory List */}
      <AnimatePresence initial={false}>
        {isCategoryTitleOpen && (
          <motion.div
            key="category-dropdown"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mt-4 flex flex-col gap-3"
          >
            {productCategories[categoryTitle]?.map((subCategoryTitle, index) => (
              <div key={index} className="flex items-center gap-3 group">
                <input
                  type="checkbox"
                  id={subCategoryTitle}
                  value={subCategoryTitle}
                  name="selectedCategoryTitle"
                  className="accent-primaryColor w-4 h-4 rounded focus:ring-2 focus:ring-primaryColor cursor-pointer"
                />
                <label htmlFor={subCategoryTitle} className="cursor-pointer select-none text-gray-700 group-hover:text-primaryColor transition-colors">
                  <h4 className="text-base md:text-lg font-normal">{subCategoryTitle}</h4>
                </label>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
