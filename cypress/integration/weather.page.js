/// <reference types="Cypress" />

beforeEach(() => {
    cy.intercept('GET', 'https://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q="London"&days=3&alert=yes', {fixture: './../../test/fixtures/weather-data.json'})
})

it('user go home', () => {
    cy.visit('/weather');
    cy.get('weather-app').shadow().find('a').visit('/')
})

it('user search for name of city', () => {

    cy.visit('/weather');
    cy.get('weather-app').shadow().find('.btnSearch').click();
    cy.get('weather-app').shadow().find('input[name=search]').type('London')
    cy.wait(0)
})
it('user search for name and date', () => {
    cy.visit('/weather');
    cy.get('weather-app').shadow().find('.btnSearch').click();
    cy.get('weather-app').shadow().find('.searchDate').type('2022-05-24');
    cy.wait(0)
})
it('user click change time', () => {
    cy.visit('/weather');
    cy.get('weather-app').shadow().find('.btnSearch').click();
    cy.get('weather-app').shadow().find('.btn').click();
})
it('user click reset', () => {
    cy.visit('/weather');
    cy.get('weather-app').shadow().find('.btnSearch').click();
    cy.get('weather-app').shadow().find('.reset').click();
})


