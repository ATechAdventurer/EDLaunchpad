# EDLaunchpad

## An Elite Dangerous Launchpad Mini Control Layer



### Installation

To install this you will need [nodejs](nodejs.org)

once you have installed nodejs

open powershell as admin and type the following

```bash
npm i --global --production windows-build-tools 
npm i --global node-gyp
setx PYTHON "%USERPROFILE%\.windows-build-tools\python27\python.exe"
```

Finally navigate to the root folder of the project and type

```npm i```



### Configuration

To configure the keys that you want to correspond with Launchpad key presses, open config.js and edit the array entries in ``config.keys`` it is important that you don't remove any lines just replace the "_" with the keys that you would like pressed



### Running

To run this program navigate to the folder in powershell or cmd and run 

```npm start```