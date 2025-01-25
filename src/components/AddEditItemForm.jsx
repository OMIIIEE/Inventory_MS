import React, { useState, useEffect } from "react";

const AddEditItemForm = ({ onSubmit, itemToEdit, onCancel }) => {
  const [form, setForm] = useState({
    name: "",
    category: "",
    quantity: "",
    price: "",
  });

  // Populate form with existing item data if available
  useEffect(() => {
    if (itemToEdit) {
      setForm({
        name: itemToEdit.name,
        category: itemToEdit.category,
        quantity: itemToEdit.quantity,
        price: itemToEdit.price,
      });
    }
  }, [itemToEdit]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.category || !form.quantity || !form.price) return;
    onSubmit({
      ...form,
      quantity: parseInt(form.quantity, 10),
      price: parseFloat(form.price),
    });
    setForm({ name: "", category: "", quantity: "", price: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow ">
      <div className="grid gap-4 grid-cols-4">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Item Name"
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Category"
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="quantity"
          value={form.quantity}
          onChange={handleChange}
          placeholder="Quantity"
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price ($)"
          className="border p-2 rounded"
          step="0.01"
          min="0"
        />
        <div className="col-span-4 flex justify-between">
          {itemToEdit ? (
            <>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Update Item
              </button>
              <button
                type="button"
                onClick={onCancel}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Add Item
            </button>
          )}
        </div>
      </div>
    </form>
  );
};

export default AddEditItemForm;
