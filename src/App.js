import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Category from './components/pages/Category';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/category' element={<Category /> } />
      </Routes>
    </Router>
  );
}

export default App;
