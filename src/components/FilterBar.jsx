import React from "react";

const FilterBar = ({ filter, setFilter, categories }) => {
  return (
    <div className="mb-6 p-4 bg-white shadow-md rounded-lg flex items-center space-x-4">
      <label className="text-lg font-semibold text-gray-700">Filter by Category:</label>
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out"
      >
        <option value="">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;
