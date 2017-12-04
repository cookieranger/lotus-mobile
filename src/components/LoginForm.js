import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, InputLabel, Button } from './common';

class LoginForm extends Component {
  state = { 
    email: '',
    password: ''
  };

  onButtonPress() {
    const { email, password } = this.state;
    if ((email === 'lotus' || email === 'Lotus') && password === '1234') {
      this.setState({ email: '', password: '' });
      Actions.menu();
    }
  }

  render() {
    return (
      <View>
        <Card>
          <CardSection>
            <InputLabel
              label="Courriel"
              placeholder="nom@domaine.com"
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
          </CardSection>

          <CardSection>
            <InputLabel
              label="Mot de passe"
              placeholder="********"
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />
          </CardSection>

          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
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
