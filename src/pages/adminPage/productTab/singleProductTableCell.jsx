// import axios from "axios";
// import { useState } from "react";
// import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
// import { toast } from "react-toastify";
// import { DeleteProductModal } from "./deleteProductModal";
// import { EditAndupdateProductModal } from "./editAndUpdateProductModal";
// import { ProductDetailsModal } from "./productDetailsAdminPage";

// export const SingleProductTableCell = ({ products }) => {
//   const [isDeleteModalOn, setIsDeleteModalOn] = useState(false);
//   const [isEditAndUpdateModalOn, setIsEditAndUpdateModal] = useState(false);
//   const [isProductDetailsModalOn, setIsProductDetailsModalOn] = useState(false);
//   const [productDetails, setProductDetails] = useState({
//     _id: "",
//     title: "",
//     stock: "",
//     price: "",
//     discountPercentValue: "",
//     categories: {
//       "Featured Categories": [],
//       location: [],
//       features: [],
//       others: [],
//     },
//     image: "",
//   });
//   const [isFetchingUpdatedDataLoading, setIsFetchingUpdatedDataLoading] = useState(false);

//   const { _id, stock, title, price } = products;

//   const serverUrl = process.env.REACT_APP_SERVER_URL || "http://localhost:5000";

//   const fetchSpecificProductData = async (_id, setProductDetails, setLoader) => {
//     setLoader(true);
//     try {
//       const {
//         data: { product },
//       } = await axios.get(`${serverUrl}/api/v1/products/getProduct/${_id}`);

//       setLoader(false);
//       setProductDetails(product);
//       return true;
//     } catch (error) {
//       setLoader(false);
//       toast(error.response.data?.message || error.message, {
//         type: "error",
//         autoClose: 3000,
//         position: "top-center",
//       });
//     }
//   };

//   const handleEditAndUpdateClick = async () => {
//     let response = await fetchSpecificProductData(_id, setProductDetails, setIsFetchingUpdatedDataLoading);
//     response && setIsEditAndUpdateModal(true);
//   };

//   const handleShowProductDetails = async () => {
//     let response = await fetchSpecificProductData(_id, setProductDetails, setIsFetchingUpdatedDataLoading);
//     response && setIsProductDetailsModalOn(true);
//   };

//   return (
//     <>
//       <EditAndupdateProductModal
//         {...{
//           isEditAndUpdateModalOn,
//           setIsEditAndUpdateModal,
//           productDetails,
//           setProductDetails,
//           setIsFetchingUpdatedDataLoading,
//           isFetchingUpdatedDataLoading,
//         }}
//       />
//       <DeleteProductModal {...{ isDeleteModalOn, setIsDeleteModalOn, _id }} />
//       <ProductDetailsModal
//         {...{ isProductDetailsModalOn, setIsProductDetailsModalOn, productDetails, isFetchingUpdatedDataLoading }}
//       />
//       <tr className="hover:bg-lightestSecondaryColor cursor-pointer" onClick={handleShowProductDetails}>
//         <td className="p-2  border border-b-0  border-LightSecondaryColor">{_id}</td>
//         <td className="p-2  border border-b-0 border-LightSecondaryColor">{title}</td>
//         <td className="p-2  border border-b-0 border-LightSecondaryColor">{price}</td>
//         <td className="p-2  border border-b-0 border-LightSecondaryColor">{stock}</td>
//         <td className="p-2  border border-b-0 border-LightSecondaryColor  ">
//           <div className="flex items-center justify-center gap-2">
//             {" "}
//             <AiOutlineDelete
//               onClick={() => setIsDeleteModalOn(true)}
//               className="w-5 h-5 cursor-pointer hover:fill-lightPrimaryColor fill-primaryColor"
//             />{" "}
//             <AiOutlineEdit
//               onClick={handleEditAndUpdateClick}
//               className="w-5 h-5 cursor-pointer hover:fill-lightPrimaryColor fill-primaryColor"
//             />
//           </div>
//         </td>
//       </tr>
//     </>
//   );
// };
import axios from "axios";
import { useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { toast } from "react-toastify";
import { DeleteProductModal } from "./deleteProductModal";
import { EditAndupdateProductModal } from "./editAndUpdateProductModal";
import { ProductDetailsModal } from "./productDetailsAdminPage";

export const SingleProductTableCell = ({ products }) => {
  const [isDeleteModalOn, setIsDeleteModalOn] = useState(false);
  const [isEditAndUpdateModalOn, setIsEditAndUpdateModal] = useState(false);
  const [isProductDetailsModalOn, setIsProductDetailsModalOn] = useState(false);
  const [productDetails, setProductDetails] = useState({
    _id: "",
    title: "",
    stock: "",
    price: "",
    discountPercentValue: "",
    categories: {
      "Featured Categories": [],
      location: [],
      features: [],
      others: [],
    },
    image: "",
  });
  const [isFetchingUpdatedDataLoading, setIsFetchingUpdatedDataLoading] = useState(false);

  const { _id, stock, title, price } = products;

  const serverUrl = process.env.REACT_APP_SERVER_URL || "http://localhost:5000";

  const fetchSpecificProductData = async (_id, setProductDetails, setLoader) => {
    setLoader(true);
    try {
      const {
        data: { product },
      } = await axios.get(`${serverUrl}/api/v1/products/getProduct/${_id}`);
      setProductDetails(product);
      return true;
    } catch (error) {
      toast(error.response?.data?.message || error.message, {
        type: "error",
        autoClose: 3000,
        position: "top-center",
      });
    } finally {
      setLoader(false);
    }
  };

  const handleEditAndUpdateClick = async (e) => {
    e.stopPropagation();
    const response = await fetchSpecificProductData(_id, setProductDetails, setIsFetchingUpdatedDataLoading);
    if (response) setIsEditAndUpdateModal(true);
  };

  const handleShowProductDetails = async () => {
    const response = await fetchSpecificProductData(_id, setProductDetails, setIsFetchingUpdatedDataLoading);
    if (response) setIsProductDetailsModalOn(true);
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    setIsDeleteModalOn(true);
  };

  return (
    <>
      <EditAndupdateProductModal
        {...{
          isEditAndUpdateModalOn,
          setIsEditAndUpdateModal,
          productDetails,
          setProductDetails,
          setIsFetchingUpdatedDataLoading,
          isFetchingUpdatedDataLoading,
        }}
      />
      <DeleteProductModal {...{ isDeleteModalOn, setIsDeleteModalOn, _id }} />
      <ProductDetailsModal
        {...{
          isProductDetailsModalOn,
          setIsProductDetailsModalOn,
          productDetails,
          isFetchingUpdatedDataLoading,
        }}
      />

      <tr
        className="hover:bg-lightestSecondaryColor cursor-pointer transition duration-150"
        onClick={handleShowProductDetails}
      >
        <td className="p-3 border border-LightSecondaryColor text-sm">{_id}</td>
        <td className="p-3 border border-LightSecondaryColor text-sm">{title}</td>
        <td className="p-3 border border-LightSecondaryColor text-sm">{price}</td>
        <td className="p-3 border border-LightSecondaryColor text-sm">{stock}</td>
        <td className="p-3 border border-LightSecondaryColor text-center">
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={handleDeleteClick}
              aria-label="Delete Product"
              className="text-primaryColor hover:text-red-500 transition-colors"
            >
              <AiOutlineDelete className="w-5 h-5" />
            </button>
            <button
              onClick={handleEditAndUpdateClick}
              aria-label="Edit Product"
              className="text-primaryColor hover:text-blue-500 transition-colors"
            >
              <AiOutlineEdit className="w-5 h-5" />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};
