$(() => {
    console.log("testing-jquery-works");

    $(".card-btn").bind("click", () => {
        $(".container").toggleClass("change");
    });
});