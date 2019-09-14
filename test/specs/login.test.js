import Login from '../pages/login.page';
import { expect } from 'chai';

describe('Login page', () => {
    

    beforeEach( () => {
        Login.open();
        
    });


    it('should allow login with correct credentials', () => {
        
        Login.login('tomsmith', 'SuperSecretPassword!', Login.loginButton)
        expect(Login.loginInformation).to.equals('You logged into a secure area!\n×')
       
        
    });

    it('should NOT allow login with incorrect credentials', () => {
        
        Login.login('incorrect', 'credentials!', Login.loginButton)
        expect(Login.loginInformation).to.equals('Your username is invalid!\n×')
       
        
    });


});