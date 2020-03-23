$(() => {

    // indicate the number of a slide which will be currently showing.
    let current = 1;
    
    // flag to indicate intial value play-pause
    let playPauseBool = true;

    // set interval function to changing slides.
    let interval;

    // function to change and show the slides.
    const changeSlides = () => {

        // select all elements with classname, slide and returns an array like object called node list.
        const slideList = $(".slide");

        // create an array of slides from parent element with classname (.slide) and convert it into an array.
        // transform a node list into an array.
        const slides = Array.from(slideList);
        console.log("froms-changeslides-current-slide-now: ", slides);

        // check if current slide exceeds array length, then reset slide.
        if (current > slides.length) {
            current = 1;
        }

        // check if current slide is at zero, get the slide at the last element.
        if (current === 0) {
            current = slides.length;
        }

        // loop through an array.
        slides.forEach((slide) => {
            // show the current slide image with index, else hide it.
            // slide.classList property indicates an array of class names; slide slide-1.
            // convert string number to integer for comparison.
            if (parseInt(slide.classList[1].split("-")[1]) === current) {
                console.log("if-true-current-slide: ", parseInt(slide.classList[1].split("-")[1]));
                slide.style.cssText = "visibility: visible; opacity: 1";
            } else {
                slide.style.cssText = "visibility: hidden; opacity: 0";
            }
        });
    };

    // function to play the slides automatically.
    const playPause = () => {

        // if true then it plays automatically, otherwise, it stops.
        if (playPauseBool) {
            // change the slide after 1 second.
            interval = setInterval(() => {
                current++;
                changeSlides();
            }, 1000);
            console.log("playpausebool-before: ", playPauseBool);
            playPauseBool = false; // set it false.
            console.log("playpausebool-after: ", playPauseBool);
        } else {
            // if play-pause is checked for second time, clear the interval, set it true.
            clearInterval(interval);
            playPauseBool = true; // set it true.
            console.log("else-playpausebool-now: ", playPauseBool);
        }

        // invoke function to change icon.
        changePlayPause();

        // invoke function show the visibility of arrow controls.
        arrowVisibility();
    };

    // function to change the icon while changing the slides.
    const changePlayPause = () => {
        // get element by id of icon.
        // get second element of an array of classname; fa-play.
        const iconID = document.getElementById("icon").classList[1];

        // check if classname is fa-play, then remove its class and add a new classname, fa-pause.
        if (iconID == "fa-play") {
            document.getElementById("icon").classList.remove("fa-play");
            document.getElementById("icon").classList.add("fa-pause");
        } else {
            document.getElementById("icon").classList.remove("fa-pause");
            document.getElementById("icon").classList.add("fa-play");
        }
    };

    // invoke function to check and show the visibility of arrow controls.
    const arrowVisibility = () => {
        const arrows = $(".control");

        Array.from(arrows).forEach((arrow) => {
            if (playPauseBool === false) {
                arrows.addClass("arrow-visibility");
            } else {
                arrows.removeClass("arrow-visibility");
            }
        });
    }

    // event selector for play and pause control.
    $(".play-pause").click(() => {
        // invoke and trigger the play-pause function.
        playPause();
    });

    // event selector for left arrow control.
    $(".left-arrow").click(() => {
        if (playPauseBool === false) {
            playPause();
        }
        current--;
        changeSlides();
    });

    // event selector for right arrow control.
    $(".right-arrow").click(() => {
        if (playPauseBool === false) {
            playPause();
        }
        current++;
        changeSlides();
    });

    changeSlides();
    playPause();
});