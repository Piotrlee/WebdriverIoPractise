const assert = require ('assert')


describe('webdriver.io page', () => {
    

    beforeEach( () => {
        browser.url('https://webdriver.io');
        
    });


    it('should have the right title', () => {
        
        $('.button=Get Started').click();
        const title = browser.getTitle();
        assert.equal(title , 'Getting Started · WebdriverIO');
        
    });

    it('should open guide', () => {
        $('a=API').click();
        const title = browser.getTitle();
        assert.equal(title , 'API Docs · WebdriverIO');
    });

});