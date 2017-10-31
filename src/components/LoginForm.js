import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
  render() {
    return (
      <View>
        <Card>
          <CardSection>
            <Input
              label="Courriel"
              placeholder="nom@domaine.com"
              value={this.props.email}
            />
          </CardSection>

          <CardSection>
            <Input
              label="Mot de passe"
              placeholder="********"
              value={this.props.password}
            />
          </CardSection>

          <CardSection>
            <Button>
              Connexion
            </Button>
          </CardSection>

        </Card>

        <View style={{ paddingTop: 40 }}>
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
    height: 300,
    width: 300,
    alignSelf: 'center'
  }
};

export default LoginForm;
