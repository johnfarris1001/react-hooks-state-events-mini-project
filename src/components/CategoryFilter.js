import React from "react";

function CategoryFilter({ categories, categoryClick, selectedCategory }) {
  const categoryList = categories.map(category => {
    if (category === selectedCategory) {
      return <button className="selected" onClick={categoryClick} key={category}>{category}</button>
    }
    return <button onClick={categoryClick} key={category}>{category}</button>
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryList}
    </div>
  );
}

export default CategoryFilter;
