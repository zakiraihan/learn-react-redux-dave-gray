import { Navigate, Route, Routes } from "react-router-dom";

import AddPostForm from "./features/posts/AddPostForm";
import EditFormPost from "./features/posts/EditFormPost";
import Layout from "./components/Layout";
import PostsList from "./features/posts/PostsList";
import SinglePostPage from "./features/posts/SinglePostPage";
import UserPage from "./features/users/UserPage";
import UsersList from "./features/users/UsersList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostsList />} />

        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId"element={<EditFormPost />} />
        </Route>

        <Route path="user">
          <Route index element={<UsersList />} />
          <Route path=":userId" element={<UserPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace/>} />
      </Route>
    </Routes>
  );
}

export default App;
