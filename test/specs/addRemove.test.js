import AddRemovePage from '../pages/addRemove.page'
import { expect } from 'chai'

describe('Add Remove Page test', () => {

    beforeEach( () => {
        AddRemovePage.open()
    })

it('Should add element', () =>{

    if(AddRemovePage.deleteButton.isDisplayed()){
        expect.fail()
    } else {

        AddRemovePage.addButton.click()
        expect(AddRemovePage.deleteButton.isDisplayed()).to.equals(true)
    
    }
})

})