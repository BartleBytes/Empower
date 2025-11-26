import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About_Page";
import Contact from "./pages/Contact";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";
import "./styles/theme.css";



function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
      <BackToTop />
      <Footer />
    </Router>
  );
}

export default App;
