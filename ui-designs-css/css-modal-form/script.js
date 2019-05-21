// JS & Jquery implementations.

$(function () {

    const signupModal = $('.signup-form-wrapper');
    const loginModal = $('.login-form-wrapper');
    const signupBtn = $('.signup-btn');
    const loginBtn = $('.login-btn');
    const signupX = $('.signup-x');
    const loginX = $('.login-x');

    // Modal signup pop up when clicked.
    signupBtn.on("click", () => {
        signupModal.addClass("display");
    });

    // Modal login pop when clicked.
    loginBtn.on("click", () => {
        loginModal.addClass("display");
    });

    // Close signup modal.
    signupX.on("click", () => {
        signupModal.removeClass("display");
    });

    // Close login modal.
    loginX.on("click", () => {
        loginModal.removeClass("display");
    });
});