import { WeatherRepository } from "../repositories/repository";

export class GetDayUseCase {

  async execute(city, date) {
    const weatherDate = new WeatherRepository();
    const data = await weatherDate.getDay(city, date);
    return data;
  }
}
