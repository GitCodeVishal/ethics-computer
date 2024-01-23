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
                <h1 className="title">Bing n Watch</h1>
                <div className="social-icons">
                    <YouTubeIcon />
                    <InstagramIcon />
                    <FacebookIcon />
                </div>
            </header>
            <Outlet />
        </div>
    );
}

export default Layout;
