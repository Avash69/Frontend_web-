// import React, { useEffect, useState } from "react";
// import { IoAddOutline } from "react-icons/io5";
// import { AddNewProduct } from "./addNewProduct";
// import { SingleProductTableCell } from "./singleProductTableCell";
// import axios from "axios";
// import { PaginationSectionForProductsAdminPage } from "./paginationForProductsAdmin";

// export const ProductManagement = () => {
//   const [isAddNewProductClicked, setIsAddNewProductClicked] = useState(false);
//   const serverUrl = process.env.REACT_APP_SERVER_URL || "http://localhost:5000";

//   const [lowStockProductsParams, setLowStockProductsParams] = useState({
//     lowStockProducts: [],
//     productsLength: 0,
//     pageNo: 1,
//     perPage: 5,
//     isError: false,
//   });
//   const [getLowStockProductsLoader, setLowStockProductsLoader] = useState(false);

//   const [searchParameters, setSearchParameters] = useState({ searchedProductName: "", pageNo: 1, perPage: 5 });
//   const [searchedProductDataAdminPage, setSearchedProductDataAdminPage] = useState({
//     productsSearchedFor: [],
//     productsLength: 0,
//   });
//   const [closeSearchList, setCloseSearchList] = useState(true);
//   const [isSearchLoading, setIsSearchLoading] = useState(false);
//   const { productsSearchedFor, productsLength } = searchedProductDataAdminPage;

//   useEffect(() => {
//     fetchLowStockProducts(lowStockProductsParams);
//   }, []);

//   const fetchLowStockProducts = async (lowStockProductsParams) => {
//     const { pageNo, perPage } = lowStockProductsParams;
//     setLowStockProductsLoader(true);

//     try {
//       const {
//         data: { products, productsLength },
//       } = await axios.get(`${serverUrl}/api/v1/products/sortByLowStockProducts`, {
//         params: {
//           pageNo: pageNo,
//           perPage: perPage,
//         },
//       });

//       setLowStockProductsParams((prevData) => {
//         return { ...prevData, lowStockProducts: products, productsLength };
//       });
//       setLowStockProductsLoader(false);
//     } catch (error) {
//       setLowStockProductsParams((prevData) => {
//         return { ...prevData, isError: true };
//       });
//       setLowStockProductsLoader(false);
//     }
//   };

//   const searchProductFetch = async (searchParameters) => {
//     const { searchedProductName, pageNo, perPage } = searchParameters;
//     setCloseSearchList(false);
//     setIsSearchLoading(true);
//     try {
//       const {
//         data: { product, productsLength },
//       } = await axios.get(`${serverUrl}/api/v1/products/searchProducts`, {
//         params: {
//           title: searchedProductName,
//           pageNo: pageNo,
//           perPage: perPage,
//         },
//       });

//       setSearchedProductDataAdminPage({ productsSearchedFor: product, productsLength });

//       setIsSearchLoading(false);
//       return product;
//     } catch (error) {
//       setSearchedProductDataAdminPage({ productsSearchedFor: [], productsLength: 0 });
//       setIsSearchLoading(false);
//     }
//   };

//   return (
//     <section className="w-[100%] xl:px-[4%] tablet:px-[6%] px-[4%] lg:px-[2%] ">
//       <AddNewProduct {...{ isAddNewProductClicked, setIsAddNewProductClicked }} />
//       <div className="container mx-auto">
//         <div className="flex  rounded-md items-center justify-between bg-neutralColor w-full p-5">
//           <h2 className="text-lg md:text-xl">Add New Product</h2>
//           <IoAddOutline
//             className="w-8 h-8 bg-primaryColor stroke-white cursor-pointer"
//             onClick={() => setIsAddNewProductClicked(true)}
//           />
//         </div>
//       </div>

//       <div className="my-20">
//         <div className="flex justify-between items-start">
//           {" "}
//           <h2 className="text-black text-xl md:text-2xl font-medium mb-4">Products</h2>
//           {!closeSearchList && (
//             <span
//               className="text-[#fca311] font-medium hover:text-lightPrimaryColor cursor-pointer"
//               onClick={() => {
//                 setCloseSearchList(true);
//                 setSearchParameters({ ...searchParameters, searchedProductName: "" });
//               }}
//             >
//               close searchlist
//             </span>
//           )}
//         </div>

