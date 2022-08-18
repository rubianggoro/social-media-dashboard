import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Dashboard from "./Pages/Dashboard";
import PostList from './Pages/PostList';
import AlbumList from './Pages/AlbumList';
import PostDetail from './Pages/PostDetail';
import AlbumDetail from './Pages/AlbumDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route exect path='/' element={<Dashboard/>} />
        <Route exect path='/:id/posts' element={<PostList/>} />
        <Route exect path='/:id/albums' element={<AlbumList/>} />
        <Route exect path='/:id/posts/:postId' element={<PostDetail/>} />
        <Route exect path='/:id/albums/:albumId' element={<AlbumDetail/>} />
      </Routes>
    </Router>
  );
}

export default App;
