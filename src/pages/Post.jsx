import { useEffect, useState } from "react";
import PostForms from "../components/PostForms";
import PostList from "../components/PostList";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import '../styles/App.css'
import { usePost } from "../hooks/usePosts";
import {getAll} from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import { getPageCount, getPagesArray } from "../utils/page";

function Posts() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort:'', querry:''});
  const [modal, setModal] = useState(false);
  const sortedAndSerchedPosts = usePost(posts, filter.sort, filter.querry);
  const [isPostsLoading, setIsPostsLoading] = useState(false)
  const [totalPage, setTotalPage] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)

  let pagesArray = getPagesArray(totalPage)

  const changePage = (page) =>{
    setPage(page)
  }

  const createPost = (newPost)=>{
    setPosts([...posts, newPost])
    setModal(false)
  }

  async function fetchPosts(){
    setIsPostsLoading(true)
    const response = await getAll(limit, page);
    setPosts(response.data)
    const totalCount = (response.headers['x-total-count'])
    setTotalPage(getPageCount(totalCount, limit))
    setIsPostsLoading(false)
  }

  useEffect(()=>{
    fetchPosts()
    }, [page]
  )

  const removePost = (post)=>{
    setPosts(posts.filter(
      p=>p.id !== post.id
    ))
  }

  return (
    <div className="App">
      <MyButton onClick={()=>setModal(true)}>
        create post
      </MyButton>
      <MyModal
        visible = {modal}
        setVisible = {setModal}
      >
        <PostForms create ={createPost}/>
      </MyModal>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {isPostsLoading
        ?<Loader/>
        :<PostList removePost = {removePost} posts={sortedAndSerchedPosts} title='Title list'/>      
      }
      <div className="page__wrapper">
        {pagesArray.map(p=>
          <span
            onClick={()=>changePage(p)}
            key={p}
            className={page===p? 'page page__current' : 'page'}
          >{p}
          </span>)}
      </div>
    </div>
  );
}

export default Posts;
