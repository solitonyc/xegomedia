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
                        <div className='services_headline'>Services</div>
                        <div className='services_box_container'>
                            <div className='services_box'>
                                <img className='services_icon' alt='' src={iconImage01} />
                                <div className='services_box_headline'>Video</div>
                                <div className='services_box_text'>Aliquip pariatur nostrud tempor do in aliquip occaecat ullamco sint.</div>
                            </div>
                            <div className='services_box'>
                                <img className='services_icon' alt='' src={iconImage02} />
                                <div className='services_box_headline'>Photography</div>
                                <div className='services_box_text'>Aliquip pariatur nostrud tempor do in aliquip occaecat ullamco sint.</div>
                            </div>
                            <div className='services_box'>
                                <img className='services_icon' alt='' src={iconImage03} />
                                <div className='services_box_headline'>Web Development</div>
                                <div className='services_box_text'>Aliquip pariatur nostrud tempor do in aliquip occaecat ullamco sint.</div>
                            </div>
                            <div className='services_box'>
                                <img className='services_icon' alt='' src={iconImage04} />
                                <div className='services_box_headline'>Branding</div>
                                <div className='services_box_text'>Aliquip pariatur nostrud tempor do in aliquip occaecat ullamco sint.</div>
                            </div>
                        </div>
                        
                    </div>
                </div>

                
            </div>
        )
    }
}
