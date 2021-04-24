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
        props.setToken('')
    }
    const redirectPostCreator = () => history.push('/post-creator');

    useEffect(() => {
        fetchPosts();
    }, [props]);

    const renderPost = (item, index) => {
        return (
            <Post
                key={index.toString()}
                index={index}
                creator={item.creator.name}
                imageLink={item.imageLink}
                content={item.content}
                jobList={item.jobList}
                deletePost={deletePost}
                editPost={editPost} />
        )
    }

    return (
        <div className='main-container'>
            <h1 className='main-header'>DANH SÁCH BÀI ĐĂNG</h1>
            <h3>Hi, {userName}</h3>
            <div className="main-btns">
                <button id='post-director' onClick={redirectPostCreator}>Đăng bài</button>
                <button id='logout-btn' onClick={redirectSignIn}>Đăng xuất</button>
            </div>
            <div>
                {postList.map(renderPost).reverse()}
            </div>
        </div>
    )
}

