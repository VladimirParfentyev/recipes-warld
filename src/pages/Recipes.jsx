import {getAllCategories} from '../API/PostService';
import React, {useEffect, useState} from 'react';
import {useFetching} from "../hooks/useFetching";
import Loader from '../components/UI/Loader/Loader'
import CategoryList from '../components/CategoryList'

const Recipes = () => {

    const [categories,setCategories]=useState([])

    const [fetchCategories, isPostsLoading, postError] = useFetching(async () => {
        const response = await getAllCategories();
        setCategories(response.data.categories)
    })
    useEffect(() => {
        fetchCategories()       
    }, [])

    return (
        <div className='container mt-5'>
            {postError &&
                <h1>Произошла ошибка ${postError}</h1>
            }
            {isPostsLoading &&
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
            }
            <CategoryList categories={categories} isPostsLoading={isPostsLoading}/>
        </div>
    )
}

export default Recipes