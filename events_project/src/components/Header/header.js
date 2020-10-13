import React from 'react'
import './header.css'

const Header = () => {
    return (
        <div className='header_block'>
            <div className='header_content'>
                Hang out <br/> with us
            </div>
            <input type='search' placeholder='Type here...' className='search' id='input-search'/>
        </div>
    )
}

export default Header;