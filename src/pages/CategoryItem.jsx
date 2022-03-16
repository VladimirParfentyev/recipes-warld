import React from 'react'
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import RecipeList from '../components/RecipeList';
import Loader from "../components/UI/Loader/Loader";
import {useFetching} from "../hooks/useFetching";
import {getCategoryRecipes} from "../API/PostService";
import CategoryName from '../components/CategoryName';

const CategoryItem = () => {
    const params = useParams();
    const [recipes, setRecipes] = useState([]);
    const [fetchRecipes, isPostsLoading, postError] = useFetching(async () => {
        const response = await getCategoryRecipes(params.name);
        setRecipes(response.data.meals)
    })


    useEffect(() => {
        fetchRecipes()
    }, [params.name])


    return (
        <div className='container mt-3'>        
            {postError &&
                <h1>Произошла ошибка ${postError}</h1>
            }
            {isPostsLoading &&
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
            }
            <h1 className="text-uppercase text-center">{params.name}</h1>
            <CategoryName/>
            <RecipeList recipes={recipes}/>      
        </div>
    );
}

export default CategoryItem