class Page {

    open(path) {
        browser.url(path);
    }

    login (username, password, loginButton){
        this.username.addValue(username);
        this.password.addValue(password);
        this.loginButton.click()
    }
}

export default Page;