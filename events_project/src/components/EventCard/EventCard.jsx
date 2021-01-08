import React from 'react';
import './EventCard.css';

import imageCard from '../../images/image.png';
import { eventTypes } from '../../constants/other';

function EventCard({ item }) {
    return (
        <div className='eventCard'>
            <div className='eventPhoto'>
                {item.logo ?
                    <img src = {item.logo} className='photo' />
                    :
                    <img src ={imageCard} />
                }
            </div>
            <div className='eventInfo'>
                <p><b>Event name:</b> {item.name}</p>
                <p><b>Type:</b> {eventTypes[item.type]}</p>
                <p><b>Description:</b> {item.description}</p>
                <p><b>Date:</b> {item.date.format('DD.MM.YYYY')}</p>
                <p><b>Time:</b> {item.date.format('HH:mm')}</p>
            </div>
        </div>
    );
}

export default EventCard;
