import './footer.css';
import React, { Component } from 'react';
import {Link, animateScroll as scroll } from "react-scroll";
import logo from './images-sections/logo.png';

export default class Footer extends Component {
    scrollToTop = () => {
        scroll.scrollToTop(); 
    };
         
    render() {
        return (
            <div className="footer_section">                
                <div className="logo">
                    <img className='logo_img' alt='' src={logo} />
                </div>                
                <div className='footer_content'>NEW YORK <span className="footer_gap">|</span> NEW JERSEY <span className="footer_gap">|</span>  FLORIDA</div>
                <div className='footer_content'>Copyright &copy; 2021 <span className="footer_gap">•</span>  Xego LLC<span className="footer_gap">•</span> All Rights Reserved</div> 
                <div className="back_to_top">
                    <Link onClick={this.scrollToTop} className="yellow">BACK TO TOP</Link>
                </div>
            </div>
        )
    }
}
