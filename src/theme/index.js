import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  shadows: ['none'],
  palette: {
    primary: {
      main: '#239C6D',
      dark: '#155E41',
    },
    secondary: {
      main: '#F2F5F4'
    },
    grey: {
      light: '#F2F5F4',
    },
    background: {
      default: 'white'
    }
  },
  typography: {
    fontFamily: 'Arial',
    primary: '#494949',
    body1: {
      fontSize: '14px',
    },
    h5: {
      fontWeight: 700,
    },
    button: {
      textTransform: 'none'
    }
  }
});

export default theme;
