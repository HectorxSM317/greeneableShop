import React from "react";
import '../styles/footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
// import Logo from '../assets/logo-lighter.png'
// import { Link as LinkRouter } from 'react-router-dom'


function Footer() {
    return (
        <footer>
            <div class="top_header">
                <section>
                    <span><i class="fa fa-map-marker"></i></span>
                    <span>Street, full address, state/province, country, pincode</span>
                </section>
                <section>
                    <span><i class="fa fa-phone"></i></span>
                    <span>(00) 0000 0000</span>
                </section>
                <section>
                    <span><i class="fa fa-envelope"></i></span>
                    <span>info@greeneable.com</span>
                </section>
            </div>
            <span class="border-shape"></span>
            <div class="bottom_content">
                <section>
                    <InstagramIcon style={{ marginRight: "1rem" }} />
                    <FacebookIcon style={{ marginRight: "1rem" }} />
                    <TwitterIcon style={{ marginRight: "1rem" }} />
                    <TelegramIcon />
                </section>
                <section>
                    <a href="#">Products</a>
                    <a href="#">Pricing</a>
                    <a href="#">Blog</a>
                    <a href="#">About</a>
                    <a href="#">Contact Us</a>
                </section>
            </div>
            <div class="copyright">
                Copyright © 2022 Greeneable - All rights reserved
            </div>
        </footer>
    )
}

export default Footer;
