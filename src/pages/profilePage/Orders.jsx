// export const Orders = () => {
//   return <h2>My Orders</h2>;
// };
import React from "react";

export const Orders = () => {
  // Placeholder orders array, replace with real data fetching logic
  const orders = []; // e.g., fetch from API or redux store

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8 text-center">My Orders</h2>

      {orders.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          You have no orders yet.
        </p>
      ) : (
        <ul className="flex flex-col gap-4">
          {orders.map((order) => (
            <li key={order.id} className="border rounded p-4 shadow-sm">
              <p><strong>Order ID:</strong> {order.id}</p>
              <p><strong>Date:</strong> {order.date}</p>
              <p><strong>Status:</strong> {order.status}</p>
              {/* Add more order details here */}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};
