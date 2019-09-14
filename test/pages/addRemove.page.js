import Page from "./page";

class AddRemovePage extends Page{

    open(){
        super.open('add_remove_elements/')
    }

    get addButton() { return $('[onclick="addElement()"]') }
    get deleteButton() { return $('[onclick="deleteElement()"]')}

}

export default new AddRemovePage()