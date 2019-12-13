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
import TaskItemContainer from '../containers/TaskItemContainer';
export default class TaskListComponent extends Component {
  render () {
    return (
      <FlatList

          data={this.props.tasks}
          renderItem={({item,index})=>{
              return(
                <TaskItemContainer {...item}>

                </TaskItemContainer>
              );
          }}
          keyExtractor={(item,index)=>item.taskName}
      />
    );
  }
}
