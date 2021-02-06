import React, { Component } from 'react';
import './webdevelopment.css';
import mainBgImage from './images-sections/BgMain.jpg';
import bigLogo from './images-sections/wings-logo.png';

export default class Webdevelopment extends Component {
    render() {
        let style = {
            backgroundImage: `url(${mainBgImage})`
        }
        return (
            <div className='webdev_section' id='webdevelopment'>
                <div style={style} className='webdev_section_background' >
                    <div className='webdev_content_container'>
                        <img className='webdev_logo' alt='' src={bigLogo} />  
                        <div className='webdev_headline'>WEB DEVELOPMENT SECTION HEADLINE</div>
                        <div className='webdev_headline_2'>This is the secondary headline</div>
                        <div className='webdev_copy'>Main copy liquip commodo consectetur nisi esse nulla irure duis laboris.</div>
                    </div>
                </div>
            </div>
        )
    }
}
