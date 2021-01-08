import React, { useRef, useEffect } from 'react';
import { Map, Marker, Popup, TileLayer, FeatureGroup } from 'react-leaflet';
import { iconPerson, iconEat, iconDance, iconParty, iconDrink } from './icons';
import './MapComponent.css';

const MapComponent = ({
    events,
    filterType,
    setFilterType
}) => {
    const mapRef = useRef();
    const groupRef = useRef();
    const position = [ 50.45012649, -329.47622538 ];

    const logos = {
        eat   : iconEat,
        drink : iconDrink,
        party : iconParty,
        dance : iconDance
    };

    useEffect(() => {
        const map = mapRef.current.leafletElement;
        const group = groupRef.current;

        if (group) map.fitBounds(group.leafletElement.getBounds());
    });

    const filterFunc = (item) => {
        if (filterType) {
            if (item.type === filterType) return true;

            return false;
        }


        return true;
    };

    const changeFilterType = key => () => {
        setFilterType(key);
    };

    const whenMapReady = () => {
        const map = mapRef.current.leafletElement;
        const group = groupRef.current.leafletElement;

        map.fitBounds(group.getBounds());
    };

    return (
        <div className='mapWrapper'>
            <Map
                center={position}
                zoom={13}
                className='map'
                ref={mapRef}
                whenReady={whenMapReady}
            >
                <TileLayer
                    url={'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'}
                    attribution={'&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'}
                />
                <FeatureGroup
                    ref={groupRef}
                >
                    <Marker
                        icon={iconPerson}
                        position={position}
                    >
                        <Popup>Тут будет информация<br />о событии</Popup>
                    </Marker>
                    {events.filter(filterFunc).map(item => {
                        return (
                            <Marker
                                position={[ item.location.lat, item.location.lon ]}
                                icon = {logos[item.type]}
                            >
                                <Popup>Тут будет информация<br />о событии</Popup>
                            </Marker>
                        );
                    })}
                </FeatureGroup>

            </Map>
            <div className='buttons'>
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
        </div>

    );
};

export default MapComponent;
