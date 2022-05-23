import { WeatherRepository } from '../../src/repositories/repository';
import { AllDataUseCase } from '../../src/usecases/data.name.usecase';
import { DATA } from "../fixtures/weather-data";
jest.mock('../../src/repositories/repository.js');

describe('Data from Weather', ()=>{
    describe('search weather for name of cities', () =>{
       beforeEach(() => {
            WeatherRepository.mockClear();
        })
        it('should execute correct', async () =>{
            WeatherRepository.mockImplementation(()=>{
                return {
                    getAllData: () => {
                        return DATA;
                    }
                }
            })
            const usecase = new AllDataUseCase();
            const weather = await usecase.execute('London');
    
            expect(weather).toEqual(DATA);
        })
    })
})