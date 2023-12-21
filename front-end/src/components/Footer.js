import React from 'react';

const Footer = () => {
    return(
        <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin commodo, elit in
            rhoncus bibendum, dui nunc volutpat elit, a facilisis velit turpis eget lectus.
          </p>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: contact@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Your E-Commerce Store. All rights reserved.</p>
      </div>
    </footer>
    )
}

export default Footer;