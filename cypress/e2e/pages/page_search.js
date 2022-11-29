class pageSearch{

    visitAmazonSite(){
        cy.visit('https://amazon.com/');
    }

    clickSearchBar(){
        cy.get('#twotabsearchtextbox').click();
    }

    inputSearchBar(string){
        cy.get('#twotabsearchtextbox').type(string);
    }

    clickSearchSubmit(){
        cy.get('#nav-search-submit-button').click();
    }

    resultsSearch(){
        cy.get('.sg-col-14-of-20 > div:nth-child(1) > div:nth-child(1)').should('contain.text', '1-16 of over 9,000 results for "computer"');
    }

    resultsDepartmentSearch(){
        cy.get('span:nth-child(1) > a:nth-child(1) > span:nth-child(1)').should('contain.text', 'Computers & Tablets');
    }

    clickBrandsDell(){
        cy.get('#p_89\\/Dell > span:nth-child(1) > a:nth-child(1) > div:nth-child(1) > label:nth-child(1) > i:nth-child(2)').click();
    }

    resultTitleContainsDell(){
        cy.get('div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h2:nth-child(1) > a:nth-child(1) > span:nth-child(1)').should('contain.text', 'Dell Latitude 3180 Education 11.6 HD Laptop PC - Intel Celeron N3350 2.4GHz, 4GB, 64GB SSD, Bluetooth, Windows 10 Professional (Renewed)');
        cy.saveUrl();
    }
}

module.exports = new pageSearch();