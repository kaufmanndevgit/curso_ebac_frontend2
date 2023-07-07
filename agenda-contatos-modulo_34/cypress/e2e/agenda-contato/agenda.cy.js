///<reference types="cypress" />

describe('Testes para a agenda de contato', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    
    it('Deve preencher o formulario de contato', () => {  
        cy.get('input').should('have.length', 3)
        cy.get('input[type="text"]').type('maria')
        cy.get('input[type="email"]').type('maria@teste.com')
        cy.get('input[type="tel"]').type('11 12345678')
        cy.get('.adicionar').click()

        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('adicionar')
        })

        cy.screenshot('tela-inscrição-preenchido')
    })

    it('Deve editar um contato', () => {
        cy.get('.edit').click({ multiple: true })
        cy.get('input').should('have.length', 3)
        cy.get('input[type="text"]').clear().type('pedro')
        cy.get('input[type="email"]').clear().type('pedro@teste.com')
        cy.get('input[type="tel"]').clear().type('11 12345678')
        cy.get('.alterar').click({ multiple: true })
    
        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('alterar')
        })
            
    })

    it('Deve excluir um contato', () => {
        cy.get('.delete')
    })
})