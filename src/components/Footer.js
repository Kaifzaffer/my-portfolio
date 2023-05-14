import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../styles/Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className=''>
                <a href="https://www.linkedin.com/in/kaif-zaffer-812198225/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BqHAgyw7STn2k5Y4sKRbYoQ%3D%3D">
                    <LinkedInIcon />
                </a>
                <a href="https://github.com/Kaifzaffer">
                    <GitHubIcon />
                </a>
                <a href="https://www.instagram.com/kaif_zaffer/?next=%2F">
                    <InstagramIcon />
                </a>
                <a href="https://twitter.com/KaifZaffer">
                    <TwitterIcon />
                </a>

            </div>
            <p> &copy; 2023 Kaif_Zaffer.com </p>
        </div>
    )
}

export default Footer;
