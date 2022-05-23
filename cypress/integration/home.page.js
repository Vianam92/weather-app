/// <reference types="Cypress" />

it('user change to Weather Page', () => {
cy.visit('/')
cy.get('home-page').shadow().find('header').contains('a')
cy.get('home-page').shadow().find('a').visit('/weather')
})

it('user visit my github page', () => {
cy.visit('/')
cy.get('home-page').shadow().find('footer').contains('a').visit('//github.com/Vianam92')
})

