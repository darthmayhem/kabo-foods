import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';
import theme from './theme';
import store from './store';
import useStyles from './styles';

import Header from './components/Global/Header';
import Footer from './components/Global/Footer';
import Home from './screens/Home';

/**
 * renders the app
 * @returns {JSX.Element}
 * @constructor - the component
 */
const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.siteBody}>
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <BrowserRouter>
            <Header />
            <div className={classes.contentBody}>
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
