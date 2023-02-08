import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addNewPost } from './postSlice';
import { selectAllUsers } from '../users/usersSlice';

function AddPostForm() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("-1");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const users = useSelector(selectAllUsers);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle';

  function onSavePostClicked() {
    if (canSave) {
      try {
        setAddRequestStatus('pending');
        dispatch(
          addNewPost({
            title,
            body: content,
            userId
          })
        );
        setTitle("");
        setContent("");
        setUserId("-1");
      } catch (err) {
        console.error('Failed to save the post', err);
      } finally {
        setAddRequestStatus('idle');
      }
    }
  }

  const userOptions = users.map(user => 
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ) 
  
  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor='postTitle'>Post Title: </label>
        <input
          type={"text"}
          id={"postTitle"}
          name={"postTitle"}
          value={title}
          onChange={onTitleChanged}
        />
        
        <label htmlFor='postAuthor'>Post Author: </label>
        <select 
          id={"postAuthor"}
          name={"postAuthor"}
          value={userId}
          onChange={onAuthorChanged}
        >
          <option key='-1' value='-1'>--- Select User ---</option>
          { userOptions }
        </select>
        
        <label htmlFor='postContent'>Post Content: </label>
        <textarea
          id={"postContent"}
          name={"postContent"}
          value={content}
          onChange={onContentChanged}
        />

        <button
          type="button"
          onClick={onSavePostClicked}
          disabled={!canSave}
        >
          Save Post
        </button>
      </form>
    </section>
  )
}

export default AddPostForm