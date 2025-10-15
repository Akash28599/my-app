import { useRef, useEffect, useState } from 'react';
import './Moon.css';
import akash from '../akash.webp';

function Moon() {
  

  return (
    <>
      <p style={{ marginTop: "90px", textAlign: "center" }}>Get to know about me</p>
      <h1 id="contact" style={{ color: "purple", textAlign: "center" }}>About me</h1>

      <div  className="About">
        <div className="left" style={{ marginLeft: "10%", width: "35%" }}>
          <img src={akash} alt="Akash" />
          <p>
            I'm a passionate Full-Stack Developer who loves building dynamic, user-friendly applications.
            I thrive on solving problems, creating seamless experiences, and continuously expanding my skills.
            Always eager to learn and grow, I'm currently looking for new opportunities to contribute and innovate.
          </p>
        </div>

        <div className="divider"></div>

        <div className="right">
          <h3>Education</h3>
          <h2>B.E(ECE)</h2>
          <label>University College of Engineering, Arni (2016–2020)</label>
          <div className="rightDivider"></div>
          <div className='experience'>
            <h2>Tringapps Research pvt Limited</h2>
            <h2>Software Engineer</h2>
            <ul>
                <li><label>Full stack Enginner for 4 yearst</label></li>
                <li><label>Delivered high-performance, responsive solutions with exceptional UX</label></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Moon;
