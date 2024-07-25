import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./search.css";

function Search({ updateInfo }) {
    const [city, setCity] = useState("");
    const [error, setError] = useState(false);

   

    async function getWeatherInfo() {
        try {
            const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"04068023def03ff16fcded3cb67dcec3"}&units=metric`);
            const data = await api.json();

            const result = {
                city: city,
                temp: data.main.temp,
                tempMin: data.main.temp_min,
                tempMax: data.main.temp_max,
                humidity: data.main.humidity,
                feelsLike: data.main.feels_like,
                weather: data.weather[0].description,
            };
            console.log(result);
            updateInfo(result);
            setError(false);
        } catch (err) {
            setError(true);
        }
    }

    function handleChange(event) {
        setCity(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(city);
        getWeatherInfo();
        setCity("");
    }

    return (
        <>
            <h2 className="header">WeatherWhiz</h2>
            <div id="search-box">
                <form onSubmit={handleSubmit}>
                    <div className="search">
                        <TextField id="outlined-basic" label="City Name" variant="outlined" onChange={handleChange} value={city} />
                        &nbsp;&nbsp;
                        <Button variant="outlined" type="submit">Search</Button>
                    </div>
                    {error && <p className="error-message">Data Unavailable!</p>}
                </form>
            </div>
        </>
    );
}

export default Search;
