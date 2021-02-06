import React, { Component } from 'react';
import './video.css';
import mainBgImage from './images-sections/BgMain.jpg';
import bigLogo from './images-sections/wings-logo.png';

export default class Video extends Component {
    render() {
        let style = {
            backgroundImage: `url(${mainBgImage})`
        }
        return (
            <div className='video_section' id='video'>
                <div style={style} className='video_section_background' >
                    <div className='video_content_container'>
                        <img className='video_logo' alt='' src={bigLogo} />  
                        <div className='video_headline'>VIDEO SECTION HEADLINE</div>
                        <div className='video_headline_2'>This is the secondary headline</div>
                        <div className='video_copy'>Main copy liquip commodo consectetur nisi esse nulla irure duis laboris.</div>
                    </div>
                </div>
            </div>
        )
    }
}
