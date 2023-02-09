import { selectAllPosts, selectPostsByUser } from '../posts/postsSlice';

import { Link } from 'react-router-dom';
import React from 'react'
import { selectUsersById } from './usersSlice';
import { useParams } from 'react-router'
import { useSelector } from 'react-redux';

function UserPage() {
  const { userId } = useParams();
  const user = useSelector(state => selectUsersById(state, Number(userId)));

  const postsForUser = useSelector(state => selectPostsByUser(state, Number(userId)));

  const postTitles = postsForUser.map(post => (
    <li key={post.id}>
      <Link to={`/post/${post.id}`}>
        {post.title}
      </Link>
    </li>
  ))
  
  return (
    <section>
      <h2>{user.name}</h2>
      <ol>
        {postTitles}
      </ol>
    </section>
  )
}

export default UserPage