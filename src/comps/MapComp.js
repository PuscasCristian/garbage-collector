import React, { useState, useEffect } from 'react';
import {getLocation } from './utils';
import L, { marker, popup } from 'leaflet';
import nextId from 'react-id-generator';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import '../../node_modules/leaflet/dist/leaflet.css';
import PopUpModal from './PopUpModal';

const Icon = L.icon({
    iconUrl: 'https://firebasestorage.googleapis.com/v0/b/garbage-overflown.appspot.com/o/icon-marker-garbage-overflown.svg?alt=media&token=fccbad3d-4ce3-4744-a65d-4474fb1d0c53',
    iconSize: [65, 65],
    iconAnchor: [32.5,65],
    popupAnchor: [0,-70]
});

const MapComp = () => {
    const [location, setLocation ] = useState({
        location: {
            lat: 1.774,
            lng: 2.703,
        },
        zoom: 3
    });
    const [markers, setMarkers] = useState([]);

    useEffect(() => {
        getLocation().then(location => {
            setLocation({
                location: location,
                zoom: 13
            });
        })
    }, []);
    
    const addMarker = e => {
        let data = { 
            lat: e.latlng.lat.toFixed(6),
            lng: e.latlng.lng.toFixed(6),
            id: nextId()
        };
        setMarkers([...markers, data]);
    }
    const openPopup = e => {
        console.log(e);
    }
    return (
        <Map className="map-wrapper" center={location.location} zoom={location.zoom} ondblclick={addMarker} >
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            { markers && markers.map((position, index) => 
                    <Marker onadd={openPopup} position={position} marker_index={index} key={index} icon={Icon}>
                    <Popup onOpen={openPopup}> 
                        <h4>My name is Flasch</h4>
                    </Popup>
                </Marker>
            )}                        
            <PopUpModal />

        </Map>
    )
}

export default MapComp
