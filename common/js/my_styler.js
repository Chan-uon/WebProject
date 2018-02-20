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
  }
};