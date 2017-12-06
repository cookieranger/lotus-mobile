import React, { Component } from 'react';
import axios from 'axios';
import { View, Picker } from 'react-native';
import { Card, CardSection, Button, Input, Header } from './common';

const baseURL = 'https://lotus-udes.herokuapp.com';
const indexAction = 255;

class Commandes extends Component {
  state = { 
    actions: [],
    selectedAction: ''
  };

  componentWillMount() {
    axios.get(`${baseURL}/listeVariables`)
      .then(response => this.setState({
        actions: response.data.actions,
        selectedAction: response.data.actions[0]
      }));
  }

  listItem() {
    return this.state.actions.map(action =>
      <Picker.Item key={action} label={action} value={action} />
    );
  }

  sendData() {
    axios.post(`${baseURL}/updateVariable`, {
      index: indexAction,
      value: this.state.actions.indexOf(this.state.selectedAction),
      type: '3g'
    });
  }

  render() {
    return (
      <View>
        <Card>
          <Header>Envoyer commande</Header>
          <CardSection>
            <Input
              placeholder="ACTION_CMD"
              editable={false}
            />
          </CardSection>

          <CardSection>
            <Picker
              style={{ flex: 1 }}
              selectedValue={this.state.selectedAction}
              onValueChange={selectedAction => this.setState({ selectedAction })}
            >
              {this.listItem()}
            </Picker>
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

export default Commandes;
