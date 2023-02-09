import { Link, useParams } from "react-router-dom";

import PostAuthor from "./PostAuthor";
import React from 'react'
import ReactionButtons from "./ReactionButtons";
import TimeAgo from "./TimeAgo";
import { selectPostById } from './postsSlice';
import { useSelector } from 'react-redux';

function SinglePostPage() {
  const { postId } = useParams();

  const post = useSelector((state) => selectPostById(state, Number(postId)))

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <article>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <p className="postCredit">
            <Link to={`/post/edit/${post.id}`}>Edit Posts</Link>
            <PostAuthor userId={post.userId} />
            <TimeAgo timestamp={post.date} />
        </p>
        <ReactionButtons post={post} />
    </article>
  )
}

export default SinglePostPage