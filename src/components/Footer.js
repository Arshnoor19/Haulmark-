import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Indian Office Location </h3>
          <p>Contact us</p>

          <ul>
            <li>
              <a href="/https://www.google.com/maps/place/Pocket+10,+Sector+B,+Vasant+Kunj,+New+Delhi,+Delhi+110067/@28.5332173,77.1532871,19z/data=!3m1!4b1!4m9!1m2!2m1!1sB10%2F7071!3m5!1s0x390d1dd3c5c776b3:0xd0e00c5b0677929!8m2!3d28.5332173!4d77.1532871!16s%2Fg%2F11g60b5lw2?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D">
                B-10 / 7071 Vasant kunj, New Delhi - 110070{" "}
              </a>
            </li>
            <li>
              <a href="mailto:manabc@gmail.com">Email: manabc@gmail.com </a>
            </li>
            <li>
              <a href="/tel:9560107700">M: +91-9560107700 </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom"></div>
    </footer>
  );
};

export default Footer;
