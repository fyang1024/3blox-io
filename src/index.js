import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Page from './Page';
import * as serviceWorker from './serviceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Provider as StoreProvider } from 'react-redux'
import store from './store';

const muiTheme = getMuiTheme();

function App(){
  return <StoreProvider store={store}>
      <MuiThemeProvider muiTheme={muiTheme}>
        <Page />
      </MuiThemeProvider>
  </StoreProvider>;
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();