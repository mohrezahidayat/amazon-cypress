class pageCart{

    viewDetails(string){
        cy.get('.product-title-word-break').should('contain.text', string);
    }
    
    selectQty10(){
        cy.get('#a-autoid-4-announce').click();
        cy.get('#quantity_9').click();
    }

    clickAddToCart(){
        cy.get('#add-to-cart-button').click();
    }

    itemsAddedToCart(){
        cy.get('#attach-accessory-cart-total-string').should('contain.text', '(10 items)');
    }

    clickGoToCart(){
        cy.get('#attach-sidesheet-view-cart-button > span:nth-child(1) > input:nth-child(1)').click();
    }

    clickDeleteItems(){
        cy.get('span.a-size-small:nth-child(3) > span:nth-child(1) > input:nth-child(1)').click();
    }

    itemsDeletedFromCart(){
        cy.get('div.a-padding-medium:nth-child(1) > span:nth-child(1)').should('contain.text', 'was removed from Shopping Cart.');
        cy.get('#sc-subtotal-label-activecart').should('contain.text', 'Subtotal (0 items):');
    }

}

module.exports = new pageCart();