import React, { useState } from 'react';
import { debounce, isObjectEmpty } from '../../helpers/miscellenous';
// import cityList from '../../city-list.json';
import { details } from '../../a';
import Search from '../Search/Search';
import CityDetails from './CityDetails/CityDetails';

const Content = (props) => {
    const cityList = details

    const [suggestions, setSuggestions] = useState([]);
    const [cityDetails, setCityDetails] = useState(details);

    const searchCity = debounce((value) => {
        let suggestionsData = cityList.filter((item) => {
            return item.name.toLowerCase().search(value.toLowerCase()) !== -1;
        });
        setSuggestions(suggestionsData.slice(0, 5));
    }, 100);

    const getWeatherDetails = (cityId) => {
        fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=ff5d084541aac5b27ef0f46c449da8ca`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                // const weatherInfo = {
                //     city: data.city.name,
                //     country: data.city.country,
                //     description: data.list.weather[0].description,
                //     main: data.list.weather[0].main,
                //     temp: data.list.main.temp,
                //     highestTemp: data.list.main.temp_max,
                //     lowestTemp: data.list.main.temp_min,
                //     clouds: data.clouds.all,
                //     humidity: data.main.humidity,
                //     wind: data.wind.speed,
                //     forecast: data.list,
                // };
                console.log('===data====', data);
                setCityDetails(data);
                setSuggestions([]);
            })
    };
    console.log(cityDetails);

    return (
        <div className="content pt-5 col-md-10 offset-1">
            <div className="search-city col-md-6 offset-md-3">
                <Search placeholder={'Search City'} search={(value) => searchCity(value)} />
                {
                    suggestions.map(item => {
                        return (
                            <div
                                className="font-weight-bold border-left border-right border-bottom p-3"
                                onClick={() => getWeatherDetails(item.id)}>
                                {item.name}, {item.country}
                            </div>
                        );
                    })
                }
            </div><br /><br />
            {!isObjectEmpty(cityDetails) && <CityDetails weather={cityDetails} />}
        </div>
    );
};

export default Content;
