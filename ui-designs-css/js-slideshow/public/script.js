$(() => {

    // indicate the number of a slide which will be currently showing.
    let current = 1;
    
    // flag to indicate intial value play-pause
    let playPauseBool = true;

    // set interval function to changing slides.
    let interval;


    // function to change slides automatically
    const changeSlides = () => {

        // select all elements with classname, slide and returns an array like object called node list.
        const slideList = $( ".slide" );

        // create an array of slides from parent element with classname (.slide) and convert it into an array.
        // transform a node list into an array.
        const slides = Array.from(slideList);
        console.log(slides);

        // check if current slide exceeds array length, then reset.
        if (current > slides.length) {
            current = 1;
        }

        // loop through array
        slides.forEach((slide) => {
            // show the current image, else hide it.
            if (slide.classList[1].split("-")[1]*1 === current) {
                slide.style.cssText = "visibility: visible; opacity: 1";
            } else {
                slide.style.cssText = "visibility: hidden; opacity: 0";
            }
        });
    };

    const playPause = () => {

        // if true then it plays automatically, otherwise, it stops.
        if (playPauseBool) {
            // change the slide after 3 seconds.
            interval = setInterval(() => {
                current++;
                changeSlides();
            }, 1000);
            console.log(playPauseBool);
            playPauseBool = false; // set it false.
            console.log(playPauseBool);
        } else {
            // if play-pause is checked for second time, clear the interval, set it true.
            clearInterval(interval);
            playPauseBool = true;
            console.log(playPauseBool);
        }
    };

    $(".play-pause").click(() => {
        // invoke and trigger the play-pause function.
        playPause();
    });

    changeSlides();
    playPause();
});