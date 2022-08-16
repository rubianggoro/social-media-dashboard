import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Dashboard from "./Pages/Dashboard";
import PostList from './Pages/PostList';

function App() {
  return (
    <Router>
      <Routes>
        <Route exect path='/' element={<Dashboard/>} />
        <Route exect path='/:id/posts' element={<PostList/>} />
      </Routes>
    </Router>
  );
}

export default App;
