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
export default class AddComponent extends Component {
  state = {
    newTaskame: '',
  };
  render () {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.txtInput}
          keyboardType="default"
          placeholderTextColor="white"
          placeholder="Enter task name"
          autoCapitalize="none"
          onChangeText={text => {
            this.setState ({newTaskame: text});
          }}
        />
        <TouchableHighlight
          style={styles.btn}
          underlayColor="blue"
          onPress={event => {
              if(!this.state.newTaskame.trim()){
                  return;
              }
              this.props.onClickAdd(this.state.newTaskame);
          }}
        >
          <Image
            style={styles.img}
            source={require ('../icons/icons-add.png')}
          />

        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create ({
  container: {
    backgroundColor: 'tomato',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 64,
  },
  txtInput: {
    height: 40,
    width: 200,
    margin: 10,
    padding: 10,
    borderColor: 'white',
    borderWidth: 1,
    color: 'white',
  },
  btn: {
    marginRight: 10,
  },
  img: {
    width: 35,
    height: 35,
  },
});
