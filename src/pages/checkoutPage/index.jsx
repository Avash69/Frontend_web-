// import { IoIosArrowBack } from "react-icons/io";
// import { useNavigate } from "react-router-dom";
// import { CheckoutForm } from "./checkoutForm";
// import { OrderSummary } from "./orderSummary";
// import { useSelector, useDispatch } from "react-redux";
// import { useEffect, useState } from "react";
// import { isTokenValidBeforeHeadingToRoute } from "../../utils/isTokenValidBeforeHeadingToARoute";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { FullpageSpinnerLoader } from "../../components/loaders/spinnerIcon";

// export const CheckoutPage = ({ setIsCartSectionActive }) => {
//   const { cart } = useSelector((state) => state.wishlistAndCartSection);

//   const {
//     isTokenValidLoader,
//     userData: { email, username, country, city, address, postalCode, shippingMethod },
//   } = useSelector((state) => state.userAuth);

//   const [totalAmountToBePaid, setTotalAmountToBePaid] = useState(0);

//   const [checkoutFormData, setCheckoutFormData] = useState({
//     username: username || "",
//     email: email,
//     country: country || "",
//     city: city || "",
//     address: address || "",
//     postalCode: postalCode || "",
//     shippingMethod: shippingMethod || "",
//   });

//   // on reload, set the data after it has gotten userData from localstorage
//   useEffect(() => {
//     setCheckoutFormData((prevData) => {
//       return { ...prevData, username: username };
//     });
//     setCheckoutFormData((prevData) => {
//       return { ...prevData, email: email };
//     });
//   }, [email, username]);

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (cart.length <= 0) {
//       navigate("/");
//       setIsCartSectionActive(true);
//     }
//   }, [cart.length, navigate, setIsCartSectionActive]);

//   useEffect(() => {
//     isTokenValidBeforeHeadingToRoute(dispatch, navigate);
//   }, [dispatch, navigate]);

//   const orderDetails = {
//     products: cart.map((products) => {
//       return { productId: products._id, quantity: products.quantity };
//     }),
//     username: checkoutFormData.username,
//     address: checkoutFormData.address,
//     email: checkoutFormData.email,
//     country: checkoutFormData.country,
//     city: checkoutFormData.city,
//     postalCode: checkoutFormData.postalCode,
//     shippingMethod: checkoutFormData.shippingMethod,
//     deliveryStatus: "pending",
//     paymentStatus: "pending",
//     totalAmount: totalAmountToBePaid,
//   };

//   const placeOrderFn = async (e) => {
//     const serverUrl = process.env.REACT_APP_SERVER_URL || "http://localhost:5000/";
//     e.preventDefault();
//     try {
//       await axios.post(`${serverUrl}orders/placeOrders`, { orderDetails });

//       toast("Order has successfully been placed,you can check profile page > orders to track order", {
//         type: "error",
//         autoClose: 4000,
//         position: "top-center",
//       });

//       setCheckoutFormData((prevData) => {
//         return {
//           ...prevData,
//           username: "",
//           email: email,
//           country: "",
//           city: "",
//           address: "",
//           postalCode: "",
//           shippingMethod: shippingMethod || "",
//         };
//       });
//     } catch (error) {
//       toast(error.response.data?.message || error.message, {
//         type: error.message,
//         autoClose: false,
//         position: "top-center",
//       });
//     }
//   };

//   if (isTokenValidLoader) {
//     return <FullpageSpinnerLoader />;
//   } else {
//     return (
//       <>
//         <div className="mt-12 w-[100%] h-[54px] bg-neutralColor text-secondaryColor tablet:px-[6%] xl:px-[4%] px-[4%] lg:px-[2%]  flex items-center justify-between font-bold  font-RobotoCondensed lg:col-span-full lg:row-span-1">
//           <div className="flex gap-[4px] items-center text-[15px]">
//             <IoIosArrowBack />
//             <li onClick={() => navigate("/")} className="hover:underline capitalize">
//               Home
//             </li>
//             <IoIosArrowBack />
//             <li onClick={() => navigate("/shop")} className="hover:underline capitalize">
//               Shop
//             </li>
//             <IoIosArrowBack />
//             <span className=" capitalize">Checkout</span>
//           </div>
//         </div>
//         <div className="flex flex-col-reverse lg:flex-row lg:flex lg:w-[96%] xl:w-[92%] lg:mx-auto lg:justify-between mb-20 lg:items-start">
//           <CheckoutForm {...{ placeOrderFn, checkoutFormData, setCheckoutFormData }} />
//           <OrderSummary {...{ setTotalAmountToBePaid }} />
//         </div>
//       </>
//     );
//   }
// };
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { CheckoutForm } from "./checkoutForm";
import { OrderSummary } from "./orderSummary";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { isTokenValidBeforeHeadingToRoute } from "../../utils/isTokenValidBeforeHeadingToARoute";
import axios from "axios";
import { toast } from "react-toastify";
import { FullpageSpinnerLoader } from "../../components/loaders/spinnerIcon";

export const CheckoutPage = ({ setIsCartSectionActive }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cart } = useSelector((state) => state.wishlistAndCartSection);
  const {
    isTokenValidLoader,
    userData: { email, username, country, city, address, postalCode, shippingMethod },
  } = useSelector((state) => state.userAuth);

  const [totalAmountToBePaid, setTotalAmountToBePaid] = useState(0);
  const [checkoutFormData, setCheckoutFormData] = useState({
    username: username || "",
    email: email || "",
    country: country || "",
    city: city || "",
    address: address || "",
    postalCode: postalCode || "",
    shippingMethod: shippingMethod || "",
  });

  // Sync form data when userData changes (e.g., on reload)
  useEffect(() => {
    setCheckoutFormData({
      username: username || "",
      email: email || "",
      country: country || "",
      city: city || "",
      address: address || "",
      postalCode: postalCode || "",
      shippingMethod: shippingMethod || "",
    });
  }, [username, email, country, city, address, postalCode, shippingMethod]);

  // Redirect if cart is empty
  useEffect(() => {
    if (cart.length <= 0) {
      setIsCartSectionActive(true);
      navigate("/");
    }
  }, [cart.length, navigate, setIsCartSectionActive]);

  // Token verification
  useEffect(() => {
    isTokenValidBeforeHeadingToRoute(dispatch, navigate);
  }, [dispatch, navigate]);

  // Prepare order data
  const orderDetails = {
    products: cart.map((product) => ({
      productId: product._id,
      quantity: product.quantity,
    })),
    ...checkoutFormData,
    deliveryStatus: "pending",
    paymentStatus: "pending",
    totalAmount: totalAmountToBePaid,
  };

  // Place order handler
  const placeOrderFn = async (e) => {
    e.preventDefault();
    const serverUrl = process.env.REACT_APP_SERVER_URL || "http://localhost:5000/";

    try {
      await axios.post(`${serverUrl}orders/placeOrders`, { orderDetails });

      toast.success(
        "Order has been placed! Track it from your profile > orders section.",
        { autoClose: 4000, position: "top-center" }
      );

      setCheckoutFormData({
        username: "",
        email: email || "",
        country: "",
        city: "",
        address: "",
        postalCode: "",
        shippingMethod: shippingMethod || "",
      });

    } catch (error) {
      toast(error.response?.data?.message || error.message, {
        type: "error",
        autoClose: 5000,
        position: "top-center",
      });
    }
  };

  if (isTokenValidLoader) {
    return <FullpageSpinnerLoader />;
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="mt-12 w-full h-[54px] bg-neutralColor text-secondaryColor tablet:px-[6%] xl:px-[4%] px-[4%] lg:px-[2%] flex items-center justify-between font-bold font-RobotoCondensed">
        <div className="flex gap-1 items-center text-sm">
          <IoIosArrowBack />
          <li onClick={() => navigate("/")} className="hover:underline cursor-pointer capitalize">
            Home
          </li>
          <IoIosArrowBack />
          <li onClick={() => navigate("/shop")} className="hover:underline cursor-pointer capitalize">
            Shop
          </li>
          <IoIosArrowBack />
          <span className="capitalize">Checkout</span>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col-reverse lg:flex-row w-[96%] xl:w-[92%] mx-auto justify-between mb-20 items-start">
        <CheckoutForm
          placeOrderFn={placeOrderFn}
          checkoutFormData={checkoutFormData}
          setCheckoutFormData={setCheckoutFormData}
        />
        <OrderSummary setTotalAmountToBePaid={setTotalAmountToBePaid} />
      </div>
    </>
  );
};

export default CheckoutPage;
