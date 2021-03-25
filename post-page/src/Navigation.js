import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import Main from './Main.js'
import PostCreator from './PostCreator.js'

export default function Navigation() {

    const [postList, setPostList] = useState([]);

    const addPostList = (newPost) => {
        setPostList([newPost, ...postList]);
    }

    const deletePost = (index) => {
        let newPostList = [...postList];
        newPostList.splice(index, 1);
        setPostList(newPostList);
    }

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Main postList={postList} deletePost={deletePost}/>
                </Route>

                <Route path="/post-creator">
                    <PostCreator addPostList={addPostList}/>
                </Route>
            </Switch>
        </Router>
    )
}
