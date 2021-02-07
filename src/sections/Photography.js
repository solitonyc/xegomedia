import React, { Component } from 'react';
import './photography.css';
import mainBgImage from './images-sections/BgMain.jpg';


export default class Photography extends Component {
    render() {
        let style = {
            backgroundImage: `url(${mainBgImage})`
        }
        return (
            <div className='photography_section' id='photography'>
                <div style={style} className='photography_section_background' >
                    <div className='photography_content_container'>                        
                        <div className='photography_headline'>CAPTURE MOMENTS VIVIDLY</div>
                        <div className='photography_headline_2'>This is the secondary headline</div>
                        <div className='photography_copy'>Main copy liquip commodo consectetur nisi esse nulla irure duis laboris.</div>
                    </div>
                </div>
            </div>
        )
    }
}
