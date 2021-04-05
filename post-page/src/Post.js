import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

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

    const editPost = () => {
        props.editPost(index);
    }

    return (
        <div className='post-container flexColumn'>
            <div className='flexColumn sp-btns'>
                <FontAwesomeIcon className="delete-btn fa-icons" icon={faTrash} onClick={deletePost}/>
                <FontAwesomeIcon className="edit-btn fa-icons" icon={faEdit} onClick={editPost}/>
            </div>
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
