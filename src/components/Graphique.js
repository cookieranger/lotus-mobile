import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import axios from 'axios';
import { StockLine } from 'react-native-pathjs-charts';
import { connect } from 'react-redux';
import { Header } from './common';

const baseURL = 'https://lotus-udes.herokuapp.com';

class Graphique extends Component {
  state = {
    resultats: []
  };

  componentWillMount() {
    axios.get(`${baseURL}/api/message/${this.props.selectedTest}/capteurs/${this.props.capteur}`)
      .then((response) => {
        const data = response.data;
        const resultats = this.state.resultats;

        data.forEach((d) => {
          d.takenAt = new Date(d.takenAt);
        });

        resultats[0] = data;

        this.setState({
          resultats
        });
      });
  }

  render() {
    let color;
    let titre;
    switch (this.props.capteur) {
      case 0:
          color = '#0000ff';
          titre = 'LED bleue';
          break;
      case 1:
          color = '#00ff00';
          titre = 'LED verte';
          break;
      case 2:
          color = '#000000';
          titre = 'Température';
          break;
      default:
        color = '';
        titre = '';
    }

    const options = {
      width: 280,
      height: 280,
      color,
      margin: {
        top: 50,
        left: 65,
        bottom: 25,
        right: 20
      },
      axisX: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'bottom',
        label: {
          fontFamily: 'Arial',
          fontSize: 14,
          fontWeight: true,
          fill: '#34495E'
        }
      },
      axisY: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'left',
        label: {
          fontFamily: 'Arial',
          fontSize: 14,
          fontWeight: true,
          fill: '#34495E'
        }
      }
    };

    return (
      <View>
        <Header>{titre}</Header>
        <StockLine data={this.state.resultats} options={options} xKey='takenAt' yKey='valeur' />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { selectedTest } = state;
  return { selectedTest };
};

export default connect(mapStateToProps)(Graphique);
