// import { FaTrash } from "react-icons/fa";
// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { handleCartModification } from "../../utils/handleCartModification";
// import { setCart } from "../../features/wishlistAndCartSlice";
// import { useNavigate } from "react-router-dom";

// export const SingleProductSection = ({ cartData, setIsCartSectionActive }) => {
//   const { title, price, discountPercentValue, image, _id, stock } = cartData;
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const { cart } = useSelector((state) => state.wishlistAndCartSection);
//   const [productQuantityInCart, setProductQuantityInCart] = useState(1);

//   // on load of the app set quantity to persisted quantity
//   useEffect(() => {
//     for (let key of cart) {
//       if (key._id === '_id') {
//         setProductQuantityInCart(key.quantity);
//       }
//     }
//   }, [cart]);

//   // on quantity change
//   useEffect(() => {
//     let newCart = [...cart];

//     for (let key of newCart) {
//       if (key._id === _id) {
//         // the keys of newCart are still immutable so i modified the obj[index] instead of using key directly as it is still a reference to another obj due to shallow copy.i removed structuredClone due to it having few supported device
//         const index = newCart.indexOf(key);
//         newCart[index] = { ...key, quantity: parseInt(productQuantityInCart) };
//       }
//     }
//     dispatch(setCart(newCart));
//   }, [productQuantityInCart]);

//   // get the discount percent value if present so as to display it
//   let discountedPrice = price - (price * discountPercentValue) / 100;

//   return (
//     <div className="flex gap-4 border-b-[1px] border-LightSecondaryColor pb-4">
//       <div
//         className="w-[40%] h-[120px] tablet:h-[160px] md:h-[160px] bg-neutralColor relative cursor-pointer product-img-container flex justify-center items-center"
//         onClick={() => {
//           navigate(`/product/${_id}`);
//           setIsCartSectionActive(false);
//         }}
//       >
//         <img src={image} alt="" className="rounded-sm w-[100%]  object-contain h-auto max-h-[90%] max-w-[90%]" />
//       </div>
//       <div className="flex flex-col gap-3 w-[45%] text-base">
//         <h2 className="  md:text-[18px] font-normal font-RobotoSlab capitalize">{title}</h2>
//         {discountPercentValue > 0 ? (
//           <div className="flex gap-3">
//             <h3 className="font-bold   md:text-[18px] tracking-wide">${discountedPrice.toFixed(2)}</h3>
//             <h3 className="font-medium text-[14px] md:text-[16px]  tracking-wide text-lightBlack line-through">
//               ${price.toFixed(2)}
//             </h3>
//           </div>
//         ) : (
//           <h3 className="font-bold   md:text-[18px] tracking-wide ">${price.toFixed(2)}</h3>
//         )}
//         <span className="text-primaryColor font-RobotoCondensed tracking-[0.7px]">
//           {stock < 0 ? "Out of stock" : <strong>{stock}</strong>}
//           {stock >= 0 && " left in stock"}
//         </span>
//         <div className="flex items-center gap-1 cursor-pointer">
//           <FaTrash className="w-4 h-[0.9em] fill-primaryColor" />{" "}
//           <h3
//             className="font-semibold text-primaryColor"
//             onClick={() => handleCartModification(_id, dispatch, null, true)}
//           >
//             Remove
//           </h3>
//         </div>
//       </div>
//       <input
//         className="w-[20%] h-[40px] focus:outline-secondaryColor border-[2px] border-secondaryColor mx-auto rounded-sm text-secondaryColor pl-3"
//         type="number"
//         name=""
//         id=""
//         value={productQuantityInCart}
//         onChange={(e) => setProductQuantityInCart(e.target.value)}
//       />
//     </div>
//   );
// };
import { FaTrash } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleCartModification } from "../../utils/handleCartModification";
import { setCart } from "../../features/wishlistAndCartSlice";
import { useNavigate } from "react-router-dom";

export const SingleProductSection = ({ cartData, setIsCartSectionActive }) => {
  const { title, price, discountPercentValue, image, _id, stock } = cartData;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cart } = useSelector((state) => state.wishlistAndCartSection);
  const [productQuantityInCart, setProductQuantityInCart] = useState(1);

  // Set persisted quantity on load
  useEffect(() => {
    const item = cart.find((item) => item._id === _id);
    if (item) setProductQuantityInCart(item.quantity);
  }, [cart]);

  // Update quantity in global cart
  useEffect(() => {
    const updatedCart = cart.map((item) =>
      item._id === _id ? { ...item, quantity: parseInt(productQuantityInCart) } : item
    );
    dispatch(setCart(updatedCart));
  }, [productQuantityInCart]);

  const discountedPrice = price - (price * discountPercentValue) / 100;

  return (
    <div className="flex flex-col sm:flex-row sm:items-start gap-4 border-b border-gray-200 pb-6 pt-2">
      {/* Product Image */}
      <div
        className="sm:w-[35%] w-full h-[160px] bg-gray-100 rounded-md flex items-center justify-center cursor-pointer"
        onClick={() => {
          navigate(`/product/${_id}`);
          setIsCartSectionActive(false);
        }}
      >
        <img
          src={image}
          alt={title}
          className="max-h-[90%] max-w-[90%] object-contain rounded"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col justify-between flex-1 gap-2">
        <div className="flex justify-between items-start">
          <h2 className="text-base md:text-lg font-medium text-gray-800 capitalize leading-snug max-w-[80%]">
            {title}
          </h2>
          {/* Quantity Input */}
          <input
            type="number"
            className="w-16 h-9 border border-secondaryColor text-center rounded-sm text-secondaryColor focus:outline-none focus:ring-1 focus:ring-secondaryColor"
            value={productQuantityInCart}
            min={1}
            max={stock}
            onChange={(e) => setProductQuantityInCart(e.target.value)}
          />
        </div>

        {/* Price Section */}
        <div className="flex items-center gap-3">
          {discountPercentValue > 0 ? (
            <>
              <span className="text-primaryColor font-semibold text-[1rem]">
                ${discountedPrice.toFixed(2)}
              </span>
              <span className="line-through text-sm text-gray-500">
                ${price.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="text-gray-800 font-semibold text-[1rem]">
              ${price.toFixed(2)}
            </span>
          )}
        </div>

        {/* Stock Info */}
        <span className={`text-sm ${stock <= 0 ? "text-red-500" : "text-green-600"}`}>
          {stock <= 0 ? "Out of stock" : `${stock} left in stock`}
        </span>

        {/* Remove Button */}
        <div
          className="flex items-center gap-2 text-sm font-medium text-primaryColor cursor-pointer hover:underline mt-1"
          onClick={() => handleCartModification(_id, dispatch, null, true)}
        >
          <FaTrash className="w-4 h-4" />
          <span>Remove</span>
        </div>
      </div>
    </div>
  );
};

