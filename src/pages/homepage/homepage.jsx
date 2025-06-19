// import { HeroSection } from "./heroSection";
// import { WhyChooseUsSection } from "./whyChooseUsSection";
// import ProductsSection from "./productsSection";
// import { useLocation } from "react-router-dom";
// import FooterSection from "../../components/footerSection";

// const Homepage = () => {
//   const location = useLocation();

//   return (
//     <>
//       <HeroSection />
//       <WhyChooseUsSection />
//       <ProductsSection />
//       <FooterSection />
//     </>
//   );
// };
// export default Homepage;
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { HeroSection } from "./heroSection";
import { WhyChooseUsSection } from "./whyChooseUsSection";
import ProductsSection from "./productsSection";
import FooterSection from "../../components/footerSection";

const Homepage = () => {
  const location = useLocation();

  // Scroll to top on route change for better UX
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <>
      <main>
        <HeroSection />
        <WhyChooseUsSection />
        <ProductsSection />
      </main>
      <FooterSection />
    </>
  );
};

export default Homepage;
