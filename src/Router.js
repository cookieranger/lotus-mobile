import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Menu from './components/Menu';
import Variables from './components/Variables';
import Commandes from './components/Commandes';
import Graphique from './components/Graphique';
import Tests from './components/Tests';

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="login" component={LoginForm} title="Authentification" />
        <Scene key="tests" component={Tests} title="Liste des tests" />
        <Scene key="menu" component={Menu} title="Menu" />
        <Scene key="graphique" component={Graphique} title="Graphique" />
        <Scene key="menu" component={Menu} title="Menu" />
        <Scene key="variables" component={Variables} title="Variables" />
        <Scene key="commandes" component={Commandes} title="Commandes" />
      </Stack>
    </Router>
  );
};

export default RouterComponent;
