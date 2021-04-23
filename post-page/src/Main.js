import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { deletePostByID, getAllPosts } from './Axios';

import './Main.css'

import Post from './Post'

export default function Main(props) {
    let history = useHistory();
    const userName = props.userName;
    const [postList, setPostList] = useState([]);

    const fetchPosts = async () => {
        try {
            const postList = await getAllPosts();
            setPostList(postList.data)
        } catch (error) {
            setPostList([])
        }
    }

    const deletePost = (index) => {
        let newPostList = [...postList];
        newPostList.splice(index, 1);
        setPostList(newPostList);
        deletePostByID(postList[index]._id);
    }

    const editPost = (index) => {
        history.push(`/post-editor/${postList[index]._id}`);
    }

    const redirectSignIn = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('currentUser');
        props.setToken('')
    }
    const redirectPostCreator = () => history.push('/post-creator');

    useEffect(() => {
        fetchPosts();
    }, [props]);

    return (
        <div className='main-container'>
            <h1 className='main-header'>DANH SÁCH BÀI ĐĂNG</h1>
            <h3>Hi, {userName}</h3>
            <div className="main-btns">
                <button id='post-director' onClick={redirectPostCreator}>Đăng bài</button>
                <button id='logout-btn' onClick={redirectSignIn}>Log Out</button>
            </div>
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

