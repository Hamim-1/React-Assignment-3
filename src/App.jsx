import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import MainNavbar from './components/MainNavbar';
import SeachResult from './components/SeachResult/SeachResult';
import RestaurantDetails from './components/Restaurant Details/RestaurantDetails';

function App() {
  return (
    <Router>
      <MainNavbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/search-result" element={<SeachResult />} />

        <Route path="/restaurant-details" element={<RestaurantDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
