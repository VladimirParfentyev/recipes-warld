import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Recipes from "../pages/Recipes";
import RecipeItem from "../components/RecipeItem";
import CategoryItem from "../pages/CategoryItem";

export const publicRoutes = [
    {path: '/about', element: <About/>},
    {path: '/posts', element: <Posts/>},
    {path: '/posts/:id', element: <PostIdPage/>},
    {path: '/recipes', element: <Recipes/>},
    {path: '/recipe/:id', element: <RecipeItem/>},
    {path: 'category/:name', element: <CategoryItem/>},
]
