import About from "./pages/About";
import Navigation from "./components/Navigation";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import Explore from "./pages/Explore";
import Create from "./pages/Create";
import Wallet from "./pages/Wallet";
import Resources from "./pages/Resources";
import erc721Abi from "./erc721Abi";
import TokenList from "./pages/TokenList";

function App() {
  return (
    <>
      <Router>
        <Navigation></Navigation>
        {/* 1. Switch -> Routes */}

        <Routes>
          {/* 2. component -> element, element형태로 넘겨야함 <Home /> */}
          <Route path="/" element={<Home />} />

          <Route path="/create" element={<Create />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/about" element={<About />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
