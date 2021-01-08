import React, { useState } from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import Switch from 'react-switch';
import Header from './components/Header/Header';
import MapComponent from './components/Map/MapComponent';
import EventCard from './components/EventCard/EventCard';
import { events } from './constants/other';

function App() {
    const [ state, setState ] = useState(false);
    const [ filterType, setFilterType ] = useState(false);


    const changeState = () => {
        setState(!state);
    };

    const renderEvent = (item) => {
        return (
            <EventCard
                item={item}
            />
        );
    };

    const changeFilterType = key => () => {
        setFilterType(key);
    };

    const filterFunc = (item) => {
        if (filterType) {
            if (item.type === filterType) return true;

            return false;
        }

        return true;
    };


    return (
        <div className='App'>
            <Header />
            <div className='switchWrapper'>
                <p className={`labelText${!state ? ' checkedLabel' : ''}`}>MAP</p>
                <Switch
                    onChange={changeState}
                    checked={state}
                    onColor='#dc3545'
                    offColor='#dc3545'
                    uncheckedIcon={false}
                    checkedIcon={false}
                    offHandleColor='#27292c'
                    onHandleColor='#27292c'
                />
                <p className={`labelText${state ? ' checkedLabel' : ''}`}>EVENTS</p>
            </div>
            {!state ?
                <MapComponent
                    events={events}
                    filterType={filterType}
                    setFilterType={setFilterType}
                /> :
                <div className='eventsBlockWrapper'>
                    <div className='event-buttons buttons'>
                        <button
                            className='btn btn-danger'
                            onClick={changeFilterType('party')}
                        >Partying</button>
                        <button
                            className='btn btn-danger'
                            onClick={changeFilterType('drink')}
                        >Drinking</button>
                        <button
                            className='btn btn-danger'
                            onClick={changeFilterType('dance')}
                        >Dancing</button>
                        <button
                            className='btn btn-danger'
                            onClick={changeFilterType('eat')}
                        >Eating</button>
                        <button
                            className='btn btn-danger'
                            onClick={changeFilterType(false)}
                        >Clear filter</button>
                    </div>
                    <div className = 'eventsBlock'>
                        {events.filter(filterFunc).map(renderEvent)}
                    </div>
                </div>
            }
        </div>
    );
}

export default App;
