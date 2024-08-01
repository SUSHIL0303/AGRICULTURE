import React, { useEffect } from "react";
import Navbar from "./nav";
import "./stylesheet/Home.css";
import hill1 from "../src/images/parallax imgs/hill1.png";
import hill2 from "../src/images/parallax imgs/hill2.png";
import hill3 from "../src/images/parallax imgs/hill3.png";
import hill4 from "../src/images/parallax imgs/hill4.png";
import hill5 from "../src/images/parallax imgs/hill5.png";
import plant from "../src/images/parallax imgs/plant.png";
import tree from "../src/images/parallax imgs/tree.png";

export default function Home() {
  useEffect(() => {
    let text = document.getElementById('text');
    let hill1 = document.getElementById('hill1');
    let hill4 = document.getElementById('hill4');
    let hill5 = document.getElementById('hill5');

    const handleScroll = () => {
      let value = window.scrollY;
      text.style.marginTop = value * 2.5 + 'px';
      hill5.style.marginTop = value * 1.5 + 'px';
      hill4.style.marginTop = value * -1.5 + 'px';
      hill1.style.marginTop = value * -1.5 + 'px';
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="parent-wrap">
        <Navbar />
    
      <section className="Home-sec">
        <h2 id="text">FarmersIndia</h2>
        <img id="hill1" src={hill1} alt="hill1" />
        <img src={hill2} alt="hill2" />
        <img src={hill3} alt="hill3" />
        <img id="hill4" src={hill4} alt="hill4" />
        <img id="hill5" src={hill5} alt="hill5" />
        <img src={plant} alt="plant" />
        <img src={tree} alt="tree" />
      </section>
      <section className="section-2">
        <h1 className="wel-txt">Welcome to FarmersIndia!</h1>
        <p className="wel-content">At FarmersIndia, we are dedicated to empowering smallholder farmers by providing innovative solutions to overcome common challenges and enhance sustainable agricultural practices. Our comprehensive suite of services is designed to support farmers at every step of their journey, ensuring they have the resources and knowledge to thrive.</p>
      </section>
      <footer className="footer">
        <p>*2024 TeamRookies</p>
        <p>All right are reserved</p>
      </footer>
    </div>
  );
}
