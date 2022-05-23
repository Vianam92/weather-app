import axios from "axios";

export class WeatherRepository {
  async getAllData(city="London") {
    return await (
      await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${city}&days=3&alert=yes`)
    ).data;
  }

  async getDay(city= "London", date){
    return await (
      await (await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${city}&dt=${date}`))
    ).data
  }
}
