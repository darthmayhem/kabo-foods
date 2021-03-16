import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { makeStyles, MuiThemeProvider } from '@material-ui/core';
import theme from './theme';

import store from './store';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './screens/Home';

import './App.css';

const useStyles = makeStyles(() => ({
  siteBody: {
    width: '1440px',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.siteBody}>
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <BrowserRouter>
            <Header />
            <div>
              <Route exact path="/" component={Home} />
            </div>
            <Footer />
          </BrowserRouter>
        </MuiThemeProvider>
      </Provider>
    </div>
  );
};

export default App;
