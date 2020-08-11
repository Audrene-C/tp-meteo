import React from 'react';
import Cloundy from './assets/cloudy.svg';
import CloundySun from './assets/cloudy-sun.svg';
import Rainy from './assets/rainy.svg';
import Snowy from './assets/snowy.svg';
import Storm from './assets/storm.svg';
import Sun from './assets/sun.svg';
import Thunder from './assets/thunder.svg';

const Icon = (props) => {

    const changeIcon = (props) => {
        switch (props.currentWeather) {
            case 'clear sky':
                props.setIcon(Sun)
                break;
            case 'few clouds':
                props.setIcon(CloundySun)
                break;
            case 'scattered clouds':
                props.setIcon(CloundySun)
                break;
            case 'broken clouds':
                props.setIcon(Cloundy)
                break;
            case 'overcast clouds':
                props.setIcon(Cloundy)
                break;
            case 'shower rain':
                props.setIcon(Rainy)
                break;
            case 'rain':
                props.setIcon(Rainy)
                break;
            case 'light rain':
                props.setIcon(Rainy)
                break;
            case 'thunderstorm':
                props.setIcon(Thunder)
                break;
            case 'snow':
                props.setIcon(Snowy)
                break;
            case 'mist':
                props.setIcon(Storm)
                break;
            default:
                props.setIcon("")        
        }
    }

    changeIcon(props);

  return (
    <p><img src={props.icon} alt={props.currentWeather}/></p>
  );
}

export default Icon;
