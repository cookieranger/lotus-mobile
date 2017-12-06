import React, { Component } from 'react';
import axios from 'axios';
import { View, Picker } from 'react-native';
import { Card, CardSection, Button, Header } from './common';

const baseURL = 'https://lotus-udes.herokuapp.com';
const indexAction = 255;

class Commandes extends Component {
  state = { 
    actions: [],
    selectedAction: '',
    selectedBouee: 0,
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
    const index = indexAction - this.state.selectedBouee;
    axios.post(`${baseURL}/updateVariable`, {
      index,
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
            <Picker
              style={{ flex: 1, width: 200, height: 100 }}
              itemStyle={{height: 100}}
              selectedValue={this.state.selectedBouee}
              onValueChange={selectedBouee => this.setState({ selectedBouee })}
            >
              <Picker.Item label={'Bouée 1'} value={0} />
              <Picker.Item label={'Bouée 2'} value={1} />
            </Picker>
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
