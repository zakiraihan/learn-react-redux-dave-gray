import { Link } from "react-router-dom";
import { selectAllUsers } from "../users/usersSlice";
import { useSelector } from "react-redux";

const PostAuthor = ({ userId }) => {
    const users = useSelector(selectAllUsers)

    const author = users.find(user => user.id === userId);

    return <span>by {
      author ? 
      <Link to={`/user/${userId}`}>
        { author.name }
      </Link>
      : 
      'Unknown author'
    }</span>
}
export default PostAuthor