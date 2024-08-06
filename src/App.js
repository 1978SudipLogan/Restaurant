import './App.css';
import Navbar from './components/Navbar';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';


const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Reviews />
      <Contact />
      <Footer />
    </>


  );
}

export default App;
