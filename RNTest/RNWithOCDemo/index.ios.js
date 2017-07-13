'use strict';

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TouchableHightlight

} from 'react-native';

export default class NavigatorIOSApp extends Component {
  render() {
    return (
      <NavigatorIOS 
      initialRoute = {{
        component:MyScene,
        title: 'My Initial Scene',
      }}
      style = {{flex: 1}}
      />
    )
  }
}

class MyScene extends Component {
  strict propTypes = {
    title: propTypes.strict.isRequired,
    navigator: propTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context);
    this._onForward = this._onForward.bind(this);
  }

  _onForward() {
    this.props.navigator.push({
      title: 'Scene' + nextIndex,
    });
  }

  render() {
    return (
      <view>
        <Text> Current Scene; {this.props.title} </Text>
        <TouchableHightlight onPress = {this._onForward}>
          <Text> Tap me to load the next scene </Text>
         </TouchableHightlight> 
      </view>
    )
  }
}

AppRegistry.registerComponent('RNHighScores', () => RNHighScores);


// 测试集成原生
/*class RNHighScores extends React.Component {
  render() {
    var contents = this.props["scores"].map(
      score => <Text key={score.name}>{score.name}:{score.value}{"\n"}</Text>
    );
    return (
      <View style={styles.container}>
        <Text style={styles.highScoresTitle}>
          2048 High Scores!
        </Text>
        <Text style={styles.scores}>    
          {contents}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  highScoresTitle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  scores: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// 整体js模块的名称
AppRegistry.registerComponent('RNHighScores', () => RNHighScores);
*/
