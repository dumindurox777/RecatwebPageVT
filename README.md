ReactNativeNodeJs

This project include both frontend (ReactNative) and backend(nodejs) for fetch data from mongodb.

In here i used a genymotion based android emulator.

In the beginning get matches.json file which is located inside backend folder then create a database called Cricket and create collection called cricket. Then import that matches.json in to cricket collection.

Then run this command inside backend folder "node app.js".This will start the nodejs server. Then to test it run "http://localhost:3000/listUsers" using web browser this will display all the data inside json file.

Then run the react native app using "react-native run-android" command. In here if you use genymotion android emulator then use computer IP and nodejs server running port as url. ex:-"http://192.168.8.50:3000/listUsers".

If you host that app.js then use that host url as fetch URL.
