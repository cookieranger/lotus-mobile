import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button, Header } from './common';

class Menu extends Component {
  render() {
    return (
      <View>
        <Header>Projet LOTUS</Header>
        <Card>
          <CardSection>
            <Button onPress={Actions.tests}>
              Liste des tests
            </Button>
          </CardSection>

          <CardSection>
            <Button onPress={Actions.status}>
              Status des bouées
            </Button>
          </CardSection>

          <CardSection>
            <Button onPress={Actions.variables}>
              Modifier variables
            </Button>
          </CardSection>

          <CardSection>
            <Button onPress={Actions.commandes}>
              Envoyer commandes
            </Button>
          </CardSection>

          <CardSection>
            <Button onPress={Actions.pop}>
              Déconnexion
            </Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}

export default Menu;
