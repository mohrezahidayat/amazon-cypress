class pageDetails{

    resultSearchDisplayed(){
        cy.getUrl();
    }
    
    clickDetails(){
        cy.get('div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h2:nth-child(1) > a:nth-child(1) > span:nth-child(1)').should('contain.text', 'Dell Latitude 3180 Education 11.6 HD Laptop PC - Intel Celeron N3350 2.4GHz, 4GB, 64GB SSD, Bluetooth, Windows 10 Professional (Renewed)').click();
    }

    viewDetails(){
        cy.get('.product-title-word-break').should('contain.text', 'Dell Latitude 3180 Education 11.6 HD Laptop PC - Intel Celeron N3350 2.4GHz, 4GB, 64GB SSD, Bluetooth, Windows 10 Professional (Renewed)');
    }
}

module.exports = new pageDetails();