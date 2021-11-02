#pokedex

To run this app on your device in debugging mode follow these instructions:

1: In the app root directory run "npm install" to install all the app dependencies.
2: Under the "/android" directory create a file with the name "local.properties" and specify the Android SDK path inside of it, EX
"sdk.dir=C\:\\Users\\asdf\\AppData\\Local\\Android\\Sdk" .
3: Connect your device or your emulator with your computer (details could be found in the official docs).
4: After making sure that your device is connected run "react-native run-android" to upload the app into your device.
5: start the metro server by running "npm start".


To create an apk (release version) follow these instructions:

1: In the app root directory run "npm install" to install all the app dependencies.
2: Under the "/android" directory create a file with the name "local.properties" and specify the Android SDK path inside of it, EX
"sdk.dir=C\:\\Users\\asdf\\AppData\\Local\\Android\\Sdk" .
3: Connect your device or your emulator with your computer (details could be found in the official docs).
4: Go to "/android" directory by doing "cd android" and run this command "gradlew assembleRelease" 
this command will generate a release version of the app that you can find under "/android/app/build/outputs/apk/release/app-release.apk". 
