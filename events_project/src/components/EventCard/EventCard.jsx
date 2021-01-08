import React from 'react';
import QRCode from 'qrcode.react';
import './EventCard.css';

import imageCard from '../../images/image.png';
import { eventTypes } from '../../constants/other';

function EventCard({ item }) {
    return (
        <div className='eventCard'>
            <div className='eventPhoto'>
                {item.logo ?
                    <img src = {item.logo} className='photo' alt='event' />
                    :
                    <img src ={imageCard} alt='empty'/>
                }
            </div>
            <div className='eventInfo'>
                <p><b>Event name:</b> {item.name}</p>
                <p><b>Type:</b> {eventTypes[item.type]}</p>
                <p><b>Description:</b> {item.description}</p>
                <p><b>Date:</b> {item.date.format('DD.MM.YYYY')}</p>
                <p><b>Time:</b> {item.date.format('HH:mm')}</p>
                {item.link && <p><b>Link:</b> <a href = {item.link}>{item.link}</a></p>}
            </div>
            {item.link &&  
            <div className='qrWrapper'>
                <QRCode
             value={item.link} 
             size={200}
             fgColor='#dc3545'
             bgColor='#191c1f'
             />
            </div>}
        </div>
    );
}

export default EventCard;
