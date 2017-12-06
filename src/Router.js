import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Menu from './components/Menu';
import Variables from './components/Variables';
import Commandes from './components/Commandes';
import Graphique from './components/Graphique';
import Tests from './components/Tests';
import Status from './components/Status';

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root">
      <Scene key="status" component={Status} title="Status des bouées" />
        <Scene key="login" component={LoginForm} title="Authentification" />
        <Scene key="menu" component={Menu} title="Menu" />
        <Scene key="tests" component={Tests} title="Liste des tests" />
        
        <Scene key="graphique" component={Graphique} title="Graphique" />
        <Scene key="variables" component={Variables} title="Modifier variables" />
        <Scene key="commandes" component={Commandes} title="Envoyer commandes" />
      </Stack>
    </Router>
  );
};

export default RouterComponent;
