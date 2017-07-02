// import a library to help create a Component
import React from 'react'; // knows how components should behave and make them work together
// import ReactNative from 'react-native';
import { Text, AppRegistry } from 'react-native'; // portal to mobile device that knows how to take output from component and place it on screen, provides core components like 'image' and 'text'
  // there aren't global variables accross other files so there must be imports for code that will be included from other files
// access the exported Header component created in the other src components folder:
import Header from './src/components/header'; // like using a require_relative or require which points to particular file path


// create a Component
const App = () => {
  return (
    // <Text>Fart Knockers!</Text>
    // make use of the component we imported from the header file
    // the header will use the headerText prop created in the Header component and this means we can set it to a different string so that the header can be adjusted to work with the corresponding page
    <Header headerText={'Albums'} />
  );
};

// alternatively:
// const App = () => (
//     <Text>Fart Knockers!</Text>
//   );

  // this is JSX framework of javascript which creates html like elements
  // a component returns some JSX



// render it to the device
AppRegistry.registerComponent('albums', () => App);













/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
//
// export default class albums extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
//
// AppRegistry.registerComponent('albums', () => albums);
