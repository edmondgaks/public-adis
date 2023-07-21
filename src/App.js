import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Category from './components/pages/Category';
import AboutUs from './components/pages/AboutUs';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import FAQ from './components/pages/FAQ';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/category' element={<Category /> } />
        <Route path='/about-us' element={<AboutUs /> } />
        <Route path='/blog' element={<Blog /> } />
        <Route path='/contactus' element={<Contact /> } />
        <Route path='/faq' element={<FAQ /> } />
      </Routes>
    </Router>
  );
}

export default App;
