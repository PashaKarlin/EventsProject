import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import Switch from 'react-switch';
import Header from './components/Header/Header.jsx';
import MapComponent from './components/Map/MapComponent.jsx';
import EventCard from './components/EventCard/EventCard.jsx';
import { getEventsList } from './actions/Events'

function App() {
    const [mode, setMode] = useState(false);
    const [filterType, setFilterType] = useState(false);
    const events = useSelector(state => state.events.events);
    const dispatch = useDispatch()

    // useEffect(async ()=>{

    //     getEventsList({
    //         dispatch
    //     })
    //     console.log('abc')
    // })

    useEffect(() => {
        const loadSpots = async () => {
            getEventsList({
                dispatch
            })
        };
        loadSpots();
    }, [dispatch]);

    const changeState = () => {
        setMode(!mode);
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
                <p className={`labelText${!mode ? ' checkedLabel' : ''}`}>MAP</p>
                <Switch
                    onChange={changeState}
                    checked={mode}
                    onColor='#dc3545'
                    offColor='#dc3545'
                    uncheckedIcon={false}
                    checkedIcon={false}
                    offHandleColor='#27292c'
                    onHandleColor='#27292c'
                />
                <p className={`labelText${mode ? ' checkedLabel' : ''}`}>EVENTS</p>
            </div>
            {!mode ?
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
                    <div className='eventsBlock'>
                        {events.filter(filterFunc).map(renderEvent)}
                    </div>
                </div>
            }
        </div>
    );
}

export default App;
