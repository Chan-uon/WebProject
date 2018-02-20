function initializeHandlers() {
  var elem_remove = document.getElementById("let");
  elem_remove.addEventListener("click", function() { 
    webproject.MyStyler.removeClass(elem_remove, "active")}, 
    false);

  var elem_add = document.getElementById("have");
  elem_add.addEventListener("click", function() { 
    webproject.MyStyler.addClass(elem_add, "active")}, 
    false);
};

window.addEventListener("load", initializeHandlers, false);