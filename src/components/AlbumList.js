// add the component Class to the import from the React library
import React, { Component } from 'react';
import { View, Text } from 'react-native';

// we have used functional componets so far but now we're goingo to use a class component
// functional components:
  // used for presenting static data ie header text
  // they can't handle fetching data
  // they are easy to write

// class components:
  // used for dynamic sources of data
  // handle any adata that might change (fetching data, user events, etc)
  // knows when it gets erendered to the device (useful for data fetching)
  // more code to write
  // based on ES6 classes
  // much more capable
  // example syntax:
  // class Header extends Component
    // render() {
      // return <Text>Hi there!</Text>
    // }
  // }

// extends Component means we are using the functionality of the Component base class
class AlbumList extends Component {
  render() {
    return (
      <View>
        <Text>Album List!!!</Text>
      </View>
    );
  }
}

export default AlbumList;
