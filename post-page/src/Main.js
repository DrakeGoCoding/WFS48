import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import './Main.css'

import Post from './Post'

export default function Main() {
    let history = useHistory();

    const [postList, setPostList] = useState([]);

    useEffect(() => {
        console.log('Get post list from database');
        let allPosts = JSON.parse(localStorage.getItem('post-list'));
        if (Array.isArray(allPosts) && allPosts.length !== 0) setPostList(allPosts);
        else setPostList([]);
    }, []);

    const redirectPostCreator = () => history.push('/post-creator');

    return (
        <div className='main-container'>
            <h1 className='main-header'>DANH SÁCH BÀI ĐĂNG</h1>
            <button id='post-director' onClick={redirectPostCreator}>Đăng bài</button>
            <div>
                {postList.map((post, index) =>
                    <Post
                        key={index.toString()}
                        creator={post.creator}
                        imageLink={post.imageLink}
                        content={post.content}
                        jobList={post.jobList} />
                )}
            </div>
        </div>
    )
}
