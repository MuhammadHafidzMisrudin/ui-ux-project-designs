$(() => {
    $(".hamburger-menu").click(() => {
        $(".navigation").toggleClass("change"); // or $(".line").toggleClass("change");
    });
});