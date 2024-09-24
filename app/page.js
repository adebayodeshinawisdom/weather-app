"use client"
import React, { useEffect, useState } from 'react'

const page = () => {
const [weather, setWeather] = useState()
const [city, setCity] = useState("Nigeria")

useEffect(()=> {
  const fetchWeather = async() => {
    const apiKey = 'ace9041a797c3d2ca43f6ef25878c51f'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url)
    if(!response.ok){
      throw new Error(`http error!status: ${response.status}`)
    }
    const data = await response.json()
    setWeather(data)
  }
  fetchWeather()
}, [])


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
      <h1 className="text-3xl font-bold text-center text-blue-500 mb-6">Weather App</h1>
      {weather ? (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-center">{weather.name}, {weather.sys.country}</h2>
          <div className="flex justify-center items-center">
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt={weather.weather[0].description} className="w-16 h-16" />
            <p className="text-4xl font-bold ml-4">{weather.main.temp}°C</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <p className="text-gray-700"><strong>Feels Like:</strong> {weather.main.feels_like}°C</p>
            <p className="text-gray-700"><strong>Weather:</strong> {weather.weather[0].description}</p>
            <p className="text-gray-700"><strong>Humidity:</strong> {weather.main.humidity}%</p>
            <p className="text-gray-700"><strong>Wind Speed:</strong> {weather.wind.speed} m/s</p>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-600">Loading...</p>
      )}
    </div>
  </div>
  )
}

export default page