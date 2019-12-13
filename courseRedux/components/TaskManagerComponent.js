import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Image,
  Platform,
  TouchableHighlight,
  RefreshControl,
  TextInput,
} from 'react-native';
import AddContainer from '../containers/AddContainer';
import TaskListContainer from '../containers/TaskListContainer';
export default class TaskManagerComponent extends Component {
  render () {
    return (
      <View style={{flex:1,marginTop: 34}}>
        <AddContainer/>
        <TaskListContainer/>
      </View>
    );
  }
}
