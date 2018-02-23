/**
*Namespace constructor
*/
var webproject = {};

webproject.MyStyler = {
  /**
  *Add a class for the DOM element.
  *@param {object} node - The DOM node.
  *@param {string} name - The class's name.
  */
  addClass: function(node, name) {
    node.classList.add(name);
  },

  /**
  *Remove a class for the DOM element.
  *@param {object} node - The DOM node.
  *@param {string} name - The class's name.
  */
  removeClass: function(node, name) {
    node.classList.remove(name);
  },

  /**
  *Add a class to the active link and
  *remove a class from the non-active link.
  *@param {object} e - Event object.
  *@param {object} node - The collection of elements.
  *@param {string} name - The class's name.
  */
  setActiveLink: function(e, node, name) {
    for(var i = 0; i < node.length; i++){
     if(node[i].classList.contains(name)){
        node[i].classList.remove(name);
        e.target.classList.add(name);
     }
   }

  }
};