/**
*Namespace constructor
*/
var webproject = webproject || {};

webproject.MySlider = {
  indexSlider: 1,

  /**
  *Move to another slide.
  *@param {int} num - The value use to help find the next index.
  *@param {string} name - The class's name.
  */
  followingSlide: function(num, name) {
    this.showSlide(this.indexSlider += num, name)
  },

  /**
  *Show the current slide.
  *@param {int} num - The value of the given index.
  *@param {string} name - The class's name.
  */
  showSlide: function(num, name) {
    var slides = document.getElementsByClassName(name);
    if (num > slides.length) { this.indexSlider = 1; }
    if (num < 1) { this.indexSlider = slides.length; }
    for(var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      console.log(slides[i].style.display);
    }
    slides[this.indexSlider-1].style.display = "block";
  }
};