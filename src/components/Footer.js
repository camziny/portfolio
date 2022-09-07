import React from "react";
import { Facebook, Instagram, LinkedIn } from "@material-ui/icons";
import { GitHub } from "@material-ui/icons";
import { Email } from "@material-ui/icons";
import "../style/Footer.css";

const Footer = () => {
    return (
            
        <div className="footer">
            <div className="socialMedia">
                <a
                    className="linkedIn-link"
                    href="https://www.linkedin.com/in/cameron-ziny/"
                    target="_blank"
                >
                    <LinkedIn />
                </a>
                <a
                    className="gitHub-link"
                    href="https://github.com/camziny"
                    target="_blank"
                >
                    <GitHub />
                </a>
                <a
                    className="email-link"
                    href="mailto: cameronziny@gmail.com"
                    target="_blank"
                >
                    <Email />
                </a>
                <a
                    className="instagram-link"
                    href="https://www.instagram.com/zamciny/"
                    target="_blank"
                >
                    <Instagram />
                </a>
                <a
                    className="facebook-link"
                    href="https://www.facebook.com/cziny/"
                    target="_blank"
                >
                    <Facebook />
                </a>
            </div>
            <p> &copy; 2022 camziny.com</p>
        </div>
        
    );
};

export default Footer;
