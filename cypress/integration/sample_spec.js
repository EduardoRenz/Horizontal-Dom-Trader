describe("My First Test",()=>{
    it("Check if page is ok!",()=>{
        cy.visit("http://localhost:5000/")

        cy.title().should("eq","Horizontal Order Flow")
    });

    it("Makes Seguir ultimo preço be active",()=>{
        cy.get("button[data-title='Seguir o ultimo preço']").click().should("have.class","active")
    })

    it("Write a note",()=>{
        // find any button with class edit-icon
        cy.get(".edit-icon").first().click()

        // find the first input that is active
        cy.get("input[type='text']:visible").type("Teste de nota").type('{enter}')

        // find text input with value "Teste de nota"
        cy.get("input[type='text']").should("exist")

        // find text input with value "Teste de nota" and change to empty value
        cy.get("input[type='text']").first().clear().type('{enter}')

        // no input should contains "Teste de nota"
        cy.get("input").should("not.contain","Teste de nota")



    })
})