import React, { useState } from 'react';
import { debounce, isObjectEmpty, isEmpty } from '../../helpers/miscellenous';
import cityList from '../../city-list.json';
import NoDataFound from '../NoDataFound/NoDataFound';
import Search from '../Search/Search';
import CityDetails from './CityDetails/CityDetails';

const Content = (props) => {

    const [suggestions, setSuggestions] = useState([]);
    const [cityDetails, setCityDetails] = useState({});

    const searchCity = debounce((value) => {
        let suggestionsData = [];
        if (!isEmpty(value)) {
            suggestionsData = cityList.filter((item) => {
                return item.name.toLowerCase().search(value.toLowerCase()) !== -1;
            });
        }

        setSuggestions(suggestionsData.slice(0, 5));
    }, 1000);

    const getWeatherDetails = (cityId) => {
        fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=ff5d084541aac5b27ef0f46c449da8ca`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setCityDetails(data);
                setSuggestions([]);
            })
    };

    return (
        <div className="content h-100 pt-5 col-md-10 col-12 offset-md-1 pb-3">
            <div className="search-city col-md-6 offset-md-3">
                <Search placeholder={'Search City'} search={(value) => searchCity(value)} />
                <div className="suggestions">
                    {
                        suggestions.map(item => {
                            return (
                                <div
                                    className="font-weight-bold border-left border-right border-bottom p-3"
                                    key={item.id}
                                    onClick={() => getWeatherDetails(item.id)}
                                    style={{ color: '#ccc' }}>
                                    {item.name}, {item.country}
                                </div>
                            );
                        })
                    }
                </div>
            </div><br /><br />
            {!isObjectEmpty(cityDetails) && <CityDetails weather={cityDetails} />}
            {isObjectEmpty(cityDetails) && <NoDataFound text="No City Selected. Please select city" />}
        </div>
    );
};

export default Content;
