import React from 'react'
import CategoryCard from './CategoryCard';

const CategoryList = ({categories}) => {
  return (
    <div className="row g-4 ">
      {categories.map(category => <CategoryCard key={category.idCategory} {...category}/>)}
    </div>
  )
}

export default CategoryList   