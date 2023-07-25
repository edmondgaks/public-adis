import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Category from './components/pages/Category';
import AboutUs from './components/pages/AboutUs';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import FAQ from './components/pages/FAQ';
import Auth from './components/pages/Auth';
import PostAds from './components/pages/PostAds';
import MyProfile from './components/pages/MyProfile';
import MyAds from './components/pages/MyAds';
import Product from './components/pages/Product';
import Dashboard from './components/pages/Dashboard';
import SingleAd from './components/pages/SingleAd';

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
        <Route path='/loginRegister' element={<Auth /> } />
        <Route path='/postad' element={<PostAds /> } />
        <Route path='/myprofile' element={<MyProfile /> } />
        <Route path='/myads' element={<MyAds /> } />
        <Route path='/product' element={<Product /> } />
        <Route path='/dashboard' element={<Dashboard /> } />
        <Route path='/singlead' element={<SingleAd /> } />
      </Routes>
    </Router>
  );
}

export default App;
