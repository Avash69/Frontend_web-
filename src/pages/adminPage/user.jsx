// import React from "react";

// export const UserManagement = () => {
//   return <div>UserManagement</div>;
// };
import React, { useEffect, useState } from "react";
import axios from "axios";

export const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const serverUrl = process.env.REACT_APP_SERVER_URL || "http://localhost:5000";

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get(`${serverUrl}/api/v1/users`);
      setUsers(data?.users || []);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <section className="w-full xl:px-[4%] tablet:px-[6%] px-[4%] lg:px-[2%]">
      <h2 className="text-2xl font-bold mb-6 text-primaryColor">User Management</h2>

      {isLoading ? (
        <p className="text-center text-lg">Loading users...</p>
      ) : isError ? (
        <p className="text-center text-red-500">Failed to load users. Please try again later.</p>
      ) : users.length === 0 ? (
        <p className="text-center text-gray-600">No users found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse border border-gray-200 shadow-sm">
            <thead>
              <tr className="bg-gray-100 text-gray-700 text-sm">
                <th className="p-3 border">Name</th>
                <th className="p-3 border">Email</th>
                <th className="p-3 border">Role</th>
                <th className="p-3 border">Status</th>
                <th className="p-3 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="hover:bg-gray-50 transition">
                  <td className="p-3 border capitalize">{user.name}</td>
                  <td className="p-3 border">{user.email}</td>
                  <td className="p-3 border capitalize">{user.role}</td>
                  <td className="p-3 border">
                    <span className={`px-2 py-1 text-sm rounded ${user.isVerified ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
                      {user.isVerified ? "Verified" : "Unverified"}
                    </span>
                  </td>
                  <td className="p-3 border">
                    <button className="text-blue-600 hover:underline text-sm mr-2">View</button>
                    <button className="text-red-600 hover:underline text-sm">Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};
