import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { deletePostByID, getAllPosts } from './Axios';

import './Main.css'

import Post from './Post'

export default function Main(props) {
    let history = useHistory();

    const [postList, setPostList] = useState([]);

    const fetchPosts = () => {
        getAllPosts().then(res => {
            setPostList(res.data);
        }).catch(error => {
            setPostList([]);
        })
    }

    const deletePost = (index) => {
        let newPostList = [...postList];
        newPostList.splice(index, 1);
        setPostList(newPostList);
        deletePostByID(postList[index]._id);
    }

    const editPost = (index) => {
        props.setEditPost(postList[index]);
        history.push('/post-creator');
    }

    const redirectPostCreator = () => history.push('/post-creator');

    useEffect(() => {
        props.setEditPost(null);
        fetchPosts();
    }, [props]);

    return (
        <div className='main-container'>
            <h1 className='main-header'>DANH SÁCH BÀI ĐĂNG</h1>
            <button id='post-director' onClick={() => redirectPostCreator()}>Đăng bài</button>
            <div>
                {postList.map((post, index) =>
                    <Post
                        key={index.toString()}
                        index={index}
                        creator={post.creator}
                        imageLink={post.imageLink}
                        content={post.content}
                        jobList={post.jobList}
                        deletePost={deletePost}
                        editPost={editPost} />
                ).reverse()}
            </div>
        </div>
    )
}

