import { Route, Routes} from 'react-router-dom';
import Home from './pages/home/Home';
import AboutUs from './pages/about/AboutUs';
import Menu from './pages/menu/Menu';
import Contact from './pages/contact/Contact';
import OrderOnline from './pages/order-online/OrderOnline';


import './App.css';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/order-online" element={<OrderOnline />} />
    </Routes>
  )
}

export default App