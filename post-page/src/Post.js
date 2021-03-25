import React from 'react'

import './Post.css'

export default function Post(props) {
    const creator = props.creator;
    const content = props.content;
    const imageLink = props.imageLink;
    const jobList = props.jobList;

    return (
        <div className='post-container'>
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
