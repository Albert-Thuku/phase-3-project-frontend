import React, { useState } from 'react'


function Categories({ data, onCategorySelect }) {
  const [categoryList, setCategoryList] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)

  data.forEach((destination) => {
    if (!categoryList.includes(destination.category)) {
      setCategoryList([...categoryList, destination.category])
    }
  })

  function handleCategorySelect(category) {
    if (category) {
      onCategorySelect(category)
      setSelectedCategory(category)
    } else {
      onCategorySelect(null)
      setSelectedCategory(null)
    }
  }

  return (
    <div className='categories-container'>
      <button
        onClick={() => handleCategorySelect(null)}
        className={
          selectedCategory === null
            ? 'categories-button active'
            : 'categories-button'
        }
      >
        All
      </button>
      {categoryList.map((category) => (
        <button
          onClick={() => handleCategorySelect(category)}
          key={category}
          className={
            selectedCategory === category
              ? 'categories-button active'
              : 'categories-button'
          }
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default Categories