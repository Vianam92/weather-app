import { WeatherRepository } from "../repositories/repository";
export class AllDataUseCase {

  async execute(city) {
    const repository = new WeatherRepository();
    const data = await repository.getAllData(city);
    return data;
  }
}
