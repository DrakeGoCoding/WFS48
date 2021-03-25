import React from 'react'

import './Post.css'

export default function Post(props) {
    const index = props.index;
    const creator = props.creator;
    const content = props.content;
    const imageLink = props.imageLink;
    const jobList = props.jobList;

    const deletePost = () => {
        props.deletePost(index);
    }

    return (
        <div className='post-container flexColumn'>
            <span className="X" draggable="true" onClick={deletePost}>&times;</span>
            <p className='post-creator'>Người đăng bài: {creator}</p>
            <p className='post-content'>{content}</p>
            <img className='post-img' src={imageLink} alt='' />
            <ul>
                {jobList.map((job, index) => 
                    <li key={index.toString()}>{job}</li>
                )}
            </ul>
        </div>
    )
}
