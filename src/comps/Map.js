import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({text}) => <div>{text}</div>
const Map = () => {
    const [Map, setMap] = useState({
        center: {
            lat: 46.75,
            lng: 24.66
        },
        zoom: 11
    })
    return (
        <div className="map-wrapper">
            <GoogleMapReact 
                 bootstrapURLKeys={{ key: "AIzaSyBn7ZNmHtxc2U7jk4VE8QsnoajRzEEjvi0" }}
                 defaultCenter={Map.center}
                defaultZoom={Map.zoom}
                yesIWantToUseGoogleMapApiInternals 
            >
            <AnyReactComponent
                lat={46.75}
                lng={24.66}
                text="My Marker"
            />
            </GoogleMapReact>
        </div>
    )
}

export default Map;
