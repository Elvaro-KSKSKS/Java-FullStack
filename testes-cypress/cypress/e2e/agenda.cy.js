/// <reference types="cypress" />

describe('Testes para a agenda', () => {
  beforeEach(() => {
    cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
  })

  it('Deve permitir inserir um novo contato', () => {
    cy.get('[type="text"]').type('teste')
    cy.get('[type="email"]').type('teste@gmail.com')
    cy.get('[type="tel"]').type('1234567890')
    cy.get('.adicionar').click()

    cy.get('.sc-iAEyYk').should('contain', 'teste')
  })

  it('Deve permitir editar um contato', () => {
    cy.get('.sc-iAEyYk').find('.edit').last().click()
    cy.get('[type="text"]').type(' editado')
    cy.get('.alterar').click()

    cy.get('.sc-iAEyYk').should('contain', 'teste editado')
  })

  it('Deve permitir excluir um contato', () => {
    cy.get('.sc-iAEyYk').find('.delete').last().click()

    cy.get('.sc-iAEyYk').contains('teste editado').should('not.exist')
  })
})