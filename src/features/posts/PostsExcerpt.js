import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";
import React from "react";
import ReactionButtons from "./ReactionButtons";
import TimeAgo from "./TimeAgo";
import { selectPostById } from "./postsSlice";
import { useSelector } from "react-redux";

const PostsExcerpt = ({ postId }) => {
    
    const post = useSelector(state => selectPostById(state, postId))

    return (
        <article>
            <h2>{post.title}</h2>
            <p className="excerpt">{post.body.substring(0, 75)}...</p>
            <p className="postCredit">
                <Link to={`post/${post.id}`}>View Post</Link>
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
        </article>
    )
}

// change from const to let
// PostsExcerpt = React.memo(PostsExcerpt);

export default PostsExcerpt