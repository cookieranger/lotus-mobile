import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Menu from './components/Menu';

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="menu" component={Menu} title="Menu" />
        <Scene key="login" component={LoginForm} title="Authentification" /> 
      </Stack>
    </Router>
  );
};

export default RouterComponent;
