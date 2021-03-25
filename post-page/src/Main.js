import React from 'react'
import { useHistory } from 'react-router-dom'

import './Main.css'

import Post from './Post'

export default function Main(props) {
    let history = useHistory();

    const redirectPostCreator = () => history.push('/post-creator');

    return (
        <div className='main-container'>
            <h1 className='main-header'>DANH SÁCH BÀI ĐĂNG</h1>
            <button id='post-director' onClick={redirectPostCreator}>Đăng bài</button>
            <div>
                {props.postList.map((post, index) =>
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
