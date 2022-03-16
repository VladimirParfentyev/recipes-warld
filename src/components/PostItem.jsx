import React from 'react';
import MyButton from "./UI/button/MyButton";
import {useNavigate} from 'react-router-dom';

const PostItem = ({post}) => {
    const router = useNavigate()

    return (
        <div className="row flex-column border-top border-primary mt-3">
            <div className="col ">
                <h2>{post.title}</h2>
                <p>
                    {post.body.slice(0,100)}...
                </p>
            </div>
            <div className="col d-flex justify-content-end ">
                <MyButton type="button" className="btn btn-primary me-3"onClick={() => router(`/posts/${post.id}`)}>
                    Открыть
                </MyButton>
            </div>
        </div>
    );
};

export default PostItem;
