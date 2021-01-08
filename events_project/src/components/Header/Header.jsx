import React from 'react';
import './header.css';
import backgroundimage from '../../images/backgroundimage.png';

const Header = () => {
    return (
        <div className='header_block'>
            <img src = {backgroundimage} className = 'bg-image' alt = 'bg' />
            <div className='header_content'>
                <p>Hang out <br /> with us</p>
            </div>
            {/* <div>
                <input type='search' placeholder='Type here...' className='search' id='input-search' />
            </div> */}
        </div>
    );
};

export default Header;
