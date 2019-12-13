import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Image,
  Platform,
  TouchableOpacity,
  RefreshControl,
  TextInput,
} from 'react-native';

export default class TaskItemComponent extends Component {
  render () {
    return (
      <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={()=>{
          
      }}>

      </TouchableOpacity>
        <Text
          style={{
            margin: 20,
            color: this.props.completed == true ? 'darkgreen' : 'black',
          }}
        >
          {this.props.taskName}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
  btn:{
      position:'absolute',
      top:0,
      bottom:0,
      left:0,
      right:0
  }
});
