// mounty started as app code
// need to clean this up
var app = document.getElementById('app');

// loop through the children of the app
for (var i = 0; i < app.children.length; i++) {
  var child = app.children[i];
  
  // we could probably use querySelector for this?
  if (child.className.indexOf('mount') > -1) {
    var content = child.getAttribute('data-flow');
    if (content.length > 0) {
        
      // parse the flow tokens
      var tokens = content.split('=>');
      var from = tokens[0];
      var to = tokens[1];
      var command = tokens[2].trim();
      var fromQuery = child.querySelector(from);
      
      if (fromQuery) {
        if (to.indexOf('listen')) {
          // hook up a listener
          console.log('listener');
          fromQuery.addEventListener('keypress', function(e) {
            var key = e.which || e.keyCode;
            if (key === 13) { 
              var callbacks = window.app.callbacks
              var fn = window.app.instance[command];
                if (fn)  {
                  fn({element: fromQuery})
                } else {
                    // call something else?
                };
            }
          });
        }
      }
    }
  }
};