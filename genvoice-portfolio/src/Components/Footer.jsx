import React from 'react';
import "../css/Footer.css";

function Footer() {
    const date = new Date();
    const newDate = date.getFullYear();


    return (
        <div className='footer'>
            <div className='links'>
                <a className="footer-link" href="https://www.linkedin.com/in/figenda%C4%9Fhan/" target="_blank">Linkedln</a>
                <a className="footer-link" href="mailto:figendaghan06@gmail.com" target="_blank">Email</a>
                <a className="footer-link"
                    href="https://github.com/Figensoftware?tab=overview&amp;from=2023-06-01&amp;to=2023-06-30"
                    target="_blank">Github</a>
                <a className="footer-link"
                    href="https://figenportfolio.netlify.app/"
                    target="_blank">Website</a>
            </div>
            <div className="copyright"><b>©{newDate} </b> Built by <b> @Figensoftware</b></div>
        </div>
    )
}

export default Footer;