//         <div className="flex items-center mb-4">
//           <input
//             type="text"
//             id="search-input"
//             className="shadow appearance-none border rounded rounded-br-none rounded-tr-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             placeholder="Search"
//             value={searchParameters.searchedProductName}
//             onChange={(e) => setSearchParameters({ ...searchParameters, searchedProductName: e.target.value })}
//             required
//           />
//           <button
//             id="search-button"
//             className="bg-[#fca311] text-white rounded-bl-none rounded-tl-none font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             onClick={() => searchProductFetch(searchParameters)}
//           >
//             Search
//           </button>
//         </div>
//         {!closeSearchList && (
//           <>
//             <table className="w-full  text-left table-collapse overflow-x-auto block md:table admin-table-borderBottom">
//               <thead>
//                 <tr>
//                   <th className="text-sm font-medium text-gray-600 p-2 bg-gray-100">Id</th>
//                   <th className="text-sm font-medium text-gray-600 p-2 bg-gray-100">Name</th>
//                   <th className="text-sm font-medium text-gray-600 p-2 bg-gray-100">Price</th>
//                   <th className="text-sm font-medium text-gray-600 p-2 bg-gray-100">Stock</th>
//                   <th className="text-sm font-medium text-gray-600 p-2 bg-gray-100">Modify</th>
//                 </tr>
//               </thead>
//               {/* if search is loading return loading or tbody/not found and  tbody/not found depends on the length of the products array */}
//               {isSearchLoading ? (
//                 <h2>Loading ..</h2>
//               ) : productsLength > 0 ? (
//                 <>
//                   <tbody>
//                     {productsSearchedFor.map((products) => {
//                       return <SingleProductTableCell {...{ products }} key={products._id} />;
//                     })}{" "}
//                   </tbody>
//                 </>
//               ) : (
//                 <span>Products not found</span>
//               )}
//             </table>

//             {productsLength > 0 && (
//               <PaginationSectionForProductsAdminPage
//                 productsLength={productsLength}
//                 asyncFnParamState={searchParameters}
//                 asyncFn={searchProductFetch}
//                 setAsyncFnParamState={setSearchParameters}
//               />
//             )}
//           </>
//         )}
//       </div>

//       <section>
//         <h3 className="text-black text-xl md:text-2xl font-medium mb-6">
//           List of products arranged from order of low stocks to the highest
//         </h3>
//         <table className="w-full  text-left table-collapse overflow-x-auto block md:table admin-table-borderBottom">
//           <thead>
//             <tr>
//               <th className="text-sm font-medium text-gray-600 p-2 bg-gray-100">Id</th>
//               <th className="text-sm font-medium text-gray-600 p-2 bg-gray-100">Name</th>
//               <th className="text-sm font-medium text-gray-600 p-2 bg-gray-100">Price</th>
//               <th className="text-sm font-medium text-gray-600 p-2 bg-gray-100">Stock</th>
//               <th className="text-sm font-medium text-gray-600 p-2 bg-gray-100">Modify</th>
//             </tr>
//           </thead>

//           {getLowStockProductsLoader ? (
//             <h2 className="mt-6 text-lg text-center">Loading ...</h2>
//           ) : lowStockProductsParams.productsLength > 0 ? (
//             <>
//               <tbody>
//                 {lowStockProductsParams.lowStockProducts.map((products) => {
//                   return <SingleProductTableCell {...{ products }} key={products._id} />;
//                 })}
//               </tbody>
//             </>
//           ) : (
//             <h3 className="mt-6 text-lg text-center">
//               {lowStockProductsParams.isError ? (
//                 <span>
//                   Error loading products{" "}
//                   <span
//                     className="text-primaryColor cursor-pointer ml-2 hover:text-lightPrimaryColor"
//                     onClick={() => fetchLowStockProducts(lowStockProductsParams)}
//                   >
//                     {" "}
//                     Retry
//                   </span>
//                 </span>
//               ) : (
//                 "Products not found"
//               )}
//             </h3>
//           )}
//         </table>
//         <>
//           {lowStockProductsParams.productsLength > 0 && (
//             <PaginationSectionForProductsAdminPage
//               productsLength={lowStockProductsParams.productsLength}
//               asyncFnParamState={lowStockProductsParams}
//               asyncFn={fetchLowStockProducts}
//               setAsyncFnParamState={setLowStockProductsParams}
//             />
//           )}
//         </>
//       </section>
//     </section>
//   );
// };
import React, { useEffect, useState, useCallback } from "react";
import { IoAddOutline } from "react-icons/io5";
import { AddNewProduct } from "./addNewProduct";
import { SingleProductTableCell } from "./singleProductTableCell";
import axios from "axios";
import { PaginationSectionForProductsAdminPage } from "./paginationForProductsAdmin";

