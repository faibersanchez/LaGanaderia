/*--------------- Testimonial Slider ---------------*/ 
var swiper = new Swiper(".testimonial-slider", {

  loop:true, // Enable looping of slides

  autoplay: {
    delay: 5000, // Delay between slide transitions
    disableOnInteraction: false, // Allow autoplay on user interaction
  },
 
  // Pagination settings
  pagination: {
    el: ".swiper-pagination3", // Pagination element
    clickable: true, // Enable clickable pagination bullets
  },

}); 
