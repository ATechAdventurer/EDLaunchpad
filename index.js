var config = require('./config.js');
var midiConnector = require('midi-launchpad').connect(config.midiPort);

// wait for the connector to be ready
midiConnector.on("ready", function(launchpad) {
  launchpad.on("press", (button) => {
    if(config.debug){
      console.log("==== Pressed ====");
      console.log("x, y :", button.x, button.y);
      console.log("Note", button.toNote());
    }

  });
});
