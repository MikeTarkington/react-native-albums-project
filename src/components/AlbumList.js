// add the component Class to the import from the React library
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
// ran `npm install --save axios` in console
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

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
  // set the default
  state = { albums: [] };

  // life cycle methods (ie componentWillMount) are like a "hook"
  // this will be executed automatically when this component is used
  componentWillMount() {
    // console.log('componentWillMount in AlbumList');
    // axios api call:
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      // updates the state of the component to have the data
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    // build a list that displays each of the items from the api call's json object
    return this.state.albums.map(album =>
      // must set a key property when making an array and this ensures better performance
      // setting this will relieve an error shown in the preview window
      // prior to setting up the AlbumDetail component:
        // <Text key={album.title}>{album.title}</Text>
      // now use prop instead of coded text from the iteration of map
      // name of variable doesn't have to match name of prop
      <AlbumDetail key={album.title} record={album} />
    );
  }

  render() {
    // console.log(this.state);

    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}


export default AlbumList;
