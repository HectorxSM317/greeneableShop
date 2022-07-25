import React from "react";
import '../styles/footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
// import Logo from '../assets/logo-lighter.png'
import { Link as LinkRouter } from 'react-router-dom'


function Footer() {
    return (
        <footer>
            <div className="top_header">
                <section>
                    <span><i className="fa fa-map-marker"></i></span>
                    <span>Phone: (+54) 11 345 2167</span>
                </section>
                <section>
                    <span><i className="fa fa-phone"></i></span>
                    <table>
                        <tr>
                            <td classsName="mapStyle">
                                <h5 style={{ display: "flex", justifyContent: "center", paddingBottom: ".5rem" }}>Find us at:</h5>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13139.529356443161!2d-58.51998844898532!3d-34.58184362101943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb64c098b0e67%3A0x4f28c3a2b8ffefe4!2sVilla%20Pueyrred%C3%B3n%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1658520367012!5m2!1ses-419!2sar" width="250" height="200" style={{ border: "0", borderRadius: "5px" }} allowfullscreen="" loading="lazy"></iframe>
                            </td>
                        </tr>
                    </table>
                </section>
                <section>
                    <span><i className="fa fa-envelope"></i></span>
                    <span>Contact: <a href="mailto:info@greeneable.com">info@greeneable.com</a></span>
                </section>
            </div >
            <span className="border-shape"></span>
            <div className="bottom_content">
                <section>
                    <InstagramIcon style={{ marginRight: "1rem" }} />
                    <FacebookIcon style={{ marginRight: "1rem" }} />
                    <TwitterIcon style={{ marginRight: "1rem" }} />
                    <TelegramIcon />
                </section>
                <section>
                    <LinkRouter to={"/"}>
                        Home
                    </LinkRouter>
                    <LinkRouter to={"/products/"}>
                        Products
                    </LinkRouter>

                    <LinkRouter to={"/aboutUs/"}>
                        About Us
                    </LinkRouter>
                </section>
            </div>
            <div className="copyright">
                Copyright © 2022 Greeneable - All rights reserved
            </div>
        </footer >
    )
}

export default Footer;
