import React, { Component } from 'react';
import {
  TouchableWithoutFeedback,
  Text,
  SectionList,
  View,
  LayoutAnimation,
  UIManager,
  Platform
} from 'react-native';
import axios from 'axios';
import { CardSection } from './common';

const baseURL = 'https://lotus-udes.herokuapp.com';

class Resultats extends Component {
  constructor() {
    super();

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  state = {
    selectedCapteur: null,
    resultats: []
  };

  componentWillMount() {
    axios.get(`${baseURL}/api/message/5a08c374438c1b00183bda4c/capteurs/0`)
      .then((response) => {
        const resultats = this.state.resultats;
        resultats[0] = { key: 'LED bleue', index: 0, data: response.data };
        this.setState({
          resultats
        });
      });

    axios.get(`${baseURL}/api/message/5a08c374438c1b00183bda4c/capteurs/1`)
      .then((response) => {
        const resultats = this.state.resultats;
        resultats[1] = { key: 'LED verte', index: 1, data: response.data };
        this.setState({
          resultats
        });
      });

    axios.get(`${baseURL}/api/message/5a08c374438c1b00183bda4c/capteurs/2`)
      .then((response) => {
        const resultats = this.state.resultats;
        resultats[2] = { key: 'Température', index: 2, data: response.data };
        this.setState({
          resultats
        });
      });
  }

  onPress(section) {
    let selectedCapteur = null;
    const index = section.index;

    if (this.state.selectedCapteur !== index) {
      selectedCapteur = index;
    }

    this.setState({ selectedCapteur });
  }

  keyExtractor = (item) => item._id;

  renderItem = ({ item }) => {
    if (this.state.selectedCapteur === item.capteur) {
      return (
        <View style={styles.transactionStyle}>
          <Text style={{ flex: 4 }}>{item.takenAt}</Text>
          <Text style={{ flex: 3 }}>{item.valeur}</Text>
        </View>
      );
    }

    return null;
  }

  renderSectionHeader = ({ section }) => {
    LayoutAnimation.spring();
    return (
      <TouchableWithoutFeedback onPress={this.onPress.bind(this, section)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {section.key}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  render() {
    return (
      <SectionList
        renderItem={this.renderItem.bind(this)}
        renderSectionHeader={this.renderSectionHeader}
        keyExtractor={this.keyExtractor}
        sections={this.state.resultats}
      />
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  transactionStyle: {
    flexDirection: 'row',
    padding: 5
  }
};

export default Resultats;
