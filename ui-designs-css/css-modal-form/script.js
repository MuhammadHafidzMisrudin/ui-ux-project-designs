// JS & Jquery implementations.

$(function () {
    const signupModal = $('.signup-form-wrapper');
    const loginModal = $('.login-form-wrapper');
    const signupBtn = $('.signup-btn');
    const loginBtn = $('.login-btn');
    const signupX = $('.signup-x');
    const loginX = $('.login-x');

    signupBtn.on("click", () => {
        signupModal.addClass("display");
    });

    loginBtn.on("click", () => {
        loginModal.addClass("display");
    });

    signupX.on("click", () => {
        signupModal.removeClass("display");
    });

    loginX.on("click", () => {
        loginModal.removeClass("display");
    });
});