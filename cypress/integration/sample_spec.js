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

    it("Change colors",()=>{
        // get button with tag name "colors"
        cy.get("button[name='colors']").click()
        cy.get(".content > .option-modal")

        // find the first input of type number that is active and set value to 1
        cy.get("input[type='number']:visible").first().clear().type(1).type('{enter}')

        // find any element tha style is style="background: rgb(5, 158, 92) none repeat scroll 0% 0%; color: rgb(255, 255, 255);"
        cy.get("span[style='background: rgb(5, 158, 92) none repeat scroll 0% 0%; color: rgb(255, 255, 255);']")

        // get a checkbox with id destaque_ofertas
        cy.get("input[id='destaque_ofertas']").click()
        // now the checkbox should be unchecked
        cy.get("input[id='destaque_ofertas']").should("not.be.checked")

        // element with style="background: rgb(5, 158, 92) none repeat scroll 0% 0%; color: rgb(255, 255, 255);" not exist
        cy.get("span[style='background: rgb(5, 158, 92) none repeat scroll 0% 0%; color: rgb(255, 255, 255);']").should("not.exist")

        // click outside the modal
        cy.get(".overlay-background:visible").click()

    })
})