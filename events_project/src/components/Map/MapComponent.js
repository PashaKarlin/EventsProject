import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import './MapComponent.css'

const MapComponent = () => {
    const position = [50.45012649, -329.47622538]
    return (
        <div className = 'mapWrapper'>
            <Map center={position} zoom={13} className = 'map'>
                <TileLayer
                    url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}
                    attribution={`&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors`}
                />
                <Marker position={position} >
                    <Popup>Тут будет информация<br />о событии</Popup>
                </Marker>

            </Map>
            <div className = 'buttons'>
                <button className = 'btn btn-danger'>Partying</button>
                <button className = 'btn btn-danger'>Drinking</button>
                <button className = 'btn btn-danger'>Dancing</button>
                <button className = 'btn btn-danger'>Eating</button>
            </div>
        </div>

    )
}

export default MapComponent;