import React, { Component } from 'react';
import './main.css';
import mainBgImage from './images-sections/bg-10.jpg';
import bigLogo from './images-sections/logo-wings.png';

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
                        <div className='main_headline'>XEGO MEDIA</div>
                        <div className='main_headline_2'>Capture Life Vividly</div>
                        <div className='main_copy'>Main copy liquip commodo consectetur nisi esse nulla irure duis laboris.</div>
                    </div>
                </div>
                
            </div>
        )
    }
}
