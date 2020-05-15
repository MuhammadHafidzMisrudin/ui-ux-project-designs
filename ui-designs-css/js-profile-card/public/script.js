/* 
    Author: Muhammad Hafidz Misrudin
    Description: Proprietary (no permission for copy or redistribution)
    Date written: 22/04/2020
    Date last updated: 15/05/2020
*/
$(() => {
    console.log("testing-jquery-works");

    $(".card-btn").bind("click", () => {
        $(".container").toggleClass("change");
    });
});