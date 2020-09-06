/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

class App extends Component {
  state = {
    nums: [],
    op: [],
    text: '',
    res: '',
  };

  input = (e) => {
    // e.preventDefault();
    if (this.state.res !== '') {
      this.setState({res: ''});
    }
    let value = e;
    let text = this.state.text;
    if (value === '.' && !text.includes('.')) {
      let newText = text.concat(value);
      this.setState({
        text: newText,
      });
      return;
    } else if (value === '.' && text.includes('.')) {
      return;
    }
    let newText = text.concat(value);
    this.setState({
      text: newText,
    });
  };
  selectOp = (op) => {
    let operation = op;
    let numz = this.state.nums;
    let ops = this.state.op;
    if (this.state.res !== '') {
      numz.push(this.state.res);
    } else if (this.state.text !== '') {
      numz.push(this.state.text);
    } else if (this.state.res === '' && this.state.res === '') {
      numz.push('0');
    }
    ops.push(operation);
    this.setState({
      nums: numz,
      op: ops,
      text: '',
    });
  };

  result = (event) => {
    let biggerRes = '';
    let tekst = this.state.text;
    let numz = this.state.nums;
    let ops = this.state.op;
    numz.map((num, key) => {
      biggerRes = biggerRes.concat(num);
      biggerRes = biggerRes.concat(ops[key]);
    });
    biggerRes = biggerRes.concat(tekst);
    this.setState({
      text: '',
      res: eval(biggerRes),
      nums: [],
      op: [],
    });
  };
  eraseAll = () => {
    this.setState({
      nums: [],
      op: [],
      text: '',
      res: '',
    });
  };

  render() {
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
                fontSize: 50,
                textAlign: 'center',
              }}
              numberOfLines={1}
              value={this.state.text}>
              {this.state.text}
              {this.state.res}
            </Text>
            <TouchableOpacity
              style={styles.buttons}
              onPress={(event) => {
                let newText = this.state.text.substring(
                  0,
                  this.state.text.length - 1,
                );
                this.setState({
                  text: newText,
                });
              }}>
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
              onPress={(event) => {
                this.input(1);
              }}>
              <Text style={styles.text}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons}
              onPress={(event) => {
                this.input(2);
              }}>
              <Text style={styles.text}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons}
              onPress={(event) => {
                this.input(3);
              }}>
              <Text style={styles.text}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons}
              onPress={(event) => {
                this.selectOp('+');
              }}>
              <Text style={styles.text}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={(event) => {
                this.input(4);
              }}>
              <Text style={styles.text}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons}
              onPress={(event) => {
                this.input(5);
              }}>
              <Text style={styles.text}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons}
              onPress={(event) => {
                this.input(6);
              }}>
              <Text style={styles.text}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons}
              onPress={(event) => {
                this.selectOp('*');
              }}>
              <Text style={styles.text}>*</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={(event) => {
                this.input(7);
              }}>
              <Text style={styles.text}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons}
              onPress={(event) => {
                this.input(8);
              }}>
              <Text style={styles.text}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons}
              onPress={(event) => {
                this.input(9);
              }}>
              <Text style={styles.text}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons}
              onPress={(event) => {
                this.selectOp('/');
              }}>
              <Text style={styles.text}>/</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={(event) => {
                this.eraseAll();
              }}>
              <Text style={styles.text}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons}
              onPress={(event) => {
                this.input(0);
              }}>
              <Text style={styles.text}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons}
              onPress={(event) => {
                this.input('.');
              }}>
              <Text style={styles.text}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons}
              onPress={(event) => {
                this.selectOp('-');
              }}>
              <Text style={styles.text}>-</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={(event) => {
                this.result();
              }}>
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
