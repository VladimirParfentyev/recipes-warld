import React from 'react'
import RecipeCard from './RecipeCard'

const RecipeList = ({recipes}) => {
  return (
    <div className="row g-4">
        {recipes&&recipes.map(recipe => <RecipeCard key={recipe.idMeal} recipe={recipe} />)}
</div>
  )
}

export default RecipeList