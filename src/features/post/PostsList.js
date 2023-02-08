import { selectAllPosts, getPostStatus, getPostError, fetchPosts } from "./postSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import PostExcerpt from "./PostExcerpt";

function PostsList() {
  const dispatch = useDispatch();

  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostStatus);
  const error = useSelector(getPostError);

  useEffect(() => {
    if (postsStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch])

  let content;
  if (postsStatus === 'loading') {
    content = <p>"Loading..."</p>;
  } else if (postsStatus === 'succeeded') {
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map(post => (
      <PostExcerpt key={post.id} post={post} />
    )) 
  } else if (postsStatus === 'rejected') {
    content = <p>{ error }</p>
  }
  
  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  )
}

export default PostsList