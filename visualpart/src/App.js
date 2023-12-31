import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Destn from "./pages/Destn";
import ErrorPage from "./components/Errorpage";
import Contact from "./pages/Contact";
import Accomodation from "./pages/Accomodation";
import Package from "./pages/Package";
import Offer from "./pages/Offer";

import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/errorpage" element={<ErrorPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/destn" element={<Destn />} />
          <Route path="/accomodation" element={<Accomodation />} />
          <Route path="/package" element={<Package />} />
          <Route path="/offer" element={<Offer />} />
          
          {/* <Route path="/japan" element={<Japan />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
