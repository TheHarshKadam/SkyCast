import React from "react";
import { Sun, Droplets, Wind, Thermometer } from "lucide-react";

function Weather() {
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
                        />
                    </div>

                    {/* Date & Time */}
                    <h2 className="ml-6 text-sm md:text-base text-gray-400 whitespace-nowrap">
                        Date : 24/08/2025 Time : 23:00
                    </h2>
                </div>

                {/* Weather Info */}
                <div className="flex items-center justify-around mt-8">
                    {/* City Info */}
                    <div className="flex flex-col items-center">
                        <h1 className="text-5xl font-bold">Madrid</h1>
                        <p className="text-gray-400">Chance of rain: 0%</p>
                        <p className="text-6xl mt-2">31°</p>
                    </div>

                    {/* Sun Icon */}
                    <div className="w-40 h-40 bg-yellow-400 rounded-full"></div>
                </div>


                {/* Today Forecast */}
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
                <div className="mt-6 bg-[#1e293b] p-4 rounded-2xl">
                    <h3 className="mb-4 text-gray-300">Air Conditions</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <p className="flex items-center text-gray-400"><Thermometer className="mr-2" size={16} /> Real Feel</p>
                            <h4 className="text-xl">30°</h4>
                        </div>
                        <div>
                            <p className="flex items-center text-gray-400"><Droplets className="mr-2" size={16} /> Chance of rain</p>
                            <h4 className="text-xl">0%</h4>
                        </div>
                        <div>
                            <p className="flex items-center text-gray-400"><Wind className="mr-2" size={16} /> Wind</p>
                            <h4 className="text-xl">0.2 km/h</h4>
                        </div>
                        <div>
                            <p className="flex items-center text-gray-400"><Sun className="mr-2" size={16} /> UV Index</p>
                            <h4 className="text-xl">3</h4>
                        </div>
                    </div>
                </div>
            </div>

            {/* 7-Day Forecast */}
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
