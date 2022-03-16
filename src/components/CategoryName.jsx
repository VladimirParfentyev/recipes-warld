import React, {useState, useEffect} from 'react'
import MyButton from './UI/button/MyButton'
import {getAllCategories} from '../API/PostService'
import { useFetching } from '../hooks/useFetching'
import { useNavigate } from 'react-router-dom'


const CategoryName = ({categories}) => {
    const router = useNavigate()
    const [categoriesName, setCategoriesName] =useState([])

    const [fetchCategories] = useFetching(async () => {
        const response = await getAllCategories();
        setCategoriesName(response.data.categories)
    })
    
    useEffect(() => {
        fetchCategories()       
    }, [])

  return (
    <>
        {categoriesName.map(cat=>
            <MyButton
                role="button"
                type="button"
                className="btn btn-outline-primary btn-sm m-1"
                key={cat.idCategory}
                onClick={()=>router(`/category/${cat.strCategory}`)}
            >
                {cat.strCategory}
            </MyButton>)
        }
    </>
  )
}

export default CategoryName