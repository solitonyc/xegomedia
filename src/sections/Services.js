import React, { Component } from 'react';
import './services.css';
import iconImage04 from './images-sections/icon-branding.png';
import iconImage03 from './images-sections/icon-webdev.png';
import iconImage02 from './images-sections/icon-photography.png';
import iconImage01 from './images-sections/icon-video.png';

export default class Services extends Component {
    render() {
        return (
            <div className='services_section' id='services'>
                <div className='services_background'>
                    <div className='services_content_container'>
                        <div className='services_box_container'>
                            <div className='services_box'>
                                <img className='services_icon' alt='' src={iconImage04} />
                                <div className='services_box_headline'>BRANDING</div>
                                <div className='services_box_text'>The science of Branding goes well beyond just creating cool logos.</div>
                            </div>
                            <div className='services_box'>
                                <img className='services_icon' alt='' src={iconImage01} />
                                <div className='services_box_headline'>VIDEO</div>
                                <div className='services_box_text'>Video communicates your BRAND's story like no other medium.</div>
                            </div>
                            <div className='services_box'>
                                <img className='services_icon' alt='' src={iconImage02} />
                                <div className='services_box_headline'>PHOTOGRAPHY</div>
                                <div className='services_box_text'>Photography burns your BRAND into the public's memory.</div>
                            </div>
                            <div className='services_box'>
                                <img className='services_icon' alt='' src={iconImage03} />
                                <div className='services_box_headline'>WEB DESIGN</div>
                                <div className='services_box_text'>Let's convert your gained attention into valuable traffic.</div>
                            </div>
                           
                        </div>
                        
                    </div>
                </div>

                
            </div>
        )
    }
}
