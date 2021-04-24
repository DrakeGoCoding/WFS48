import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router'
import { addNewPost, getPostByID, updatePost } from './Axios';
import jwt_decode from 'jwt-decode'

import './PostCreator.css'

export default function PostCreator() {
    let history = useHistory();
    const param = useParams();

    const postID = param.id;
    const creatorID = jwt_decode(localStorage.getItem('accessToken'))._id;

    const [imageLink, setImageLink] = useState('');
    const [content, setContent] = useState('');
    const [jobList, setJobList] = useState([]);

    const jobOptions = [
        'Bác sỹ', 'Kỹ sư', 'Giảng viên', 'Diễn viên', 'Ca sỹ',
        'Người Mẫu', 'Đầu bếp', 'Nhiếp ảnh gia', 'Phóng viên', 'Chính trị gia'];

    const changeImageLink = e => setImageLink(e.target.value);
    const changeContent = e => setContent(e.target.value);
    const addJob = e => {
        let option = e.target.value;
        let selectedOptions = [...jobList];
        if (!jobList.includes(option) && option !== '') selectedOptions.push(option);
        setJobList(selectedOptions);
    }
    const deleteJob = (index) => {
        let currentJobList = [...jobList];
        currentJobList.splice(index, 1)
        setJobList(currentJobList)
    }
    const post = e => {
        e.preventDefault();
        const newPost = { creator: creatorID, imageLink, content, jobList };
        addNewPost(newPost).then(res => {
            redirectMain();
        });
    };
    const edit = e => {
        e.preventDefault();
        const newPost = { id: postID, creator: creatorID, imageLink, content, jobList };
        updatePost(newPost).then(res => {
            redirectMain();
        });
    }
    const redirectMain = () => history.push('/');

    useEffect(() => {
        if (postID) {
            getPostByID(postID).then(res => {
                const post = res.data;
                setImageLink(post.imageLink);
                setContent(post.content);
                setJobList(post.jobList);
            })
        }
    }, [postID])

    return (
        <div className='postcreator-container'>
            <form className='post-form flexColumn' onSubmit={e => postID ? edit(e) : post(e)}>
                <h1 className='postcreator-header'>{postID ? "SỬA BÀI" : "ĐĂNG BÀI MỚI"}</h1>

                <label>
                    <input
                        className='post-input'
                        name='image-link'
                        type='url'
                        value={imageLink}
                        placeholder='Link ảnh'
                        onChange={changeImageLink} /> <br />
                    <img className='post-img' style={{ display: imageLink !== '' ? 'block' : 'none' }} src={imageLink} alt='' />
                </label>

                <label>
                    <textarea
                        className='postcontent-input'
                        name='post-content'
                        value={content}
                        rows={8}
                        placeholder='Nội dung'
                        onChange={changeContent}
                        required />
                </label>

                <label>
                    <select className='post-job'
                        onChange={addJob}
                        required={jobList.length > 0 ? false : true}>
                        <option value=''>Chọn nghề nghiệp</option>
                        {jobOptions.map((option, index) =>
                            <option value={option} key={index.toString()}>{option}</option>
                        )}
                    </select>
                    <ul className='post-joblist'>
                        {jobList.map((item, index) =>
                            <li key={index.toString()} className='post-chosen-job flexRow'>
                                <button className="delete-job-btn" onClick={e => { e.preventDefault(); deleteJob(index) }}>X</button>
                                {item}
                            </li>
                        )}
                    </ul>
                </label>

                <div className='post-btns'>
                    <input id='post-btn' type="submit" value={postID ? "Lưu" : "Đăng bài"} />
                    <button id='main-director' onClick={redirectMain}>Trở về</button>
                </div>
            </form>
        </div>
    )
}
