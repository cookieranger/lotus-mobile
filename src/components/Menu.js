import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button, Header } from './common';

class Menu extends Component {
  render() {
    return (
      <View>

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


        </Card>

        <View style={{ paddingTop: 10 }}>
          <Image
            style={styles.imageStyle}
            source={require('./logo.png')}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  imageStyle: {
    height: 240,
    width: 240,
    alignSelf: 'center'
  }
};

export default Menu;
