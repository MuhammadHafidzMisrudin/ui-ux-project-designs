$(() => {

    // indicate the number of a slide which will be currently showing.
    let current = 1;

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
            // show the current image.
            if (slide.classList[1].split("-")[1]*1 === current) {
                slide.style.cssText = "visibility: visible; opacity: 1";
            } else {
                slide.style.cssText = "visibility: hidden; opacity: 0";
            }
        });
    };

    const playPause = () => {
        // change the slide after 3 seconds.
        setInterval(() => {
            current++;
            changeSlides();
        }, 1000);
    };

    changeSlides();
    playPause();
});