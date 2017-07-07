/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {
    AppRegistry,Text,Image,View
} from 'react-native';

import React, {Component} from 'react';
import FateListView from './FateListView';

AppRegistry.registerComponent('TaSay45', () => BlinkApp);

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

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};
    setInterval(() => {
      this.setState(previousState => {
        return {showText: !previousState.showText};
      });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : '';
    return (
      <Text>{display}</Text>
    );
  }
}

class BlinkApp extends Component {
  render () {
    return (
      <View>
        <Blink text = 'i love to blink'/>
        <Blink text = 'yes blink is so great'/>
        <Blink text = 'look at me look at me'/>
      </View>
    );
  }
}

class LotsOfStyle extends Component {
  render() {
    return (
      <View>
        <Text style={styles.red}>just do it</Text>
        <Text style={styles.bigblue}>just do it</Text>
        <Text style={[styles.red, styles.bigblue]}>just do it</Text>
        <Text style={[styles.bigblue, styles.red]}>just do it</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigblue:{
    color:'blue',
    fontWeight:'bold',
    fontSize:'20'
  },
  red:{
    color:'red',
  },
});
