import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import './photography.css';
import mainBgImage from './images-sections/bg-17.jpg';


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
                        <Router>
                            <Link to={{ pathname: 'https://solitophotography.com' }} rel='noreferrer' className='common_button' target="_blank" >See Photography</Link>
                        </Router>
                    </div>
                </div>
            </div>
        )
    }
}
