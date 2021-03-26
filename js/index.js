"use strict";

const URL = 'https://fierce-castle-50454.herokuapp.com';
//const URL = 'http://localhost:3000';

const userSystem = {
  token: "",
  loggedIn: false,
  async getPosts() {

  },
  async getUser() {

  },
  async login(email, password) {
    //After SUCCESFULL RESPONSE:
      //remove login field
      //getUser
      //getPosts
  }
};

const display = {
  initFields() {
    document.getElementById('loginForm').addEventListener('submit', (e) => {
      e.preventDefault();
      console.log('Get the login fields and login');
    });
  },
  renderContent(posts) {
    
  },
  renderContentError(error) {

  },
  renderLoginError(error) {

  },
  renderUser(avatarUrl, bio, firstName, lastName) {

  },
  renderUserError(error) {

  },
};

display.initFields();