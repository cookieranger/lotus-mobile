import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import { View, Text } from 'react-native';
import { Card, CardSection, Button, Header } from './common';

const baseURL = 'https://lotus-udes.herokuapp.com';

const indexAction = 255;
const indexStart = 3;

class Status extends Component {
  state = {
    latestTest: [{}, {}],
    runningTest: []
  }

  componentWillMount() {
    this.getLatestTest(0);
    this.testIsRunning(0);
    this.getLatestTest(1);
    this.testIsRunning(1);
  }

  getLatestTest(station) {
    console.log(`${baseURL}/api/tests/getLatest`)
    axios.get(`${baseURL}/api/tests/getLatest/${station}`)
      .then((res) => {
        const latestTests = this.state.latestTest;
        latestTests[station] = res.data;
        this.setState({ latestTests });
      });
  }

  testIsRunning(station) {
    axios.get(`${baseURL}/api/stations/${station}/testIsRunning`)
      .then((res) => {
        const runningTest = this.state.runningTest;
        runningTest[station] = res.data;
        this.setState({ runningTest });
      });
  }

  sendCommand(cmd, station) {
    axios.post(`${baseURL}/command/${cmd}`, {
      station
    }).then(() => {
      this.testIsRunning(station);
      this.getLatestTest(station);
    });
  }

  startTest(station) {
    axios.post(`${baseURL}/updateVariable`, {
      index: indexAction - station,
      value: indexStart,
      type: '3g'
    });

    this.sendCommand('start', station);
  }

  startedAt(station) {
    const latestTest = this.state.latestTest[station];
    return moment(latestTest.startedAt).format('DD/MM/YYYY HH:mm');
  }

  endedAt(station) {
    const latestTest = this.state.latestTest[station];
    if ('endedAt' in latestTest) {
      return moment(latestTest.endedAt).format('DD/MM/YYYY HH:mm');
    }
    return 'Toujours en cours';
  }

   buttonTest(station) {
    if (this.state.runningTest[station] === false) {
      return (
        <Button
          onPress={() => this.startTest(station)}
        >
          Démarrer test
        </Button>
      );
    } else if (this.state.runningTest[station] === true) {
      return (
        <Button
          onPress={() => this.sendCommand('stop', station)}
        >
          Arrêter test
        </Button>
      );
    }
  }

  render() {
    const { leftText, rightText, view } = styles;

    return (
      <View>
        <Card>
          <Header>Dernier test pour bouée 1</Header>
          <CardSection>
          <View style={view}>
            <Text style={leftText}>Commencé à:</Text>
            <Text style={rightText}>{this.startedAt(0)}</Text>
          </View>
          </CardSection>
          <CardSection>
          <View style={view}>
            <Text style={leftText}>Terminé à: </Text>
            <Text style={rightText}>{this.endedAt(0)}</Text>
          </View>
          </CardSection>
          <CardSection>
            {this.buttonTest(0)}
          </CardSection>
        </Card>

        <Card>
          <Header>Dernier test pour bouée 2</Header>
          <CardSection>
          <View style={view}>
            <Text style={leftText}>Commencé à:</Text>
            <Text style={rightText}>{this.startedAt(1)}</Text>
          </View>
          </CardSection>
          <CardSection>
          <View style={view}>
            <Text style={leftText}>Terminé à: </Text>
            <Text style={rightText}>{this.endedAt(1)}</Text>
          </View>
          </CardSection>
          <CardSection>
            {this.buttonTest(1)}
          </CardSection>
        </Card>
      </View>
    );
  }
}

const styles = {
  leftText: {
    flex: 2,
    paddingLeft: 10
  },
  rightText: {
    alignSelf: 'flex-end',
    paddingRight: 10
  },
  view: {
    flex: 1,
    flexDirection: 'row'
  }
};

export default Status;
