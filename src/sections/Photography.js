import React, { Component } from 'react';
import './photography.css';
import mainBgImage from './images-sections/BgMain.jpg';
import bigLogo from './images-sections/wings-logo.png';

export default class Photography extends Component {
    render() {
        let style = {
            backgroundImage: `url(${mainBgImage})`
        }
        return (
            <div className='photography_section' id='photography'>
                <div style={style} className='photography_section_background' >
                    <div className='photography_content_container'>
                        <img className='photography_logo' alt='' src={bigLogo} />  
                        <div className='photography_headline'>PHOTOGRAPHY SECTION HEADLINE</div>
                        <div className='photography_headline_2'>This is the secondary headline</div>
                        <div className='photography_copy'>Main copy liquip commodo consectetur nisi esse nulla irure duis laboris.</div>
                    </div>
                </div>
            </div>
        )
    }
}
