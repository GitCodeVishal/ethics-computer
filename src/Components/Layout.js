import React from 'react';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import '../styles/Layout.css';
import { Outlet } from 'react-router';

const Layout = () => {
    return (
        <div>
            <header className="layout-container">
                <h1 className="title">Binge 'n <span className="Bash">Bash</span></h1>
                <div className="social-icons-header">
                    <YouTubeIcon />
                    <InstagramIcon />
                    <FacebookIcon />
                </div>
            </header>
            <Outlet />
            <footer className="footer">
                <div className="footer-top">
                    <h2>Binge 'n <span className="Bash">Bash</span></h2>
                    <div className="social-icons-footer">
                        <InstagramIcon />
                        <YouTubeIcon />
                        <FacebookIcon />
                    </div>
                </div>

                <div className="footer-center">
                    <div className="footer-section-1">
                        <h3>Home</h3>
                        <h3>Book Now</h3>
                        <h3>Add-ons</h3>
                        <h3>About Us</h3>
                    </div>
                    <div className="footer-section-2">
                        <h3>Gallery</h3>
                        <h3>Refund Policy</h3>
                        <h3>Privacy Policy</h3>
                        <h3>Terms and Conditions</h3>
                    </div>
                </div>

                <div className="footer-bottom">
                    <h3>Contact Us:</h3>
                    <ul>
                        <li>401, Meta towers, Hitec city
                            Madhapur, Hyderabad - 500081</li>
                        <li>+91 9948954545 (WhatsApp only)</li>
                        <li>admin@bingenbash.com</li>
                    </ul>
                </div>
                <p>2023 © Binge 'n Bash, All Rights Reserved</p>
            </footer>

        </div>
    );
}

export default Layout;
