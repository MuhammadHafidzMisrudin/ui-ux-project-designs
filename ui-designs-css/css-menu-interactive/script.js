$(function () {
    const menuIcon = $('.hamburger-menu');
    const navBar = $('.navbar');
    const navOverlay = $('#overlayEffect');
    const topOverlay = $('.top-nav-overlay');
    const closeBtn = $('.close-btn');

    menuIcon.on("click", () => {
        navBar.toggleClass("change");
    });

    navOverlay.on("click", () => {
        navBar.removeClass("change");
        topOverlay.toggleClass("top-change");
    });

    closeBtn.on("click", () => {
        topOverlay.removeClass("top-change");
    });
});