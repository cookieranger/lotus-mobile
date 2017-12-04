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
            <Button onPress={Actions.resultats}>
              Résultats
            </Button>
          </CardSection>

          <CardSection>
            <Button onPress={Actions.variables}>
              Variables
            </Button>
          </CardSection>

          <CardSection>
            <Button onPress={Actions.commandes}>
              Commandes
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
