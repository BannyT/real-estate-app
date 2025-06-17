import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/SignUp';
import Profile from './Pages/Profile';
import PropertyDetails from './Pages/PropertyDetails';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import TopProperties from './Pages/TopProperties';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUS';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/properties" element={<TopProperties/>}  />
        <Route path="/about" element={<AboutUs/>}  />
        <Route path="/contact" element={<ContactUs/>}  />
        <Route path="/property/:id" element={<PropertyDetails />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
