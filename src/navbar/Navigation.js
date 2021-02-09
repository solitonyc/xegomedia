import React, { Component } from 'react';
import {Link, animateScroll as scroll } from 'react-scroll';
import logo from './images-navbar/xmlogo-sm.png';
import './navigation.css';

export default class Navigation extends Component {
    state = {};
    scrollToTop = () => {
        scroll.scrollToTop(); 
    };
    render() {
        return (
            <div className="nav-bar">
                <img src={logo} 
                    alt="Logo" 
                    className='nav_logo'
                    onClick={this.scrollToTop}
                    />
                <Link
                    className="nav-links"
                    activeClass="active"
                    to="main"
                    spy={true}
                    smooth={true}
                    offset={-40}
                    duration={500}
                    >MAIN</Link>
                
                <Link
                    className="nav-links"
                    activeClass="active"
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={-38}
                    duration={500}
                    >SERVICES</Link>
                
                <Link
                    className="nav-links-last"
                    activeClass="active"
                    to="branding"
                    spy={true}
                    smooth={true}
                    offset={-38}
                    duration={500}
                    >BRANDING</Link>

                <Link
                    className="nav-links"
                    activeClass="active"
                    to="video"
                    spy={true}
                    smooth={true}
                    offset={-38}
                    duration={500}
                    >VIDEO</Link>
                
                <Link
                    className="nav-links"
                    activeClass="active"
                    to="photography"
                    spy={true}
                    smooth={true}
                    offset={-38}
                    duration={500}
                    >PHOTOGRAPHY</Link>
                
                <Link
                    className="nav-links"
                    activeClass="active"
                    to="webdevelopment"
                    spy={true}
                    smooth={true}
                    offset={-38}
                    duration={500}
                    >WEB DEVELOPMENT</Link>

                <Link
                    className="nav-links"
                    activeClass="active"
                    to="hire"
                    spy={true}
                    smooth={true}
                    offset={-38}
                    duration={500}
                    >HIRE US</Link>

              

                
             </div>   
        )
    }
}
