# Notee

Using a forked monorepo project skeleton to combine React Native SPA and Express/Node/MongoDB backend.

Trello: https://trello.com/b/tW8zbcGQ/project4

## Backend

    Express/Node
    MongoDB/Mongoose

Deployed backend can be found at: https://testapinotee.herokuapp.com/

## Frontend

As I'm not anywhere near production version yet, I'm using Expo to host Notee for testing purposes.
Expo is the create-react-app or express-generator for React Native, including a mobile app that allows the testing of apps prior to deployment. I've deployed a 'production' version of Notee for testing purposes, as React Native may behave differently in a production environment

Using the App:

## For IOS Devices:

    Download the Expo Client app
    Visit the hosted url on your phone, select 'Open project using Expo'

### Expo App on Apple Appstore: https://apps.apple.com/us/app/expo-client/id982107779

### Expo hosted Notee url: https://exp.host/@nandesuka/Notee

## For Android Devices:

    *Android version currently experiencing breaking bugs*

    Download the Expo Client app
    Visit the hosted url on your phone, select 'Open project using Expo'

### Expo App on Google Play store: https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US

### Expo hosted Notee url: https://exp.host/@nandesuka/Notee

Notee is my first React Native project, and working on it truly is a labor of love. I always wanted a simpler, minimalist and customizable note taking app. Why not build it?

As I am early in this process, things will change as I explore new UI designs and navigation flows, as well as working with offline functionality, however here are how things look:

<p align="center">
<img src="https://i.imgur.com/z4S9IGG.png" width="500">
<img src="https://i.imgur.com/7thtMz4.png" width="500">
<img src="https://i.imgur.com/4XKFa9m.png" width="500">
<img src="https://i.imgur.com/fElAZYW.png" width="500">
<img src="https://i.imgur.com/xYkzY5C.png" width="500">
<img src="https://i.imgur.com/X37nqy3.png" width="500">
<img src="https://i.imgur.com/OFffGLs.png" width="500">
<img src="https://i.imgur.com/8eQPSwn.png" width="500">
<img src="https://i.imgur.com/pnNxvK6.png" width="500">
</p>

# Planned Future Features/Enhancements:

    Integrate with AWS S3 to allows users to add any media to their notes.
        - Audio snippets
        - Videos
        - Photos
    Offline functionality
        - If the user is online, maintain current working functionality
        - If the user is offline, alter functionality to allow creating and caching of Folders and Notes
          - As soon as client is back online, send all cached data to the backend
