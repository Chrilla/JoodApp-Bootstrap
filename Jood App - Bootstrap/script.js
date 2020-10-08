$(document).ready(function() {
    
    var owl1 = $('#owl1');
    owl1.owlCarousel({
        items: 4,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    })

    var owl2 = $('#owl2');

    owl2.owlCarousel({
        items: 5,
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        center: true,
        nav: false,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },

            600: {
                items: 3,
            },

            1000: {
                items: 5,
            }
        }
    });

})

let start // set on the first step to the timestamp provided
const el = document.getElementById('count') // get the element
const final = parseInt(el.textContent, 10) // parse out the final number
const duration = 1000 // duration in ms
const step = ts => {
  if (!start) {
    start = ts
  }
  // get the time passed as a fraction of total duration
  let progress = (ts - start) / duration 

  el.textContent = Math.floor(progress * final) // set the text
  if (progress < 1) {
    // if we're not 100% complete, request another animation frame
    requestAnimationFrame(step) 
  }
}

// start the animation
requestAnimationFrame(step)
