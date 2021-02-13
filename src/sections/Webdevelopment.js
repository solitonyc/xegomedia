import React, { Component } from 'react';
import './webdevelopment.css';
import mainBgImage from './images-sections/bg-16.jpg';


export default class Webdevelopment extends Component {
    render() {
        let style = {
            backgroundImage: `url(${mainBgImage})`
        }
        return (
            <div className='webdev_section' id='webdevelopment'>
                <div style={style} className='webdev_section_background' >
                    <div className='webdev_content_container'>
                        <div className='webdev_headline'>WEB DESIGN</div>
                        <div className='webdev_headline_2'>Capture Traffic Effectively</div>
                        <div className='webdev_copy'>Fully crafted brand? Check.<br />Great video? Check. <br />Great photography? Check. <br />Web site? </div>
                    </div>
                </div>
            </div>
        )
    }
}
