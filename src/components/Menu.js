import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';
import { Card, CardSection, Input, Button } from './common';

class Menu extends Component {
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
            <Button>
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

const styles = {
  imageStyle: {
    height: 300,
    width: 300,
    alignSelf: 'center'
  }
};

export default Menu;
