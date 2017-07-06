/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {
    AppRegistry,Text,Image,View
} from 'react-native';

import React, {Component} from 'React';
import FateListView from './FateListView';

AppRegistry.registerComponent('TaSay45', () => LotsOfGreetings);

class HelloWorldApp extends Component {
  render() {
    return (
      <Text>Hello World!</Text>
    );
  }
}

class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source = {pic} style = {{width: 180, height: 200}}/>
    );
  }
}

class Greeting extends Component {
  render() {
    return (
      <Text> Hello {this.props.name}!</Text>
    );
  }
}

class LotsOfGreetings extends Component {
  render() {
    return (
      <View style = {{alignItems:'center'}}>
        <Greeting name = 'zheng'/>
        <Greeting name = "li"/>
        <Greeting name = 'wang'/>
      </View>
    );
  }
}
