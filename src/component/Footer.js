import React from "react";
import "./Footer.css";

function Footer()
{
    return(
        <footer>
        <section className="first__section__body">
            <div className="footer__title">
                <h1>Personal Bank</h1>
            </div>
            <div className="footer__content_1">
                <b>Get started</b>
                    <a href="www.google.com"><p className="content__1">1st link</p></a> 
                    <a href="www.google.com"><p className="content__1">2nd link</p></a> 
                    <a href="www.google.com"><p className="content__1">3rd link</p></a> 
            </div>
            <div className="footer__content_2">
                <b>Contributors</b>
                <a href="https://secret-sands-99654.herokuapp.com/" target="_blank"><p className="content__1">Uttam</p></a> 
                <a href="www.google.com" target="_blank"><p className="content__1">Aman</p></a> 
                <a href="www.google.com" target="_blank"><p className="content__1">Kunal</p></a> 
                <a href="www.google.com" target="_blank"><p className="content__1">Amit</p></a> 
            </div>
        </section>
        <section className="second__section__body">
            <p className="last__paragraph">Made with ❤</p>
            </section>
        </footer>
    );
}

export default Footer;