// import React from "react";

// export const Dashboard = () => {
//   return (
//     <section className="w-[100%] xl:px-[4%] px-[4%] lg:px-[2%] ">
//       <div className="container mx-auto">
//         <div className="flex flex-wrap flex-col tablet:flex-row md:flex-row gap-6">
//           <div className="w-full bg-neutralColor flex justify-between lg:w-[30%] md:w-[45%] xl:w-1/4  rounded-lg shadow-md p-5">
//             <div className="  ">
//               <h3 className="text-lg font-medium">Total Visits</h3>
//               <p className="text-black text-3xl font-medium mt-4">12,345</p>
//             </div>
//             <p className=" text-base self-end text-primaryColor">Across lifetime</p>
//           </div>
//           <div className="w-full bg-neutralColor flex justify-between lg:w-[30%] md:w-[45%] xl:w-1/4  rounded-lg shadow-md p-5">
//             <div className="  ">
//               <h3 className="text-lg font-medium">Orders</h3>
//               <p className="text-black text-3xl font-medium mt-4">567</p>
//             </div>
//             <p className=" text-base self-end text-primaryColor">Across lifetime</p>
//           </div>
//           <div className="w-full bg-neutralColor flex justify-between lg:w-[30%] md:w-[45%] xl:w-1/4  rounded-lg shadow-md p-5">
//             <div className="  ">
//               <h3 className="text-lg font-medium">Sales</h3>
//               <p className="text-black text-3xl font-medium mt-4">$7,890</p>
//             </div>
//             <p className=" text-base self-end text-primaryColor">Across lifetime</p>
//           </div>
//           <div className="w-full bg-neutralColor flex justify-between lg:w-[30%] md:w-[45%] xl:w-1/4  rounded-lg shadow-md p-5">
//             <div className="  ">
//               <h3 className="text-lg font-medium">Registered Users</h3>
//               <p className="text-black text-3xl font-medium mt-4">1,234</p>
//             </div>
//             <p className=" text-base self-end text-primaryColor">Across lifetime</p>
//           </div>
//           <div className="w-full bg-neutralColor flex justify-between lg:w-[30%] md:w-[45%] xl:w-1/4  rounded-lg shadow-md p-5">
//             <div className="  ">
//               <h3 className="text-lg font-medium">Verified Users</h3>
//               <p className="text-black text-3xl font-medium mt-4">678</p>
//             </div>
//             <p className=" text-base self-end text-primaryColor">Across lifetime</p>
//           </div>
//         </div>
//       </div>

//       <div className="my-20">
//         <h2 className="text-black text-lg font-medium mb-4">New Registered Users</h2>
//         <table className="w-full  text-left table-collapse">
//           <thead>
//             <tr>
//               <th className="text-sm font-medium text-gray-600 p-2 bg-gray-100">Name</th>
//               <th className="text-sm font-medium text-gray-600 p-2 bg-gray-100">Email</th>
//               <th className="text-sm font-medium text-gray-600 p-2 bg-gray-100">Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr v-for="user in newRegisteredUsers">
//               <td className="p-2 border-t border-LightSecondaryColor">auf</td>
//               <td className="p-2 border-t border-LightSecondaryColor">akskkskskdsksks</td>
//               <td className="p-2 border-t border-LightSecondaryColor">19-2020202</td>
//             </tr>
//             <tr v-for="user in newRegisteredUsers">
//               <td className="p-2 border-t border-LightSecondaryColor">auf</td>
//               <td className="p-2 border-t border-LightSecondaryColor">akskkskskdsksks</td>
//               <td className="p-2 border-t border-LightSecondaryColor">19-2020202</td>
//             </tr>
//             <tr v-for="user in newRegisteredUsers">
//               <td className="p-2 border-t border-LightSecondaryColor">auf</td>
//               <td className="p-2 border-t border-LightSecondaryColor">akskkskskdsksks</td>
//               <td className="p-2 border-t border-LightSecondaryColor">19-2020202</td>
//             </tr>
//             <tr v-for="user in newRegisteredUsers">
//               <td className="p-2 border-t border-LightSecondaryColor">auf</td>
//               <td className="p-2 border-t border-LightSecondaryColor">akskkskskdsksks</td>
//               <td className="p-2 border-t border-LightSecondaryColor">19-2020202</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </section>
//   );
// };
import React from "react";

export const Dashboard = () => {
  const metrics = [
    { label: "Total Visits", value: "12,345" },
    { label: "Orders", value: "567" },
    { label: "Sales", value: "$7,890" },
    { label: "Registered Users", value: "1,234" },
    { label: "Verified Users", value: "678" },
  ];

  const newRegisteredUsers = [
    { name: "John Doe", email: "john@example.com", date: "2025-06-18" },
    { name: "Jane Smith", email: "jane@example.com", date: "2025-06-17" },
    { name: "Robert Fox", email: "robert@example.com", date: "2025-06-16" },
    { name: "Alice Brown", email: "alice@example.com", date: "2025-06-15" },
  ];

  return (
    <section className="w-full xl:px-[4%] px-4 lg:px-[2%]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-neutralColor rounded-xl shadow-md p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-medium text-gray-700">{metric.label}</h3>
                <p className="text-3xl font-semibold text-black mt-3">{metric.value}</p>
              </div>
              <p className="text-sm text-primaryColor mt-2">Across lifetime</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-xl md:text-2xl font-semibold mb-6">New Registered Users</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse shadow-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left text-sm font-medium text-gray-600 p-3">Name</th>
                <th className="text-left text-sm font-medium text-gray-600 p-3">Email</th>
                <th className="text-left text-sm font-medium text-gray-600 p-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {newRegisteredUsers.map((user, index) => (
                <tr key={index} className="border-b border-LightSecondaryColor hover:bg-gray-50">
                  <td className="p-3 text-sm text-gray-800">{user.name}</td>
                  <td className="p-3 text-sm text-gray-800">{user.email}</td>
                  <td className="p-3 text-sm text-gray-800">{user.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
