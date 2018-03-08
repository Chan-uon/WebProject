function initializeHandlers() {

document.getElementById("mainnav").addEventListener("click", function(e){
  webproject.MyStyler.setActiveLink(e,
    this,
    "a",
    "active");},
  false)};

window.addEventListener("load", initializeHandlers, false);