import { WeatherRepository } from '../../src/repositories/repository';
import { GetDayUseCase } from '../../src/usecases/date.usecase';
import { DATA } from "../fixtures/weather-data";
jest.mock('../../src/repositories/repository.js');

describe('Data from Weather', ()=>{
    describe('search weather for name of city and date', () =>{
       beforeEach(() => {
            WeatherRepository.mockClear();
        })
        it('should execute correct', async () =>{
            WeatherRepository.mockImplementation(()=>{
                return {
                    getDay: () => {
                        return DATA;
                    }
                }
            })
            const usecase = new GetDayUseCase();
            const weather = await usecase.execute('London', '2022-05-11');
    
            expect(weather).toEqual(DATA);
        })
    });
    });