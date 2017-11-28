import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button } from './common';

class Menu extends Component {
  onButtonCommandsPress() {
    Actions.commandes();
  }

  render() {
    return (
      <View>
        <Card>
          <CardSection>
            <Button>
              Résultats
            </Button>
          </CardSection>
        </Card>

        <Card>
          <CardSection>
            <Button onPress={this.onButtonCommandsPress.bind(this)}>
              Commandes
            </Button>
          </CardSection>
        </Card>

        <Card>
          <CardSection>
            <Button>
              Déconnexion
            </Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}

export default Menu;
