// import React from "react";
// import heroImg from "../../assets/heroBg.jpg";
// import { useNavigate } from "react-router-dom";

// export const HeroSection = () => {
//   const navigate = useNavigate();
//   return (
//     <>
//       <div
//         style={{ backgroundImage: `url(${heroImg})` }}
//         className="w-[100%] bg-neutralColor h-[300px] tablet:h-[400px] md:h-[452px] lg:h-[560px] xl:h-[652px] 2xl:h-[800px]  bg-cover bg-no-repeat bg-center top-0 relative flex justify-center items-center"
//       >
//         <div className="overlay absolute top-0 left-0 right-0 w-[100%] h-[100%] bg-opacity-50 bg-[#000000]"></div>
//         <div className="justify-center items-center w-[90%] mx-auto flex max-w-[500px] relative tablet  flex-col gap-3 tablet:gap-4 h-[100%] text-white md:gap-5 ">
//           <h2 className="text-[32px] tablet:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[56px] font-bold text-center">
//             Design Your Spaces, <br /> Your Way
//           </h2>
//           <p className="text-center lg:text-lg ">
//             Upgrade your home and offices with our curated selection of furniture and decor
//           </p>
//           <button
//             className=" lg:w-[11.1rem] lg:h-[72px] w-[9.4rem] h-[52px] md:h-[56px] font-medium lg:font-bold border-[2px] lg:border-[3px] hover:text-white hover:bg-primaryColor hover:border-transparent hover:font-normal transition-colors duration-500 ease-in-out border-primaryColor text-primaryColor px-2"
//             onClick={() => navigate("/shop")}
//           >
//             Shop now
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };
import React from "react";
import heroImg from "../../assets/heroBg.jpg";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative w-full h-[300px] tablet:h-[400px] md:h-[452px] lg:h-[560px] xl:h-[652px] 2xl:h-[800px] bg-center bg-cover bg-no-repeat flex justify-center items-center"
      style={{ backgroundImage: `url(${heroImg})` }}
      aria-label="Hero section with promotional message"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-[500px] w-[90%] mx-auto flex flex-col items-center gap-4 tablet:gap-6 text-white text-center px-2">
        <h1 className="text-[28px] tablet:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[56px] font-extrabold leading-tight drop-shadow-md">
          Design Your Spaces, <br /> Your Way
        </h1>

        <p className="text-sm tablet:text-base lg:text-lg font-medium max-w-[420px] drop-shadow-md">
          Upgrade your home and offices with our curated selection of furniture and decor
        </p>

        <button
          onClick={() => navigate("/shop")}
          className="mt-4 lg:mt-6 px-8 py-3 md:py-4 text-primaryColor border-2 border-primaryColor rounded-md font-semibold text-base md:text-lg
            hover:bg-primaryColor hover:text-white hover:border-transparent
            transition duration-300 ease-in-out
            transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primaryColor/50"
          aria-label="Navigate to shop page"
        >
          Shop now
        </button>
      </div>
    </section>
  );
};

