# Belle2 GSoC 2023

This Angular CLI web app displays a Belle2 event using Phoenix, a TypeScript-based event display framework.
<br>
The web app has been deployed and can be accessed through [belle2-detector-dummy-hieu-gsoc.netlify.app](https://belle2-detector-dummy-hieu-gsoc.netlify.app/)

In order to run the application on your local machine, please perform the following steps.
<br>
## Prerequisites

1. Install Node.js and NPM on your system. You can download the latest version of Node.js from the [official website](https://nodejs.org/en/download/).
2. Install Angular CLI globally by running the command `npm install -g @angular/cli@15.2.7`. This command will install the latest version of Angular CLI on your system.

## How to Run

1. Clone this repository to your local machine
```git clone git@github.com:HieuLCM/Belle2_Web_Display_dum_ver.git```
2. Change the current directory into the cloned folder
```cd Belle2_Web_Display_dum_ver```
3. Run `npm install` to install the necessary dependencies
4. Run `npm start` or `ng serve` to start the development server
5. Navigate to `http://localhost:4200/` in your web browser to view the app

## About the App
![image](https://github.com/HieuLCM/Belle2_Web_Display_dum_ver/assets/88785267/9a704639-55f3-4813-91af-d82eb5e75225)

The app showcases the use of Angular CLI and the `phoenix-event-display` and `phoenix-ui-components` libraries for displaying 3D objects on a web page.
<br>
The objects (Belle2 detector) are loaded from GLTF files in the assets folder. These GLTF files are extracted a ROOT file generated by Belle2 Software.

### Le Cong Minh Hieu - GSoC 2023
