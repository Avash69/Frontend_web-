// import { store } from "../store";
// import { setCart } from "../features/wishlistAndCartSlice";
// import { toast } from "react-toastify";

// export const handleCartModification = (_id, dispatch, productQuantity, isObjInCart) => {
//   const { allProductsData } = store.getState().productsData;
//   const { cart } = store.getState().wishlistAndCartSection;

//   let newCart;
//   // if the product is in the cart and productQuantity param  is true-it means u wanna add more while if it doesnt u wanna remove all.
//   //  if the product is not in the cart  and productQuantity param  is true- it means u wanna add the specified quantity while if it isnt,it means u wanna add 1
//   switch (isObjInCart) {
//     case true:
//       if (!productQuantity) {
//         const filteredCart = cart.filter((productsData) => productsData._id !== _id);
//         newCart = [...filteredCart];
//         toast("Product has been removed from cart", {
//           type: "success",
//           autoClose: 2000,
//         });
//       } else if (productQuantity) {
//         // ON QUANTITY CHANGE
//         newCart = [...cart];

//         for (let key of newCart) {
//           if (key._id === _id) {
//             const index = newCart.indexOf(key);
//             newCart[index] = { ...key, quantity: newCart[index].quantity + parseInt(productQuantity) };
//           }
//         }
//         toast("Product has been added to cart", {
//           type: "success",
//           autoClose: 2000,
//         });
//       }
//       break;

//     case false:
//       if (!productQuantity) {
//         let currentCartedProduct = allProductsData.find((productsData) => productsData._id === _id);

//         currentCartedProduct = {
//           ...currentCartedProduct,
//           quantity: 1,
//         };
//         newCart = [...cart, currentCartedProduct];

//         toast("Product has been added to cart", {
//           type: "success",
//           autoClose: 2000,
//         });
//       } else if (productQuantity) {
//         let currentCartedProduct = allProductsData.find((productsData) => productsData._id === _id);

//         currentCartedProduct = {
//           ...currentCartedProduct,
//           quantity: parseInt(productQuantity),
//         };
//         newCart = [...cart, currentCartedProduct];

//         toast("Product has been added to cart", {
//           type: "success",
//           autoClose: 2000,
//         });
//       }

//       break;
//     default:
//       break;
//   }

//   dispatch(setCart(newCart));
// };
import { store } from "../store";
import { setCart } from "../features/wishlistAndCartSlice";
import { toast } from "react-toastify";

export const handleCartModification = (_id, dispatch, productQuantity, isObjInCart) => {
  const { allProductsData } = store.getState().productsData;
  const { cart } = store.getState().wishlistAndCartSection;

  let newCart = [...cart];
  const quantity = parseInt(productQuantity) || 1;

  // Case: Product is already in cart
  if (isObjInCart) {
    if (!productQuantity) {
      // Remove item from cart
      newCart = newCart.filter((item) => item._id !== _id);
      toast("Product has been removed from cart", {
        type: "success",
        autoClose: 2000,
      });
    } else {
      // Increase quantity
      newCart = newCart.map((item) =>
        item._id === _id ? { ...item, quantity: item.quantity + quantity } : item
      );
      toast("Product quantity updated in cart", {
        type: "success",
        autoClose: 2000,
      });
    }
  }

  // Case: Product is not in cart
  else {
    const product = allProductsData.find((item) => item._id === _id);

    if (!product) {
      toast("Product not found", {
        type: "error",
        autoClose: 2000,
      });
      return;
    }

    newCart.push({ ...product, quantity });
    toast("Product has been added to cart", {
      type: "success",
      autoClose: 2000,
    });
  }

  dispatch(setCart(newCart));
};
