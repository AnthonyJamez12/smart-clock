import React from 'react';
const WeatherIcon = ({icon}) =>(
    <div className = "icon_weather">
        <img src = {require('../../images/' + icon + '.png')} width = "150" alt = "weather"/>
    </div>
);

export default WeatherIcon;