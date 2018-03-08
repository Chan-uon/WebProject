function initializeHandlers() {

document.getElementById("mainnav").addEventListener("click", function(e){
  webproject.MyStyler.setActiveLink(e,
    this,
    "a",
    "active");
   }, false);

webproject.MySlider.showSlide(1, "mySlides");

document.getElementById("next").addEventListener("click", function() {
  webproject.MySlider.followingSlide(1, "mySlides");
  }, false);

document.getElementById("prev").addEventListener("click", function() {
  webproject.MySlider.followingSlide(-1, "mySlides");
  }, false);

};

window.addEventListener("load", initializeHandlers, false);