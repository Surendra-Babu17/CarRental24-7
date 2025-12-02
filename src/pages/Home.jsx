// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bg from '../assets/bg.jpg'
const Home = ({ background, images = [] }) => {
  // simple slider using images prop if provided
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    if (!images || images.length === 0) return;
    const t = setInterval(() => setIdx(i => (i + 1) % images.length), 4000);
    return () => clearInterval(t);
  }, [images]);

  const bgStyle = {
  
  backgroundImage: `url(${images && images.length ? images[idx] : bg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  height: "100vh", // full screen
 


};

  return (
    <>
    
    <div className="home-container" style={bgStyle}>
      <div className="home-content">
        <h1>JK Vehicles Hub</h1>
        <p className="kicker">Rent / Purchase — 24/7</p>

        <div className="btn-group" style={{ marginTop: 18 }}>
          <Link to="/login"><button className="home-btn">Login</button></Link>
          <Link to="/register"><button className="home-btn">Register</button></Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
