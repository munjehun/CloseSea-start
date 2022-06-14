import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Explore from "../pages/Explore";
import styles from "./Navigation.css";

const navigation = () => {
  return (
    <>
      <nav className="navigation">
        <div className="opensea_logo"></div>
        <div className="link">
          <Link to="/explore">Explore</Link>
          <Link to="/stats">Stats</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/create">Create</Link>
          <Link to="/wallet">Wallet</Link>
        </div>
      </nav>
    </>
  );
};

export default navigation;
