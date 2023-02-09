import { getPostsError, getPostsStatus, selectAllPosts, selectPostIds } from "./postsSlice";

import PostsExcerpt from "./PostsExcerpt";
import { useSelector } from "react-redux";

const PostsList = () => {
    const orderedPostsIds = useSelector(selectPostIds);
    const postStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);

    let content;
    if (postStatus === 'loading') {
        content = <p>"Loading..."</p>;
    } else if (postStatus === 'succeeded') {
        console.log(orderedPostsIds);
        content = orderedPostsIds.map(postId => <PostsExcerpt key={postId} postId={postId} />)
    } else if (postStatus === 'failed') {
        content = <p>{error}</p>;
    }

    return (
        <section>
            {content}
        </section>
    )
}
export default PostsList