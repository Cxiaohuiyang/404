import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppHeader from './Component/Header';
import BottomNavigationExampleSimple from './BottomNavigation';
import injectTapEventPlugin from 'react-tap-event-plugin';

import LayoutStyle from './Style/layout.css';


require('./Style/lib-flexible');


injectTapEventPlugin();


const App = () => (
  <MuiThemeProvider>
    <AppHeader />
  </MuiThemeProvider>
);

const BottomNav = () => (
  <MuiThemeProvider>
    <BottomNavigationExampleSimple />
  </MuiThemeProvider>
);
ReactDOM.render(
    <div className={LayoutStyle.layout}>
      <div className={LayoutStyle.header}>
        <App>
        </App>
      </div>
      <div className={LayoutStyle.content}>

      </div>
      <div className={LayoutStyle.footer}>
        <BottomNav></BottomNav>
      </div>
    </div>,
  document.getElementById('app')
);