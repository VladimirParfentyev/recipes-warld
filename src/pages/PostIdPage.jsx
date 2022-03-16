import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useFetching} from "../hooks/useFetching";
import {getCommentsByPostId, getById} from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await getById(id)
        setPost(response.data);
    })
    
    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await getCommentsByPostId(id)
        setComments(response.data);
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    return (
        <div className='container'>
            {isLoading
                ? <Loader/>
                :  <div className='mb-5 mt-5'>
                        <h3 className='text-center'>{post.title}</h3> 
                        <h6>{post.body}</h6>
                    </div>
            }
            <h6>
                Comments
            </h6>
            {isComLoading
                ? <Loader/>
                : <div >
                    {comments.map(comm =>
                        <div className='mt-2 border' key={comm.id}>
                            <p>{comm.name}</p>
                            <p>{comm.body}</p>
                            <p className='text-end'>{comm.email}</p>
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

export default PostIdPage;
