// import React from "react";
// import { BsArrowRight } from "react-icons/bs";
// import bedroomCategoryBgImg from "../../../assets/bedRoomCategory.jpg";
// import kidsCategoryBgImg from "../../../assets/kidsCategory.jpg";
// import firstOrderCategoryBgImg from "../../../assets/firstOrderCategory.jpg";
// import livingRoomCategoryBgImg from "../../../assets/livingRoomCategory.jpg";
// import { useNavigate } from "react-router-dom";

// export const FeaturedCategories = () => {
//   const navigateShop = useNavigate();

//   const categoriesFaceArr = [
//     { title: "kids", src: kidsCategoryBgImg },
//     { title: "first order deal", src: firstOrderCategoryBgImg },
//     { title: "bedroom", src: bedroomCategoryBgImg },
//     { title: "living room", src: livingRoomCategoryBgImg },
//   ];
//   return (
//     <section className="my-20">
//       <h2 className="text-[36px] text-center mb-10 font-bold mx-4">Featured Categories</h2>
//       <div className="flex flex-col items-center gap-12 md:flex-row md:w-[92%] lg:w-[96%] xl:w-[92%] md:mx-auto md:justify-between md:flex-wrap md:gap-2">
//         {categoriesFaceArr.map((category, index) => {
//           return (
//             <article
//               key={index}
//               className="w-[92%] tablet:w-[88%] md:mx-0 md:w-[100%] mx-auto cursor-pointer basis-[45%]"
//             >
//               <div
//                 style={{ backgroundImage: `url(${category.src})` }}
//                 className="w-[100%]  bg-neutralColor  bg-cover bg-no-repeat bg-center relative category-img-container h-[350px] tablet:h-[400px]"
//               >
//                 <div className="product-img-overlay hidden absolute top-0 left-0 z-50 bg-[#0000005d] w-[100%] h-[100%]"></div>
//                 <button
//                   onClick={() => navigateShop("/shop")}
//                   className="absolute left-[25%] top-[40%] bg-primaryColor text-white hidden cursor-pointer rounded-sm h-[44px] w-[50%] gap-3 justify-center z-[100]  items-center category-shop-link"
//                 >
//                   <span> Shop Now</span>
//                   <BsArrowRight />
//                 </button>
//               </div>
//               <h2 className="text-[24px] mt-3 font-bold capitalize">{category.title}</h2>
//             </article>
//           );
//         })}
//       </div>
//       <div className="flex flex-col w-[100%] mt-20 gap-12">
//         <article className="bg-[#e5e5e5] text-secondaryColor  h-[150px] flex justify-center items-center px-[4%]">
//           <h1 className="font-bold text-[24px] tablet:w-[55%] md:w-[55%] lg:w-[40%] text-center">
//             GET UP TO <span className="text-primaryColor mr-[5px]">95% OFF</span>ON FIRST ORDER DEAL AND FREE SHIPPING{" "}
//           </h1>
//         </article>
//         <article className="bg-[#e5e5e5] text-secondaryColor  h-[150px] flex justify-center items-center px-[4%]">
//           <h1 className="font-bold text-[24px] tablet:w-[55%] md:w-[55%] lg:w-[40%] text-center">
//             GET UP TO <span className="text-primaryColor mr-[5px]">60% OFF</span>ON KIDS CATEGORIES{" "}
//           </h1>
//         </article>
//         <article className="bg-[#e5e5e5] text-secondaryColor  h-[150px] flex justify-center items-center px-[4%]">
//           <h1 className="font-bold tablet:w-[55%] md:w-[55%] text-[24px] lg:w-[40%] text-center">
//             GET UP TO <span className="text-primaryColor mr-[5px]">60% OFF</span>ON SETS CATEGORIES{" "}
//           </h1>
//         </article>
//       </div>
//     </section>
//   );
// };
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import bedroomCategoryBgImg from "../../../assets/bedRoomCategory.jpg";
import kidsCategoryBgImg from "../../../assets/kidsCategory.jpg";
import firstOrderCategoryBgImg from "../../../assets/firstOrderCategory.jpg";
import livingRoomCategoryBgImg from "../../../assets/livingRoomCategory.jpg";
import { useNavigate } from "react-router-dom";

export const FeaturedCategories = () => {
  const navigateShop = useNavigate();

  const categoriesFaceArr = [
    { title: "kids", src: kidsCategoryBgImg },
    { title: "first order deal", src: firstOrderCategoryBgImg },
    { title: "bedroom", src: bedroomCategoryBgImg },
    { title: "living room", src: livingRoomCategoryBgImg },
  ];

  return (
    <section className="my-24 px-4">
      <h2 className="text-3xl md:text-4xl text-center font-extrabold mb-16 text-gray-800">
        Featured Categories
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {categoriesFaceArr.map((category, index) => (
          <article
            key={index}
            className="relative group rounded-xl overflow-hidden shadow-md cursor-pointer"
          >
            <div
              className="h-[350px] bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${category.src})` }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <button
                onClick={() => navigateShop("/shop")}
                className="bg-primaryColor text-white px-6 py-2 rounded-full flex items-center gap-2 font-semibold shadow-lg hover:scale-105 transition"
              >
                Shop Now <BsArrowRight />
              </button>
            </div>

            <h3 className="absolute bottom-5 left-5 text-white text-xl font-bold capitalize drop-shadow-lg">
              {category.title}
            </h3>
          </article>
        ))}
      </div>

      {/* Promo Banners */}
      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <PromoCard
          highlight="95% OFF"
          text="ON FIRST ORDER DEAL AND FREE SHIPPING"
        />
        <PromoCard
          highlight="60% OFF"
          text="ON KIDS CATEGORIES"
        />
        <PromoCard
          highlight="60% OFF"
          text="ON SETS CATEGORIES"
        />
      </div>
    </section>
  );
};

// PromoCard Component
const PromoCard = ({ highlight, text }) => (
  <article className="bg-[#f3f3f3] text-secondaryColor rounded-xl shadow p-6 flex justify-center items-center">
    <h1 className="font-bold text-xl text-center leading-snug md:text-2xl lg:text-[22px] max-w-[90%]">
      GET UP TO{" "}
      <span className="text-primaryColor font-extrabold mr-1">{highlight}</span>
      {text}
    </h1>
  </article>
);
