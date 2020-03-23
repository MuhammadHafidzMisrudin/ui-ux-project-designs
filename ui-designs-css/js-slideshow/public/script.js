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
        const slideList = $( ".slide" );

        // create an array of slides from parent element with classname (.slide) and convert it into an array.
        // transform a node list into an array.
        const slides = Array.from(slideList);
        console.log("froms-changeslides-current-slide-now: ", slides);

        // check if current slide exceeds array length, then reset slide.
        if (current > slides.length) {
            current = 1;
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
    };

    // event selector for play and pause.
    $(".play-pause").click(() => {
        // invoke and trigger the play-pause function.
        playPause();
    });

    changeSlides();
    playPause();
});