export const ProductManagement = () => {
  const [isAddNewProductClicked, setIsAddNewProductClicked] = useState(false);
  const serverUrl = process.env.REACT_APP_SERVER_URL || "http://localhost:5000";

  const [lowStockProductsParams, setLowStockProductsParams] = useState({
    lowStockProducts: [],
    productsLength: 0,
    pageNo: 1,
    perPage: 5,
    isError: false,
  });
  const [getLowStockProductsLoader, setLowStockProductsLoader] = useState(false);

  const [searchParameters, setSearchParameters] = useState({
    searchedProductName: "",
    pageNo: 1,
    perPage: 5,
  });
  const [searchedProductDataAdminPage, setSearchedProductDataAdminPage] = useState({
    productsSearchedFor: [],
    productsLength: 0,
  });
  const [closeSearchList, setCloseSearchList] = useState(true);
  const [isSearchLoading, setIsSearchLoading] = useState(false);

  const { productsSearchedFor, productsLength } = searchedProductDataAdminPage;

  // Fetch low stock products
  const fetchLowStockProducts = useCallback(
    async (params) => {
      setLowStockProductsLoader(true);
      try {
        const {
          data: { products, productsLength },
        } = await axios.get(`${serverUrl}/api/v1/products/sortByLowStockProducts`, {
          params: { pageNo: params.pageNo, perPage: params.perPage },
        });

        setLowStockProductsParams((prev) => ({
          ...prev,
          lowStockProducts: products,
          productsLength,
          isError: false,
        }));
      } catch (error) {
        setLowStockProductsParams((prev) => ({
          ...prev,
          isError: true,
        }));
      } finally {
        setLowStockProductsLoader(false);
      }
    },
    [serverUrl]
  );

  useEffect(() => {
    fetchLowStockProducts(lowStockProductsParams);
  }, [fetchLowStockProducts, lowStockProductsParams.pageNo, lowStockProductsParams.perPage]);

  // Search products fetch
  const searchProductFetch = useCallback(
    async (params) => {
      setCloseSearchList(false);
      setIsSearchLoading(true);
      try {
        const {
          data: { product, productsLength },
        } = await axios.get(`${serverUrl}/api/v1/products/searchProducts`, {
          params: {
            title: params.searchedProductName,
            pageNo: params.pageNo,
            perPage: params.perPage,
          },
        });

        setSearchedProductDataAdminPage({
          productsSearchedFor: product,
          productsLength,
        });
      } catch (error) {
        setSearchedProductDataAdminPage({ productsSearchedFor: [], productsLength: 0 });
      } finally {
        setIsSearchLoading(false);
      }
    },
    [serverUrl]
  );

  // Render table rows or placeholders based on state
  const renderTableBody = (products, loading, error, onRetry) => {
    if (loading) {
      return (
        <tr>
          <td colSpan={5} className="text-center py-6 text-gray-500 font-medium">
            Loading...
          </td>
        </tr>
      );
    }

    if (error) {
      return (
        <tr>
          <td colSpan={5} className="text-center py-6 text-red-500 font-medium">
            Error loading products.
            <button
              onClick={onRetry}
              className="ml-3 underline text-primaryColor hover:text-lightPrimaryColor"
            >
              Retry
            </button>
          </td>
        </tr>
      );
    }

    if (!products || products.length === 0) {
      return (
        <tr>
          <td colSpan={5} className="text-center py-6 text-gray-400 font-medium">
            Products not found.
          </td>
        </tr>
      );
    }

    return products.map((product) => (
      <SingleProductTableCell products={product} key={product._id} />
    ));
  };

  return (
    <section className="w-full xl:px-16 tablet:px-12 px-4 lg:px-8">
      {/* Add New Product Modal */}
      <AddNewProduct
        isAddNewProductClicked={isAddNewProductClicked}
        setIsAddNewProductClicked={setIsAddNewProductClicked}
      />

      {/* Add New Product Header */}
      <div className="container mx-auto mb-8">
        <div className="flex items-center justify-between bg-neutralColor rounded-md p-5">
          <h2 className="text-lg md:text-xl font-semibold">Add New Product</h2>
          <IoAddOutline
            className="w-8 h-8 bg-primaryColor stroke-white cursor-pointer rounded hover:bg-darkPrimaryColor transition-colors"
            onClick={() => setIsAddNewProductClicked(true)}
            aria-label="Add new product"
          />
        </div>
      </div>

      {/* Search Section */}
      <div className="mb-20">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-black text-xl md:text-2xl font-medium">Products</h2>
          {!closeSearchList && (
            <button
              type="button"
              className="text-[#fca311] font-medium hover:text-lightPrimaryColor focus:outline-none"
              onClick={() => {
                setCloseSearchList(true);
                setSearchParameters((prev) => ({ ...prev, searchedProductName: "" }));
                setSearchedProductDataAdminPage({ productsSearchedFor: [], productsLength: 0 });
              }}
            >
              Close search list
            </button>
          )}
        </div>

        <div className="flex mb-6">
          <input
            type="text"
            id="search-input"
            className="flex-grow shadow appearance-none border rounded rounded-br-none rounded-tr-none py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Search products..."
            value={searchParameters.searchedProductName}
            onChange={(e) =>
              setSearchParameters((prev) => ({ ...prev, searchedProductName: e.target.value }))
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") searchProductFetch(searchParameters);
            }}
            aria-label="Search products"
          />
          <button
            id="search-button"
            className="bg-[#fca311] text-white rounded-bl-none rounded-tl-none font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-yellow-600 transition-colors"
            onClick={() => searchProductFetch(searchParameters)}
            aria-label="Submit product search"
          >
            Search
          </button>
        </div>

        {!closeSearchList && (
          <>
            <table className="w-full text-left table-collapse border border-gray-200 rounded-md overflow-hidden shadow-sm">
              <caption className="sr-only">Search results for products</caption>
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-sm font-medium text-gray-600 p-2">Id</th>
                  <th className="text-sm font-medium text-gray-600 p-2">Name</th>
                  <th className="text-sm font-medium text-gray-600 p-2">Price</th>
                  <th className="text-sm font-medium text-gray-600 p-2">Stock</th>
                  <th className="text-sm font-medium text-gray-600 p-2">Modify</th>
                </tr>
              </thead>
              <tbody>
                {renderTableBody(
                  productsSearchedFor,
                  isSearchLoading,
                  false, // no error state for search currently
                  () => searchProductFetch(searchParameters)
                )}
              </tbody>
            </table>

            {productsLength > 0 && (
              <PaginationSectionForProductsAdminPage
                productsLength={productsLength}
                asyncFnParamState={searchParameters}
                asyncFn={searchProductFetch}
                setAsyncFnParamState={setSearchParameters}
              />
            )}
          </>
        )}
      </div>

      {/* Low Stock Products Section */}
      <section>
        <h3 className="text-black text-xl md:text-2xl font-medium mb-6">
          Products Sorted by Low Stock
        </h3>
        <table className="w-full text-left table-collapse border border-gray-200 rounded-md overflow-hidden shadow-sm">
          <caption className="sr-only">List of products arranged from low stock to high stock</caption>
          <thead className="bg-gray-100">
            <tr>
              <th className="text-sm font-medium text-gray-600 p-2">Id</th>
              <th className="text-sm font-medium text-gray-600 p-2">Name</th>
              <th className="text-sm font-medium text-gray-600 p-2">Price</th>
              <th className="text-sm font-medium text-gray-600 p-2">Stock</th>
              <th className="text-sm font-medium text-gray-600 p-2">Modify</th>
            </tr>
          </thead>
          <tbody>
            {renderTableBody(
              lowStockProductsParams.lowStockProducts,
              getLowStockProductsLoader,
              lowStockProductsParams.isError,
              () => fetchLowStockProducts(lowStockProductsParams)
            )}
          </tbody>
        </table>

        {lowStockProductsParams.productsLength > 0 && (
          <PaginationSectionForProductsAdminPage
            productsLength={lowStockProductsParams.productsLength}
            asyncFnParamState={lowStockProductsParams}
            asyncFn={fetchLowStockProducts}
            setAsyncFnParamState={setLowStockProductsParams}
          />
        )}
      </section>
    </section>
  );
};
