import axios from "axios";


const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "92fc8beeeeb473b28e95be95275d1240";


export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: "metric",
            APPID: API_KEY,
        }
    });

    return data;
}