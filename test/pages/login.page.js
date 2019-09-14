import Page from './page'

class Login extends Page{

    open () {
        super.open('login');
    }

    get username() { return $('#username')}
    get password() { return $('#password')}
    get loginButton() { return $('[class="fa fa-2x fa-sign-in"]') }
    get loginInformation() { return $('#flash').getText(); }


}

export default new Login();