import React, { Component } from 'react';

import videobBgImage from './images-sections/bg-13.jpg';

import './videob.css';

export default class VideoB extends Component {
    render() {
        let style = {
            backgroundImage: `url(${videobBgImage})`
        }
        return (
            <div className='videob_section' id='video'>
                <div style={style} className='videob_section_background' >
                    <div className='videob_content_container'>
                        <div className='videob_headline'>VIDEO</div>
                        <div className='videob_headline_2'>Vividly Tell Your Story</div> 
                        <div className='videob_copy'>If a picture says a 1,000 words, <br />then video elevates the story. </div>  
                    </div>
                </div>
                
            </div>
        )
    }
}
