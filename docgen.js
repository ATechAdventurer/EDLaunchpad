let robo = require('robotjs');
let fs = require('fs');
let output = "";
for(var i = 0; i < 8; i++){
  for(var j = 0; j < 8; j++){
    output += `\t{ key : "_", action: "tap", color: "red" }, //Button Number ${(i * 8) + (j + 1) } (${j}, ${i})\n`;
  }
}
fs.writeFile("./doc.txt", output, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});
console.log(output);
