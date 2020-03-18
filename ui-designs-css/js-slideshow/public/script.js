$(() => {

    // indicate the number of a slide which will be currently showing.
    let current = 1;

    const changeSlides = () => {

        // select all elements with classname, slide and returns an array like object called node list.
        const slideList = $( ".slide" );

        // create an array of slides from parent element with classname (.slide) and convert it into an array.
        // transform a node list into an array.
        const slides = Array.from(slideList);
        console.log(slides);
    };

    changeSlides();
});