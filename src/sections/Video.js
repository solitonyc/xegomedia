import React, { Component } from 'react';
import './video.css';
import backgroundVideo from './video-sections/bg-video-01.mp4';

export default class Video extends Component {
    render() {
        return (
            <div className='video_section' id='video'>
                <video  autoPlay loop muted id='back_video'>
                        <source src={backgroundVideo} type='video/mp4' />                                           
                </video>
                <div className='video_section_layover' >           
                    <div className='video_headline'>VIDEO</div> 
                    <div className='video_headline_2'>Vividly Tell Your Story</div> 
                    <div className='video_copy'>If a picture says a 1,000 words, <br />then video elevates the story. </div>  
                </div>
            </div>
        )
    }
}
