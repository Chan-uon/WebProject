function initializeHandlers() {

window.addEventListener("click", function(e){
  webproject.MyStyler.setActiveLink(e,
    document.getElementById("mainnav"),
    "a",
    "active");},
  false)};

window.addEventListener("load", initializeHandlers, false);