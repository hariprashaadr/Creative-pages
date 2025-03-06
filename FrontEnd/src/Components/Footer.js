import React, { useEffect, useState } from "react";
function Footer({lang}) {

        return (
            <footer className="footer">
              <div className="footer-container">
                <h2 className="footer-title">Stay Connected</h2>
                <p className="footer-text">Join our newsletter for updates and special offers!</p>
                <form className="footer-form">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="footer-input"
                  />
                  <button className="footer-button">
                    Subscribe
                  </button>
                </form>
                <div className="footer-links">
                  <a href="#" className="footer-link">Facebook</a>
                  <a href="#" className="footer-link">Twitter</a>
                  <a href="#" className="footer-link">Instagram</a>
                </div>
                <p className="footer-copyright">© {new Date().getFullYear()} YourCompany. All rights reserved.</p>
              </div>
            </footer>
          );
        };
      

export default Footer;
