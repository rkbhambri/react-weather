import React from 'react';
import { getCurrentDate, getTemperatureInCelsius } from '../../../helpers/miscellenous';
import './CityDetails.css';

const CityDetails = (props) => {
    const details = {
        city: props.weather.city.name,
        country: props.weather.city.country,
        temperature: props.weather.list[0].main.temp,
        clouds: props.weather.list[0].weather[0].description,
        maxTemp: props.weather.list[0].main.temp_max,
        minTemp: props.weather.list[0].main.temp_min,
        pressure: props.weather.list[0].main.pressure,
        humidity: props.weather.list[0].main.humidity,
        seaLevel: props.weather.list[0].main.sea_level,
        wind: props.weather.list[0].wind.speed,
    };
    return (
        <div className="city-weather-details col-12">
            <h2>{details.city}, {details.country}</h2>
            <h4>{getCurrentDate()}</h4>
            <div className="row mt-4">
                <div className="col-md-4 col-12">
                    <h1>{getTemperatureInCelsius(details.temperature).toFixed()}<sup>o</sup><br /></h1>
                    <h3 className="text-capitalize">{details.clouds}</h3>
                </div>
                <div className="col-md-8 col-12 weather-details border">
                    <div className="row">
                        <h3 className="max-temperature col-md-4 col-6 mt-3 text-center">
                            {getTemperatureInCelsius(details.maxTemp).toFixed()}<sup>o</sup><br />
                            High
                        </h3>
                        <h3 className="min-temperature col-md-4 col-6 mt-3 text-center">
                            {getTemperatureInCelsius(details.minTemp).toFixed()}<sup>o</sup><br />
                            Low
                        </h3>
                        <h3 className="pressure-temperature col-md-4 col-6 mt-3 text-center">
                            {details.pressure}<br />
                            Pressure
                        </h3>
                        <h3 className="humidity col-md-4 col-6 mt-3 text-center">
                            {details.humidity} %<br />
                            Humidity
                        </h3>
                        <h3 className="sea-level col-md-4 col-6 mt-3 text-center">
                            {details.seaLevel} m<br />
                            Sea Level
                        </h3>
                        <h3 className="wind col-md-4 col-6 mt-3 text-center">
                            {details.wind} mph<br />
                            Wind
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CityDetails;