import "./App.css";
import "./styles/Global.css";

import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import BookGraph from "./pages/BookGraph";
import Library from "./pages/Library";
import BookReview from "./pages/BookReview";
import ProfileModify from "./pages/ProfileModify";
import NotFound from "./components/NotFound.jsx";
import ThemaSetting from "./pages/ThemaSetting";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="library" element={<Library />} />
          <Route path="bookgraph" element={<BookGraph />} />
          <Route path="bookreview" element={<BookReview />} />
          <Route path="profile" element={<Profile />} />
          <Route path="Login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="modify" element={<ProfileModify />} />
          <Route path="thema" element={<ThemaSetting />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
