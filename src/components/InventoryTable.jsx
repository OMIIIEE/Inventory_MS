import React, { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const InventoryTable = ({ items, onDelete, onEdit }) => {
  const [sortAsc, setSortAsc] = useState(true);

  const sortedItems = [...items].sort((a, b) =>
    sortAsc ? a.quantity - b.quantity : b.quantity - a.quantity
  );

  return (
    <table className="min-w-full table-auto border-collapse border border-gray-300 mt-6">
      <thead>
        <tr>
          <th className="border border-gray-300 p-2 text-[#FDC702]">#</th> {/* New column for numbering */}
          <th className="border border-gray-300 p-2 text-[#FDC702]">Name</th>
          <th className="border border-gray-300 p-2 text-[#FDC702]">Category</th>
          <th className="border border-gray-300 p-2 text-[#FDC702]">Quantity</th>
          <th className="border border-gray-300 p-2 text-[#FDC702]">Price</th>
          <th className="border border-gray-300 p-2 text-[#FDC702]">Status</th>
          <th className="border border-gray-300 p-2 text-[#FDC702]">Actions</th>
        </tr>
      </thead>
      <tbody>
        {sortedItems.map((item, index) => (
          <tr
            key={item.id}
            className={item.quantity < 10 ? "bg-red-100" : "bg-white"} // Highlight rows with quantity < 10
          >
            <td className="border border-gray-300 p-2">{index + 1}</td> {/* Row number */}
            <td className="border border-gray-300 p-2">{item.name}</td>
            <td className="border border-gray-300 p-2">{item.category}</td>
            <td className="border border-gray-300 p-2">{item.quantity}</td>
            <td className="border border-gray-300 p-2">{item.price}</td>
            <td className="border border-gray-300 p-2">
              {item.quantity < 10 ? (
                <span className="text-red-600 font-semibold">Limited Stock</span> // Status text for low quantity
              ) : (
                "In Stock"
              )}
            </td>
            <td className="border border-gray-300 p-2">
              <button
                onClick={() => onEdit(item)}
                className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(item.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InventoryTable;
