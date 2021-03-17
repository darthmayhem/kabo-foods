import { makeStyles } from '@material-ui/core';
import theme from '../../../../theme';

const useStyles = makeStyles(() => ({
  container: {
    padding: '51px 44px',
  },
  button: {
    padding: '2px 22px',
  },
  active: {
    color: 'white',
    backgroundColor: theme.palette.primary.main,
  },
  addLink: {
    color: theme.palette.primary.main,
  }
}));

const useButtonStyles = makeStyles(() => ({
  root: {
    padding: '2px 20px',
    margin: '0 9px',
  },
}));

export default { useStyles, useButtonStyles };
