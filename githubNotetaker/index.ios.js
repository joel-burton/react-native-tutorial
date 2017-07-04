/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as firebase from 'firebase';
import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Main from './App/Components/Main';


const firebaseConfig = {
    apiKey: "AIzaSyBvqocdatGxccdTFH5FFQ5CZeeXGbLILXE",
    authDomain: "github-saver-9b85e.firebaseapp.com",
    databaseURL: "https://github-saver-9b85e.firebaseio.com",
    projectId: "github-saver-9b85e",
    storageBucket: "github-saver-9b85e.appspot.com",
};
firebase.initializeApp(firebaseConfig);


export default class githubNotetaker extends Component {

  render() {
    return (
        <NavigatorIOS
            style={styles.container}
            initialRoute={{
                title: 'Github Notetaker',
                component: Main,
            }} />
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
});


AppRegistry.registerComponent('githubNotetaker', () => githubNotetaker);
