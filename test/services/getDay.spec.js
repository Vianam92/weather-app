import { GetDate } from "../../src/services/service.getDate";
/*import { WeatherRepository } from "../../src/repositories/repository";
import { AllDataUseCase } from "../../src/usecases/data.name.usecase";
import { WEATHER_DATA } from "../fixtures/weather-data";
import { GetDataClean } from "../../src/services/services.cleanData";*/

describe('get Day', () => {

    it('get Date', ()=>{
        const date = new Date();
        const resultDate = GetDate.getDate();
        const resultForm = `${date.getDate()}-${ ('0' + (date.getMonth() + 1)).slice(-2)}-${date.getFullYear()}`
        expect(resultDate).toEqual(resultForm);
    });
})