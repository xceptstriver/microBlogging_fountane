<h1 align="center">
    Approach
</h1>

Approach and the pattern that will be used to make a micro blogging platform.

- Create two MockScreens

Each of these screen files s going to have some random data to display until the stack navigator is set up.

dependency:
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

- Set up stack navigator

A Stack Navigator allows the app to transit between different or multiple screens and manages the navigation history

- Configuring a store and setting it up on App.js

First I would create separate folders for different files. Actions in actions folder, reducers in reducers folder etc... I would create separate constants.js file and configureStore.js file and put them inside the project root directory.
And I'll be using Redux-middleware Redux-thunk for async operations


