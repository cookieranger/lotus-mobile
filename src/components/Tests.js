import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import { View, Picker, Platform } from 'react-native';
import { Card, CardSection, Button, Header } from './common';
import { Actions } from 'react-native-router-flux';
import { selectTest } from '../actions';
import { connect } from 'react-redux';

const baseURL = 'https://lotus-udes.herokuapp.com';

class Tests extends Component {
  state = { 
    tests: [],
    selectedTest: '',
    value: '',
  };

  componentWillMount() {
    axios.get(`${baseURL}/api/tests`)
      .then((response) => {
        this.props.selectTest(response.data[0]._id);
        this.setState({
          tests: response.data,
        });
      });
  }

  listItem() {
    return this.state.tests.map(test =>
      <Picker.Item key={test._id} label={moment(test.startedAt).format('YYYY-MM-DD HH:mm:ss')} value={test._id} />
    );
  }

  showGraph(capteur) {
    Actions.graphique({ capteur });
  }

  renderSectionButtons() {
    if (Platform.OS === 'ios') {
      return (
        <CardSection>
          <Button onPress={this.showGraph.bind(this, 0)}>
            LED bleue
          </Button>
          <Button onPress={this.showGraph.bind(this, 1)}>
            LED verte
          </Button>
          <Button onPress={this.showGraph.bind(this, 2)}>
            Température
          </Button>
        </CardSection>
      );
    }
    return null;
  }

  render() {
    return (
      <View>
        <Card>
          <Header>Sélectionner test</Header>
          <CardSection>
            <Picker
              style={{ flex: 1 }}
              selectedValue={this.props.selectedTest}
              onValueChange={(selectedTest) => {
                console.log(selectedTest);
                this.props.selectTest(selectedTest);
              }}
            >
              {this.listItem()}
            </Picker>
          </CardSection>

          {this.renderSectionButtons()}
        </Card>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { selectedTest } = state;
  return { selectedTest };
};

export default connect(mapStateToProps, {
  selectTest
})(Tests);
