import React, { useState } from 'react'
import { useHistory } from 'react-router'

import './PostCreator.css'

export default function PostCreator() {
    let history = useHistory();

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
    const post = () => {
        const newPost = { creator, imageLink, content, jobList };
        let postList = JSON.parse(localStorage.getItem('post-list'));
        if (Array.isArray(postList)) {
            postList.push(newPost)
            localStorage.setItem('post-list', JSON.stringify(postList));
        }
        else localStorage.setItem('post-list', JSON.stringify([newPost]));
        redirectMain();
    };
    const redirectMain = () => history.push('/');

    return (
        <div className='postcreator-container'>
            <form className='post-form flexColumn' onSubmit={post}>
                <h1 className='postcreator-header'>ĐĂNG BÀI MỚI</h1>
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
                    <img className='post-img' style={{display: imageLink !== '' ? 'block' : 'none'}} src={imageLink} alt='' />
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
                    <select className='post-job' onChange={addJob} required>
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

                <label className='post-btns'>
                    <input id='post-btn' type='submit' value='Đăng bài'/>
                    <button id='main-director' onClick={redirectMain}>Trở về</button>
                </label>
            </form>
        </div>
    )
}
