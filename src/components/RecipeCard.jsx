import React from 'react'
import MyButton from './UI/button/MyButton'
import {useNavigate} from 'react-router-dom';

const RecipeCard = ({recipe}) => {
    const router = useNavigate()
    return (
        <div className="col-12 col-md-4 col-lg-3 col-sm-6">
            <div className="card h-100 border-primary mb-3 text-center">
                <img className="card-img-top" src={recipe.strMealThumb} alt=""/>
                <div className="card-body p-1 m-1">
                    <h5 className="card-title m-0">
                        {recipe.strMeal}
                    </h5>
                </div>
                <MyButton
                    className='btn btn-primary'
                    onClick={() => router(`/recipe/${recipe.idMeal}`)}>
                    View recipe
                </MyButton>
            </div>
        </div>
    )
}

export default RecipeCard