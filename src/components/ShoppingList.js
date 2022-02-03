import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [ search, onSearchChange] = useState("");
  
  const itemsToDisplay = items.filter(item => 
    (selectedCategory === "All") ? true : (item.category === selectedCategory)); //arr of items according to filter option

  const searchItemsToDisplay = itemsToDisplay.filter(item => item.name.includes(search)); // arr of items according to filter option and search field
  const showItem = searchItemsToDisplay.map(item => <Item key={item.id} {...item} />);

  function handleCategoryChange(event) {
    setSelectedCategory(selectedCategory => event.target.value);
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit = {onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} search = {search} onSearchChange = {onSearchChange}/>
      <ul className="Items">
        {showItem}
      </ul>
    </div>
  );
}

export default ShoppingList;
