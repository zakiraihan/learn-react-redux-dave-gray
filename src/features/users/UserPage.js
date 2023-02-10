import { Link } from 'react-router-dom';
import React from 'react'
import { selectUsersById } from './usersSlice';
import { useGetPostByUserIdQuery } from '../posts/postsSlice';
import { useParams } from 'react-router'
import { useSelector } from 'react-redux';

function UserPage() {
  const { userId } = useParams();
  const user = useSelector(state => selectUsersById(state, Number(userId)));

  const {
    data: postsForUser,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetPostByUserIdQuery(userId);

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    const { ids, entities } = postsForUser;
    content = ids.map(id => (
      <li key={id}>
        <Link to={`/post/${id}`}>
          {entities[id].title}
        </Link>
      </li>
    ))
  } else if (isError) {
    content = <p>{ error }</p>
  }
  
  return (
    <section>
      <h2>{user.name}</h2>
      <ol>
        { content }
      </ol>
    </section>
  )
}

export default UserPage