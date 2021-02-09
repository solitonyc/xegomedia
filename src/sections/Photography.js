import React, { Component } from 'react';
import './photography.css';
import mainBgImage from './images-sections/bg-4.jpg';


export default class Photography extends Component {
    render() {
        let style = {
            backgroundImage: `url(${mainBgImage})`
        }
        return (
            <div className='photography_section' id='photography'>
                <div style={style} className='photography_section_background' >
                    <div className='photography_content_container'>                        
                        <div className='photography_headline'>PHOTOGRAPHY</div>
                        <div className='photography_headline_2'>Capture Lasting Moments</div>
                        <div className='photography_copy'>Shape your BRAND using captivating photos and accent imagery.</div>
                    </div>
                </div>
            </div>
        )
    }
}
