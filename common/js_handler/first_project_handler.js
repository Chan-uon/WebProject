function initializeHandlers() {

window.addEventListener("click", function(e){
  webproject.MyStyler.setActiveLink(e,
    document.getElementById("mainnav").
    getElementsByTagName("a"),
    "active");},
  false)};

window.addEventListener("load", initializeHandlers, false);