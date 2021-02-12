import React, { Component } from 'react';
import './hire.css';
import mainBgImage from './images-sections/bg-1.jpg';
import bigLogo from './images-sections/logo-wings.png';

export default class Hire extends Component {
    render() {
        let style = {
            backgroundImage: `url(${mainBgImage})`
        }
        return (
            <div className='hire_section' id='hire'>
                <div style={style} className='hire_section_background' >
                    <div className='hire_content_container'>                       
                        <div className='hire_headline'>HIRE XEGO</div>
                        <img className='hire_logo' alt='' src={bigLogo} /> 
                        <div className='hire_headline_2'>Contact us for a Consultation</div>                        
                        <div className='hire_copy'><span id='bold_this'>Email:</span> sales@xegomedia.com<br /><span id='bold_this'>Phone:</span> (646) 403.7500</div>
                    </div>
                </div>
                
            </div>
        )
    }
}

