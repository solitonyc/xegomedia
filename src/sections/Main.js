import React, { Component } from 'react';
import './main.css';
import mainBgImage from './images-sections/BgMain.jpg';
import bigLogo from './images-sections/wings-logo.png';

export default class Main extends Component {
    render() {
        let style = {
            backgroundImage: `url(${mainBgImage})`
        }
        return (
            <div className='main_section' id='main'>
                <div style={style} className='main_section_background' >
                    <div className='main_content_container'>
                        <img className='main_logo' alt='' src={bigLogo} />  
                        <div className='main_headline'>CAPTURE LIFE VIVIDLY</div>
                        <div className='main_headline_2'>This site is Under Construction</div>
                        <div className='main_copy'>Main copy liquip commodo consectetur nisi esse nulla irure duis laboris.</div>
                    </div>
                </div>
                
            </div>
        )
    }
}
