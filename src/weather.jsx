import React, { useState, useEffect } from "react";
import { Sun, Droplets, Wind, Thermometer, ThermometerSnowflake, ThermometerSun } from "lucide-react";
import api from "./weatherApi";

function Weather() {
    const [query, setQuery] = useState('')
    const [weather, setWeather] = useState({});
    const [error, setError] = useState('')
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(()=>{
        const timer = setInterval(()=>{
            setCurrentDate(new Date());
        },60000);
        return()=>clearInterval(timer);
    },[]);

    const dateBuilder = (d)=>{
        let months = ['January', 'February', 'March', 'April', 'May',
            'June', 'July', 'August', 'September', 'October', 'November', 'December'
        ]
        let days = ['Sun','Mon', 'Tue', 'Wed', 'Thurs',
            'Fri', 'Sat'
        ]
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        
        let hours = d.getHours().toString().padStart(2,'0');
        let minutes = d.getMinutes().toString().padStart(2,'0');

        return `${day}, ${date} ${month} ${year} | ${hours}:${minutes}`
    }

    useEffect(() => {
        const defaultCity = 'Mumbai';
        fetch(`${api.base}weather?q=${defaultCity}&units=metric&appid=${api.key}`)
            .then(res => res.json())
            .then(result => {
                if (result.cod !== "404") {
                    setWeather(result);
                }
            })
            .catch(err => console.error("Error fetching default city:", err));
    }, []);
    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => setError(''), 3000);
            return () => clearTimeout(timer);
        }
    }, [error]);
    const search = evt => {
        if (evt.key === "Enter") {
            fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
                .then(res => res.json())
                //.then(result=>{console.log(result)});
                .then(result => {
                    if (result.cod === '404') {
                        setError('City not found, Please enter valid city.');
                        setWeather({});
                    }
                    else {
                        setWeather(result);

                        console.log(result)
                    }
                    setQuery('')
                })
        }
    }
    return (
        <div className="bg-[#0f172a] min-h-screen text-white flex flex-col md:flex-row">
            {/* Sidebar */}
            <div className="w-full md:w-20 bg-[#1e293b] flex md:flex-col items-center md:items-start py-4 md:py-6 space-y-0 md:space-y-8 md:rounded-r-3xl">
                <div className="flex flex-row md:flex-col items-center md:space-y-6 space-x-6 md:space-x-0 w-full justify-center md:justify-start">
                    <div className="bg-[#0ea5e9] p-3 rounded-xl">
                        <i className="text-white">☔</i>
                    </div>
                    <div className="flex flex-row md:flex-col md:space-y-6 space-x-6 md:space-x-0 text-gray-400">
                        <div className="flex flex-col items-center">
                            <i>🌧️</i>
                            <p className="text-xs mt-1">Weather</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <i>📍</i>
                            <p className="text-xs mt-1">Cities</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <i>🗺️</i>
                            <p className="text-xs mt-1">Map</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <i>⚙️</i>
                            <p className="text-xs mt-1">Settings</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-4 md:p-6 order-2 md:order-1">
                {/* Search */}
                <div className="w-full flex items-center justify-between">
                    {/* Search Input */}
                    <div className="w-full md:w-2/3">
                        <input
                            type="text"
                            placeholder="Search for cities"
                            className="w-full p-4 rounded-xl bg-[#1e293b] text-gray-300 outline-none"
                            value={query}
                            onChange={e => {
                                setQuery(e.target.value);
                                setError('')
                            }}

                            onKeyPress={search}
                        />
                    </div>

                    {/* Date & Time */}
                    <h2 className="ml-6 text-sm md:text-base text-gray-400 whitespace-nowrap">
                        {dateBuilder(currentDate)}
                    </h2>
                </div>

                {/* Weather Info */}
                {weather.name && weather.sys ? (
                    <div className="flex items-center justify-around mt-8">
                        <div className="flex flex-col items-center">
                            <h1 className="text-5xl font-bold">
                                {weather.name}, {weather.sys.country}
                            </h1>
                            <p className="text-gray-400">{weather?.weather?.[0]?.main}: {weather?.weather?.[0]?.description}</p>
                            <p className="text-6xl mt-2">{Math.round(weather.main.temp)}°C</p>
                        </div>
                        <div className="flex flex-col items-center">
                            {weather?.weather?.[0]?.icon && (
                                <img
                                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
                                    alt={weather.weather[0].description}
                                    className="w-65 h-65"
                                />
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="mt-8 text-center text-gray-400 text-lg">
                        🌍 Search for a city to see the weather
                    </div>
                )}

                {/* Error Popup */}
                {error && (
                    <div className="mt-5 p-3 bg-red-400 text-white text-bold rounded-lg">
                        {error}
                    </div>
                )}
                {/* Today Forecast */}
                {/*DUMMY DATA, NOT IMPLEMENTATED YET*/}
                <div className="mt-6 bg-[#1e293b] p-4 rounded-2xl overflow-x-auto">
                    <h3 className="mb-4 text-gray-300">Today's Forecast</h3>
                    <div className="flex justify-between min-w-[600px] sm:min-w-0">
                        {[
                            { time: "6:00 AM", temp: "25°", icon: "☁️" },
                            { time: "9:00 AM", temp: "28°", icon: "🌤️" },
                            { time: "12:00 PM", temp: "33°", icon: "☀️" },
                            { time: "3:00 PM", temp: "34°", icon: "☀️" },
                            { time: "6:00 PM", temp: "32°", icon: "☀️" },
                            { time: "9:00 PM", temp: "30°", icon: "🌤️" },
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center w-20">
                                <span className="text-2xl">{item.icon}</span>
                                <p className="mt-2">{item.temp}</p>
                                <p className="text-xs text-gray-400">{item.time}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Air Conditions */}
                {weather.main &&(
                <div className="mt-6 bg-[#1e293b] p-4 rounded-2xl">
                    <h3 className="mb-4 text-gray-300">Air Conditions</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <p className="flex items-center text-gray-400"><Thermometer className="mr-2" size={16} /> Real Feel</p>
                            <h4 className="text-xl">{weather.main.feels_like} °C</h4>
                        </div>
                        <div>
                            <p className="flex items-center text-gray-400"><ThermometerSnowflake className="mr-2" size={16} /> Min Temp</p>
                            <h4 className="text-xl">{weather.main.temp_min} °C</h4>
                        </div>
                        <div>
                            <p className="flex items-center text-gray-400"><Wind className="mr-2" size={16} /> Wind</p>
                            <h4 className="text-xl">{(weather.wind.speed*3.6).toFixed(1)} km/h</h4>
                        </div>
                        <div>
                            <p className="flex items-center text-gray-400"><ThermometerSun className="mr-2" size={16} /> Max Temp</p>
                            <h4 className="text-xl">{weather.main.temp_max} °C</h4>
                        </div>
                    </div>
                </div>)}
                
            </div>
            {/* 7-Day Forecast */}
            {/*NOT IMPLEMENTATED YET*/}
            <div className="w-full md:w-64 p-4 md:p-6 bg-[#1e293b] rounded-t-3xl md:rounded-l-3xl order-1 md:order-2">
                <h3 className="mb-6 text-gray-300">7-Day Forecast</h3>
                <div className="space-y-4">
                    {[
                        { day: "Today", weather: "Sunny", temp: "36/22", icon: "☀️" },
                        { day: "Tue", weather: "Sunny", temp: "37/21", icon: "☀️" },
                        { day: "Wed", weather: "Sunny", temp: "37/21", icon: "☀️" },
                        { day: "Thu", weather: "Cloudy", temp: "37/21", icon: "☁️" },
                        { day: "Fri", weather: "Cloudy", temp: "37/21", icon: "☁️" },
                        { day: "Sat", weather: "Rainy", temp: "37/21", icon: "🌧️" },
                        { day: "Sun", weather: "Sunny", temp: "37/21", icon: "☀️" },
                    ].map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center">
                            <div className="flex items-center space-x-3">
                                <span className="text-2xl">{item.icon}</span>
                                <div>
                                    <p className="font-semibold">{item.day}</p>
                                    <p className="text-sm text-gray-400">{item.weather}</p>
                                </div>
                            </div>
                            <p className="text-sm">{item.temp}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Weather;
