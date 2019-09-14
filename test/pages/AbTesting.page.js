import Page from './page'

class AbTesting {

    open(){
        super.open('abtest');
    }

    get title() { return browser.getTitle(); }
    get expectedHeader() { return $('h3').getText(); } 
}