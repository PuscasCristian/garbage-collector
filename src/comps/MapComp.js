import React, { useState } from 'react';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup, LeafletConsumer } from 'react-leaflet';
import '../../node_modules/leaflet/dist/leaflet.css';


const icon = L.icon({
    iconUrl: 'https://firebasestorage.googleapis.com/v0/b/garbage-overflown.appspot.com/o/icon-marker-garbage-overflown.svg?alt=media&token=fccbad3d-4ce3-4744-a65d-4474fb1d0c53',
    iconSize: [60, 60],
    iconAnchor: [30,60],
    popupAnchor: [0,-65]
});

const MapComp = () => {
    const [map, setMap ] = useState({
        lat: 46.774,
        lng: 24.703,
        zoom: 14
    });
    return (
        <Map className="map-wrapper" center={[map.lat, map.lng]} zoom={map.zoom}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[46.774, 24.703]} icon={icon}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </Map>
    )
}

export default MapComp
