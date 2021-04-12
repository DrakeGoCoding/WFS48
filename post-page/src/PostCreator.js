import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { addNewPost, updatePost } from './Axios';

import './PostCreator.css'

export default function PostCreator(props) {
    let history = useHistory();

    const editPost = props.editPost;
    const [creator, setCreator] = useState('');
    const [imageLink, setImageLink] = useState('');
    const [content, setContent] = useState('');
    const [jobList, setJobList] = useState([]);

    const jobOptions = [
        'Bác sỹ', 'Kỹ sư', 'Giảng viên', 'Diễn viên', 'Ca sỹ',
        'Người Mẫu', 'Đầu bếp', 'Nhiếp ảnh gia', 'Phóng viên', 'Chính trị gia'];

    const changeCreator = e => setCreator(e.target.value);
    const changeImageLink = e => setImageLink(e.target.value);
    const changeContent = e => setContent(e.target.value);
    const addJob = e => {
        let option = e.target.value;
        let selectedOptions = [...jobList];
        if (!jobList.includes(option) && option !== '') selectedOptions.push(option);
        setJobList(selectedOptions);
    }
    const post = e => {
        e.preventDefault();
        const newPost = { creator, imageLink, content, jobList };
        addNewPost(newPost).then(res => {
            redirectMain();
        });
    };
    const edit = e => {
        e.preventDefault();
        const id = editPost._id;
        const newPost = { id, creator, imageLink, content, jobList };
        updatePost(newPost).then(res => {
            redirectMain();
        });
    }
    const redirectMain = () => history.push('/');

    useEffect(() => {
        if (editPost !== null) {
            setCreator(editPost.creator);
            setImageLink(editPost.imageLink);
            setContent(editPost.content);
            setJobList(editPost.jobList);
        }
    }, [editPost])

    return (
        <div className='postcreator-container'>
            <form className='post-form flexColumn' onSubmit={e => editPost ? edit(e) : post(e)}>
                <h1 className='postcreator-header'>{editPost ? "SỬA BÀI" : "ĐĂNG BÀI MỚI"}</h1>
                <label>
                    <input
                        className='post-input'
                        name='creator'
                        type='text'
                        value={creator}
                        placeholder='Người đăng bài'
                        onChange={changeCreator}
                        required />
                </label>

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
                    <select className='post-job' onChange={addJob} required={jobList.length > 0 ? false : true}>
                        <option value=''>Chọn nghề nghiệp</option>
                        {jobOptions.map((option, index) =>
                            <option value={option} key={index.toString()}>{option}</option>
                        )}
                    </select>
                    <ul>
                        {jobList.map((item, index) =>
                            <li key={index.toString()}>{item}</li>
                        )}
                    </ul>
                </label>

                <div className='post-btns'>
                    <input id='post-btn' type="submit" value={editPost !== null ? "Lưu" : "Đăng bài"} />
                    <button id='main-director' onClick={redirectMain}>Trở về</button>
                </div>
            </form>
        </div>
    )
}
