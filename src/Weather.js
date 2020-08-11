import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Days from './Days';
import Icon from './Icon';
import Geolocation from './Geolocation';

const Weather = () => {

    const [weather, setWeather] = useState({
        day1: {
            city: "",
            sky: "",
            temperature: "",
            wind: ""
        },
        day2: {
            city: "",
            sky: "",
            temperature: "",
            wind: ""
        },
        day3: {
            city: "",
            sky: "",
            temperature: "",
            wind: ""
        },
        day4: {
            city: "",
            sky: "",
            temperature: "",
            wind: ""
        },
        day5: {
            city: "",
            sky: "",
            temperature: "",
            wind: ""
        },
    })
    const [icon, setIcon] = useState()
    const [currentDay, setCurrentDay] = useState({})
    const [coords, setCoords] = useState({
        lat: "",
        lon: ""
    })
    const [query, setQuery] = useState('');
    
    useEffect(() => {
        const fetchWeather = async () => {
            console.log('fetchweather running');
            if (coords.lat !== undefined && coords.lon !== undefined) {
                try {
                    const result = await axios.get("http://api.openweathermap.org/data/2.5/forecast?lat="+coords.lat+"&lon="+coords.lon+"&appid=9034f08116d24af1d2c28f03b352f92b&units=metric")
                    setWeather({
                        day1: {
                            city: result.data.city.name,
                            sky: result.data.list[0].weather[0].description,
                            temperature: Math.round(result.data.list[0].main.temp),
                            wind: Math.round(result.data.list[0].wind.speed*3.6)
                        },
                        day2: {
                            city: result.data.city.name,
                            sky: result.data.list[8].weather[0].description,
                            temperature: Math.round(result.data.list[8].main.temp),
                            wind: Math.round(result.data.list[8].wind.speed*3.6)
                        },
                        day3: {
                            city: result.data.city.name,
                            sky: result.data.list[16].weather[0].description,
                            temperature: Math.round(result.data.list[16].main.temp),
                            wind: Math.round(result.data.list[16].wind.speed*3.6)
                        },
                        day4: {
                            city: result.data.city.name,
                            sky: result.data.list[24].weather[0].description,
                            temperature: Math.round(result.data.list[24].main.temp),
                            wind: Math.round(result.data.list[24].wind.speed*3.6)
                        },
                        day5: {
                            city: result.data.city.name,
                            sky: result.data.list[32].weather[0].description,
                            temperature: Math.round(result.data.list[32].main.temp),
                            wind: Math.round(result.data.list[32].wind.speed*3.6)
                        },
                    })
                } catch(error) {
                    console.log(error)
                }
            }
        }
        fetchWeather()
    }, [coords])

    
    const fetchWeatherInput = async (event) => {
        if (event.key === "Enter") {
            console.log('fetchweatherinput running');
            try {
                const result = await axios.get("http://api.openweathermap.org/data/2.5/forecast?q="+query+"&appid=9034f08116d24af1d2c28f03b352f92b&units=metric")
                setCoords({
                    lat:result.data.city.coord.lat,
                    lon: result.data.city.coord.lon
                })
            } catch(error) {
                console.log(error)
            }
        }
    }

    useEffect(() => {
        setCurrentDay(weather.day1)
    }, [weather])
    

    const chooseDay = (day) => {
        switch (day) {
            case "day1":
                setCurrentDay(weather.day1)
                break;
            case "day2":
                setCurrentDay(weather.day2)
                break;
            case "day3":
                setCurrentDay(weather.day3)
                break;
            case "day4":
                setCurrentDay(weather.day4)
                break;
            case "day5":
                setCurrentDay(weather.day5)
                break;
            default:
            console.log("tenul")
        }
    }


  return (
    <div className="row">
        <input 
        type="text" 
        placeholder="Type a city name"
        onChange={event => setQuery(event.target.value)}
        value={query}
        onKeyPress={fetchWeatherInput}
        />
        <div className="col s12 m6 push-m3">
            <div className="weather card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">{currentDay.city}</span>
                    <Icon
                    icon={icon}
                    setIcon={setIcon} 
                    currentWeather={currentDay.sky}
                    />
                    <span className="temperature">{currentDay.temperature}°</span>
                    <div className="wind">Vent {currentDay.wind}km/h</div>
                </div>
                <Days
                chooseDay={chooseDay}
                />
            </div>
            <Geolocation
            setCoords={setCoords}
            coords={coords}
            />
        </div>
    </div>
  );
}

export default Weather;
