import React from 'react'
import { selectAllUsers } from "../users/usersSlice";
import { useSelector } from "react-redux";

function PostAuthor(props) {
  const users = useSelector(selectAllUsers);
  const author = users.find(user => user.id === props.userId);

  return <span>by {author ? author.name : "Unknown author"}</span>
}

export default PostAuthor