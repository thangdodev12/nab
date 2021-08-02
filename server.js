const { default: axios } = require('axios');
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;
app.use(cors())

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/location', async (req, res) => {
  const { query: { query } } = req;
  const { status, data } = await axios.get(`https://www.metaweather.com/api/location/search/?query=${query}`);
  res.status(status).send({ data: data.splice(0, 5) });
});

app.get('/weather/:id', async (req, res) => {
  const { params: { id } } = req;
  const { status, data } = await axios.get(`https://www.metaweather.com/api/location/${id}`);
  const info = {
    title: data.title,
    time: data.time,
    consolidatedWeather: data.consolidated_weather.map(item => ({
      airPressure: item.air_pressure,
      date: item.applicable_date,
      id: item.id,
      maxTemp: item.max_temp,
      minTemp: item.min_temp,
      weatherState: item.weather_state_abbr,
      weatherStateName: item.weather_state_name,
      windSpeed: item.wind_speed,
    }))
  }
  res.status(status).send({ data:  info });
});