import React, { Component } from 'react';
import axios from 'axios';
import { View, Picker } from 'react-native';
import { Card, CardSection, Button, Input, Header } from './common';

const baseURL = 'https://lotus-udes.herokuapp.com';

class Variables extends Component {
  state = { 
    variables: [],
    selectedVariable: '',
    value: '',
  };

  componentWillMount() {
    axios.get(`${baseURL}/listeVariables`)
      .then(response => this.setState({
        variables: response.data.variables,
        selectedVariable: response.data.variables[0]
      }));
  }

  listItem() {
    return this.state.variables.map(variable =>
      <Picker.Item key={variable} label={variable} value={variable} />
    );
  }

  sendData() {
    axios.post(`${baseURL}/updateVariable`, {
      index: this.state.variables.indexOf(this.state.selectedVariable),
      value: this.state.value,
      type: '3g'
    });
  }

  render() {
    return (
      <View>
        <Card>
          <Header>Modifier variable</Header>
          <CardSection>
            <Picker
              style={{ flex: 1 }}
              selectedValue={this.state.selectedVariable}
              onValueChange={selectedVariable => this.setState({ selectedVariable })}
            >
              {this.listItem()}
            </Picker>
          </CardSection>

          <CardSection>
            <Input
              placeholder="Valeur"
              value={this.state.value}
              onChangeText={value => this.setState({ value })}
            />
          </CardSection>

          <CardSection>
            <Button onPress={this.sendData.bind(this)}>
              Envoyer
            </Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}

export default Variables;
