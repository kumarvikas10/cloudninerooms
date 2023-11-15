import styles from './App.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Homepage/Home';
import Sector45 from './components/Sector 45/Sector45';
import Sector47 from './components/Sector 47/Sector47';
import AboutUs from './components/About Us/AboutUs';
import TheIdea from './components/The Idea/TheIdea';
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";

function App() {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <ScrollToTop />
        <div className={styles.layout}>
          <Navbar />
          <Routes>
            <Route
              path="/"
              exact
              element={
                <div className={styles.main}>
                  <Home />
                </div>
              }
            />
            <Route
              path="/our-properties/sector-45"
              exact
              element={
                <div className={styles.main}>
                  <Sector45 />
                </div>
              }
            />
            <Route
              path="/our-properties/sector-47"
              exact
              element={
                <div className={styles.main}>
                  <Sector47 />
                </div>
              }
            />
            <Route
              path="/about-us"
              exact
              element={
                <div className={styles.main}>
                  <AboutUs />
                </div>
              }
            />
            <Route
              path="/the-idea"
              exact
              element={
                <div className={styles.main}>
                  <TheIdea />
                </div>
              }
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
