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
  *@param {object} node - The DOM node.
  *@param {string} tag - The tag name.
  *@param {string} name - The class's name.
  */
  setActiveLink: function(e, node, tag, name) {
  var nodelist = node.getElementsByTagName(tag);
    for(var i = 0; i < nodelist.length; i++){
      if(nodelist[i].classList.contains(name)
        && node.contains(e.target)){
          nodelist[i].classList.remove(name);
          e.target.classList.add(name);
      }
   }

  }
};