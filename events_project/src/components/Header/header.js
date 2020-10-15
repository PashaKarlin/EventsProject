import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='header_block'>
            <div className='header_content'>
                Hang out <br /> with us
            </div>
            <div>
                <input type='search' placeholder='Type here...' className='search' id='input-search' />
            </div>
        </div>
    )
}

export default Header;