/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

class App extends Component{
  state = {
          nums: [],
          op: [],
          text : '',
          res : ''
      }

      input = (event) => {
        event.preventDefault();
        if (this.state.res !== ''){
            this.setState({res : ''})
        }
        let value = event.target.value;
        let text = this.state.text
        if (value === "." && !text.includes('.')) {
            let newText = text.concat(value)
            this.setState(
                {
                    text: newText
                }
            )
            return
        } else if  (value === "." && text.includes('.')) {
            return
        }
        let newText = text.concat(value)
        console.log(newText)
        this.setState(
            {
                text: newText
            }
        )
    };

  render(){
  return (
    <>
      <View
        style={{
          flex: 2,
          flexDirection: 'column-reverse',
          backgroundColor: '#392767',
        }}>
        <View style={{flexDirection: 'row', marginHorizontal: 5}}>
          <Text
            style={{
              flex: 6,
              backgroundColor: 'blue',
              height: 90,
              borderRadius: 10,
              borderWidth: 2,
            }}
            value = {this.state.text}
          />
          <TouchableOpacity style={styles.buttons}>
            <Text style={styles.text}>←</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 5,
          flexDirection: 'column',
          backgroundColor: '#392767',
          justifyContent: 'center',
          paddingBottom: 20,
        }}>
        <View style={styles.buttonRow}>
          <TouchableOpacity 
          style={styles.buttons}
          onPress = {this.input}
          value={1}
          >
            <Text style={styles.text}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons}>
            <Text style={styles.text}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons}>
            <Text style={styles.text}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons}>
            <Text style={styles.text}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttons}>
            <Text style={styles.text}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons}>
            <Text style={styles.text}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons}>
            <Text style={styles.text}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons}>
            <Text style={styles.text}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttons}>
            <Text style={styles.text}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons}>
            <Text style={styles.text}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons}>
            <Text style={styles.text}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons}>
            <Text style={styles.text}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttons}>
            <Text style={styles.text}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons}>
            <Text style={styles.text}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons}>
            <Text style={styles.text}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons}>
            <Text style={styles.text}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttons}>
            <Text style={styles.text}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
  }
}

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#392767',
    marginHorizontal: 10,
  },
  buttons: {
    height: 90,
    flex: 2,
    margin: 2,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#5f30e6',
    borderWidth: 1,
    borderRadius: 10,
  },
  text: {
    fontSize: 25,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
