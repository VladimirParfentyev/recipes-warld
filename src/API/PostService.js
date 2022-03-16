import axios from "axios";


    const getAll= async (limit = 10, page = 1)=> {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        })
        return response;
    }

     const getById =async (id)=> {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        return response;
    }

     const getCommentsByPostId =async (id) =>{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return response;
    }

    const getAllCategories = async () => {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        return response;
    };
    // получить рецепты категории
    const getCategoryRecipes = async (name) => {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + name);
        return response;
    };
    // получить один рецепт по id
    const getOneRecipe = async (id) => {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id);
        return response;
    };
    
    const getFoundRandom = async (seacrh) => {
        seacrh = encodeURIComponent(seacrh);
        const response = axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
        return response;
    }

export {getAll, getById, getCommentsByPostId, getAllCategories, getCategoryRecipes, getOneRecipe, getFoundRandom}
