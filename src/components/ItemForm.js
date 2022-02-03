import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [ formData, setFormData ] = useState({
    name: '',
    category: '',
  });

  function handleChange (e) {
    const key = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [key]: value
    });
  }

  function handlerSubmit (e) {
    e.preventDefault();
    onItemFormSubmit({
      id: uuid(),
      ...formData,
    });
  }

  return (
    <form className="NewItem" onSubmit={handlerSubmit}>
      <label>
        Name: 
        <input type="text" name="name" value={formData.name} onChange={handleChange}/>
      </label>

      <label>
        Category:
        <select name="category" value = {formData.category} onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
