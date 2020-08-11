import React, {useEffect} from 'react';

const Geolocation = (props) => {

    const getLocation = () => {
        console.log('getlocation running');
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition)
        } else {
            return "Geolocation is not supported by this browser"
        }
    }

    const showPosition = (position) => {
        props.setCoords({
            lat:position.coords.latitude,
            lon: position.coords.longitude
        })
    }

    useEffect(() => {
        getLocation()
    }, [])
    

  return (
    <div className="coords">
        Latitude: {props.coords.lat}<br />
        Longitude: {props.coords.lon}
    </div>

  );
}

export default Geolocation;
