import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h3>Tourist.com</h3>
                <p>Copyright &copy; 2021 Tourist</p>
                <p>All rights reserved</p>
                <div className="social-icons">
                    <FaInstagram />
                    <FaFacebook />
                    <FaTwitter />
                    <FaYoutube />
                </div>
            </div>

            <div className="footer-section">
                <h4>Company</h4>
                <ul>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/pricing">Pricing</a></li>
                    <li><a href="/about">About us</a></li>
                </ul>
            </div>

            <div className="footer-section">
                <h4>Legal</h4>
                <ul>
                    <li><a href="/legal-policy">Legal policy</a></li>
                    <li><a href="/status-policy">Status policy</a></li>
                    <li><a href="/privacy-policy">Privacy policy</a></li>
                    <li><a href="/terms-of-service">Terms of service</a></li>
                </ul>
            </div>

            <div className="footer-section newsletter">
                <h4>Get updates</h4>
                <div className="subscribe">
                    <input type="email" placeholder="Enter your email:" />
<<<<<<< Updated upstream
                    <button><span role="img" aria-label="thumbs up">👍</span></button>
=======
                    <button><span role="img" aria-label="thumbs up">Ok!</span></button>
>>>>>>> Stashed changes
                </div>
            </div>
        </footer>
    );
};

export default Footer;
