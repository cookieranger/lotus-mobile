import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Menu from './components/Menu';
import Variables from './components/Variables';
import Commandes from './components/Commandes';
import Resultats from './components/Resultats';

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="login" component={LoginForm} title="Authentification" />
        <Scene key="menu" component={Menu} title="Menu" />
        <Scene key="variables" component={Variables} title="Variables" />
        <Scene key="commandes" component={Commandes} title="Commandes" />
        <Scene key="resultats" component={Resultats} title="Résultats" />
      </Stack>
    </Router>
  );
};

export default RouterComponent;
