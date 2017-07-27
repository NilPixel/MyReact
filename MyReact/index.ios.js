/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {
    AppRegistry,Text,Image,View,StyleSheet,TextInput,ScrollView,FlatList,SectionList
} from 'react-native';

import React, {Component} from 'react';
import FateListView from './FateListView';

AppRegistry.registerComponent('TaSay45', () => SectionListBasics);

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
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
    container: {
   flex: 1,
   paddingTop: 20
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    backgroundColor: 'powderblue',
  },
  sectionHeader: {
  paddingTop: 2,
  paddingLeft: 10,
  paddingRight: 10,
  paddingBottom: 2,
  fontSize: 14,
  fontWeight: 'bold',
  backgroundColor: 'rgba(247,247,247,1.0)',
  },
});


class FixedDimensionsBasics extends Component {
  render() {
    return (
    <View>
      <View style = {{width: 50, height: 250, backgroundColor: 'powderblue'}}/>
      <View style = {{width: 30, height: 100, backgroundColor: 'skyblue'}}/>
      <View style = {{width: 130, height: 200, backgroundColor: 'steelblue'}}/>
   </View>
    );
  }
}

class FlexDimensionsBasics extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}}/>
        <View style={{flex: 2, backgroundColor: 'skyblue'}}/>
        <View style={{flex: 3, backgroundColor: 'steelblue'}}/>
      </View>
    );
  }
}

class FlexDirectionBasics extends Component {
  render() {
    return (
      <View style={{flex:1, flexDirection: 'column'}}>
        <View style={{width: 50, height:50,backgroundColor:'powderblue'}}/>
        <View style={{width: 50, height:50,backgroundColor:'skyblue'}}/>
        <View style={{width: 50, height:50,backgroundColor:'steelblue'}}/>
      </View>
    );
  }
}

class JustifyContentBasics extends Component {
  render() {
    return (
      <View style= {{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        <View style={{width: 50, height: 50, backgroundColor : 'powderblue'}}/>
        <View style={{width: 50, height: 50, backgroundColor : 'skyblue'}}/>
        <View style={{width: 50, height: 50, backgroundColor : 'steelblue'}}/>
      </View>
    );
  }
}

class AlignItemsBasics extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}/>
      </View>
    );
  }
}

class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    return (
      <View style={{padding: 50}}>
        <TextInput style={{height: 30, backgroundColor: 'powderblue'}}
          placeholder= "type here to translate"
          onChangeText={(text) => this.setState({text})}
        />
        <Text>
          {this.state.text.split(' ').map((word) => word && '123').join(' ')}
        </Text>
      </View>
    );
  }
}

class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  render() {
    return(
      <ScrollView>
        <Text style={{fontSize:36}}>Scroll me plz</Text>
        <Image source={require('./Images/praiseHlight.png')}/>
        <Image source={require('./Images/praiseHlight.png')}/>
        <Image source={require('./Images/praiseHlight.png')}/>
        <Image source={require('./Images/praiseHlight.png')}/>
        <Image source={require('./Images/praiseHlight.png')}/>
        <Text style={{fontSize:36}}>If you like</Text>
        <Image source={require('./Images/praiseHlight.png')}/>
        <Image source={require('./Images/praiseHlight.png')}/>
        <Image source={require('./Images/praiseHlight.png')}/>
        <Image source={require('./Images/praiseHlight.png')}/>
        <Image source={require('./Images/praiseHlight.png')}/>
        <Text style={{fontSize:36}}>Scrolling down</Text>
        <Image source={require('./Images/praiseHlight.png')}/>
        <Image source={require('./Images/praiseHlight.png')}/>
        <Image source={require('./Images/praiseHlight.png')}/>
        <Image source={require('./Images/praiseHlight.png')}/>
        <Image source={require('./Images/praiseHlight.png')}/>
        <Text style={{fontSize:36}}>Framework around?</Text>
        <Image source={require('./Images/praiseHlight.png')}/>
        <Image source={require('./Images/praiseHlight.png')}/>
        <Image source={require('./Images/praiseHlight.png')}/>
        <Image source={require('./Images/praiseHlight.png')}/>
        <Image source={require('./Images/praiseHlight.png')}/>
        <Text style={{fontSize:36}}>If you like</Text>
        <Image source={require('./Images/praiseHlight.png')}/>
        <Image source={require('./Images/praiseHlight.png')}/>
        <Image source={require('./Images/praiseHlight.png')}/>
        <Image source={require('./Images/praiseHlight.png')}/>
        <Image source={require('./Images/praiseHlight.png')}/>
        <Text style={{fontSize:36}}>React Native</Text>
      </ScrollView>
    );
  }
}

class FlatListBasics extends Component {
  render() {
    return(
      <View style={styles.container}>
        <FlatList
          data={[{key:'123'},{key:'122'},{key:'111'},{key:'888'}]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

class SectionListBasics extends Component {
  render() {
    return(
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        />
     </View>
    );
  }
}
