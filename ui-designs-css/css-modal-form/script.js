// JS & Jquery implementations.

$(function () {

    const signupModal = $('.signup-form-wrapper');
    const loginModal = $('.login-form-wrapper');
    const signupBtn = $('.signup-btn');
    const loginBtn = $('.login-btn');
    const signupX = $('.signup-x');
    const loginX = $('.login-x');
    const formContainerDarkOverlay = $('.form-container');

    // Modal signup pop up when clicked.
    signupBtn.on("click", () => {
        signupModal.addClass("display");
        formContainerDarkOverlay.addClass("disable-overlay");
        signupBtn.css('background-color', 'tomato');
        loginBtn.css('background-color', 'transparent');
    });

    // Modal login pop when clicked.
    loginBtn.on("click", () => {
        loginModal.addClass("display");
        formContainerDarkOverlay.addClass("disable-overlay"); 
        loginBtn.css('background-color', 'tomato');
        signupBtn.css('background-color', 'transparent');
    });

    // Close signup modal.
    signupX.on("click", () => {
        signupModal.removeClass("display");
        formContainerDarkOverlay.removeClass("disable-overlay");
    });

    // Close login modal.
    loginX.on("click", () => {
        loginModal.removeClass("display");
        formContainerDarkOverlay.removeClass("disable-overlay");
    });
});