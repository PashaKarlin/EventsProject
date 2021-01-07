import React from 'react'
import './Header.css'
// import logo from '../../images/logo.png'
const Header = () => {
    return (
        <div className='header_block'>
            {/* <img src = {logo} className = 'logo'></img> */}
            <div className='header_content'>
                Hang out <br /> with us
            </div>
            {/* <div>
                <input type='search' placeholder='Type here...' className='search' id='input-search' />
            </div> */}
        </div>
    )
}

export default Header;