import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Dashboard from "./Pages/Dashboard";
import PostList from './Pages/PostList';
import AlbumList from './Pages/AlbumList';

function App() {
  return (
    <Router>
      <Routes>
        <Route exect path='/' element={<Dashboard/>} />
        <Route exect path='/:id/posts' element={<PostList/>} />
        <Route exect path='/:id/albums' element={<AlbumList/>} />
      </Routes>
    </Router>
  );
}

export default App;
