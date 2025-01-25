import React, { useState } from "react";
import InventoryTable from "./components/InventoryTable";
import AddEditItemForm from "./components/AddEditItemForm";
import FilterBar from "./components/FilterBar";

import bg from "./assets/backg.jpg"

const App = () => {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemToEdit, setItemToEdit] = useState(null);

  const handleAddEditItem = (item) => {
    if (itemToEdit) {
      setItems(items.map((i) => (i.id === itemToEdit.id ? { ...itemToEdit, ...item } : i)));
    } else {
      setItems([...items, { ...item, id: Date.now() }]);
    }
    setIsModalOpen(false);
    setItemToEdit(null);
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const categories = Array.from(new Set(items.map((item) => item.category)));
  const filteredItems = items.filter((item) =>
    filter ? item.category === filter : true
  );

  const openModal = (item = null) => {
    setItemToEdit(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setItemToEdit(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center" 
    style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center" }} >
      <h1 className="text-4xl font-bold text-center text-[#FDC702] mb-8">
        INVENTORY_PRO - An Inventory Management System
      </h1>

      <div className="w-full max-w-6xl flex justify-between items-center mb-6">
        <button
          onClick={() => openModal()}
          className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300 transform hover:scale-105"
        >
          Add Item
        </button>
        <FilterBar filter={filter} setFilter={setFilter} categories={categories} />
      </div>

      <InventoryTable
        items={filteredItems}
        onDelete={handleDelete}
        onEdit={openModal}
      />

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 text-3xl"
            >
              &times;
            </button>
            <AddEditItemForm
              onSubmit={handleAddEditItem}
              itemToEdit={itemToEdit}
              onCancel={closeModal}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
