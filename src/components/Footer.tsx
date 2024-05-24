import React from "react";
import './Styles/FootStyle.css'
const Footer: React.FC = () => {
    return (
        <div className="footer-side" style={{ textAlign: 'center' }}>
            <hr></hr>
            Private Casino ©{new Date().getFullYear()}
        </div>
    )
}

export default Footer;