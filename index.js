let config = require('./config.js');
let robot = require('robotjs');
let midiConnector = require('midi-launchpad').connect(config.midiPort);
// wait for the connector to be ready
midiConnector.on("ready", function(launchpad) {
  launchpad.on("press", (button) => {
    if(config.debug){
      console.log("==== Pressed ====");
      console.log("x, y :", button.x, button.y);
      console.log("Note", getFriendlyNote(button.x, button.y));
      console.log(config.keys[getFriendlyNote(button.x, button.y)].key);
    }
    if(config.keys[getFriendlyNote(button.x, button.y).key] !== "_")
      if(config.keys[getFriendlyNote(button.x, button.y)].action == "tap")
        robot.keyTap(config.keys[getFriendlyNote(button.x, button.y)].key);
      else if(config.keys[getFriendlyNote(button.x, button.y)].action == "press"){
        robot.keyToggle(config.keys[getFriendlyNote(button.x, button.y)].key, "down");
      }
  });
  launchpad.on("release", (button) => {
    if(config.debug){
      console.log("==== Released ====");
      console.log("x, y :", button.x, button.y);
      console.log("Note", getFriendlyNote(button.x, button.y));
      console.log(config.keys[getFriendlyNote(button.x, button.y)]);
    }
    if(config.keys[getFriendlyNote(button.x, button.y).key] !== "_" && config.keys[getFriendlyNote(button.x, button.y)].action == "press")
      robot.keyToggle(config.keys[getFriendlyNote(button.x, button.y)].key, "up");
  });
});

let getFriendlyNote = (x,y) => {
  if(y == 8)
      return 63 + x;
  else
      return (y * 8) + x;
}
