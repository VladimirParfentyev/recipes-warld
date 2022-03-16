import React from 'react'
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Loader from "../components/UI/Loader/Loader";
import {useFetching} from "../hooks/useFetching";
import {getOneRecipe} from "../API/PostService";
import CategoryName from './CategoryName';

const RecipeItem = () => {
    const params = useParams();
    const [recipe,
        setRecipes] = useState('');

    const [fetchRecipes,
        isPostsLoading,
        postError] = useFetching(async() => {
        const response = await getOneRecipe(params.id);
        setRecipes(response.data.meals[0])
    })

    useEffect(() => {
        fetchRecipes()
    }, [params.id])

    return (
        <div className='container'>
            {postError && <h1>Произошла ошибка ${postError}</h1>
}
            {isPostsLoading && <div
                style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: 50
            }}><Loader/></div>
}
            <CategoryName/>
            <div className="row mt-3 shadow p-3 mb-5 bg-body rounded">
                <div className="col-md-4 mt-5 ">
                    <figure className='shadow-sm p-3 mb-5 bg-body rounded'>
                    <img className="img-fluid rounded-start" src={recipe.strMealThumb} alt=""/>
                    {recipe.strArea !== 'Unknown' && 
                        <figcaption className="text-muted mt-2 text-center">
                            Area: {recipe.strArea}
                        </figcaption>}
                        </figure>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title text-center">{recipe.strMeal}</h5>
                        <p>Category: {recipe.strCategory}</p>
                        
                        <p className="card-text">{recipe.strInstructions}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default RecipeItem