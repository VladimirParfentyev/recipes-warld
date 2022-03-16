import React, {useEffect, useState} from 'react';
import {getAll} from "../API/PostService";
import {usePosts} from "../hooks/usePosts";
import {getPageCount} from "../components/UI/pagination/pages";
import PostFilter from "../components/PostFilter";
import PostList from "../components/PostList";
import Loader from "../components/UI/Loader/Loader";
import {useFetching} from "../hooks/useFetching";
import Pagination from "../components/UI/pagination/Pagination";
import MySelect from "../components/UI/select/MySelect";

function Posts() {
    const [posts,
        setPosts] = useState([])
    const [totalPages,
        setTotalPages] = useState(0);
    const [limit,
        setLimit] = useState(10);
    const [page,
        setPage] = useState(1);
    const [filter,
        setFilter] = useState({sort: '', query: ''});
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    const [fetchPosts,
        isPostsLoading,
        postError] = useFetching(async(limit, page) => {
        const response = await getAll(limit, page);
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit));
    })

    useEffect(() => {
        fetchPosts(limit, page)
    }, [page, limit])


    const changePage = (page) => {
        setPage(page)
    }

    return (
        <div className="container">
            <div className="row my-4">
                <PostFilter filter={filter} setFilter={setFilter}/>
                <div className="col-6 col-md-3">
                    <MySelect
                        value={limit}
                        onChange={value => setLimit(value)}
                        defaultValue="Кол-во элементов на странице"
                        options={[
                        {
                            value: 5,
                            name: '5'
                        }, {
                            value: 10,
                            name: '10'
                        }, {
                            value: 25,
                            name: '25'
                        }, {
                            value: -1,
                            name: 'Показать все'
                        }
                    ]}/>
                </div>
            </div>
            {postError && <h1>Произошла ошибка ${postError}</h1>}
            <PostList
                posts={sortedAndSearchedPosts}
                title="Articles about cooking in different countries"
            /> 
            {isPostsLoading && 
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: 50
                    }}>
                        <Loader/>
                </div>
            }
            <Pagination  page={page} changePage={changePage} totalPages={totalPages}/>
        </div>
    );
}

export default Posts;
