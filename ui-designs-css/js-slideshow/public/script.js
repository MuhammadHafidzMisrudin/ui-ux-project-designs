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

        // loop through array
        slides.forEach((slide) => {
            if (slide.classList[1].split("-")[1]*1 === current) {
                slide.style.cssText = "visibility: visible; opacity: 1";
            } else {
                slide.style.cssText = "visibility: hidden; opacity: 0";
            }
        });
    };

    changeSlides();
});