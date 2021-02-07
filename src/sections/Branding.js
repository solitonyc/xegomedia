import React, { Component } from 'react';
import './branding.css';
import mainBgImage from './images-sections/BgMain.jpg';
// import bigLogo from './images-sections/wings-logo.png';

export default class Branding extends Component {
    render() {
        let style = {
            backgroundImage: `url(${mainBgImage})`
        }
        return (
            <div className='branding_section' id='branding'>
                <div style={style} className='branding_section_background' >
                    <div className='branding_content_container'>
                        {/* <img className='branding_logo' alt='' src={bigLogo} />   */}
                        <div className='branding_headline'>BRANDING</div>
                        <div className='branding_headline_2'>Cultivate Lasting Impressions</div>
                        <div className='branding_copy'>Main copy liquip commodo consectetur nisi esse nulla irure duis laboris.</div>
                    </div>
                </div>
            </div>
        )
    }
}
