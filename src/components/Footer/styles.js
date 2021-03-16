import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  footerTop: {
    background: theme.palette.primary.main,
    padding: '60px 175px',
    color: 'white',
  },
  footerBottom: {
    padding: '25px 175px',
    background: theme.palette.primary.dark,
    color: 'white',
  },
  socialIcon: {
    padding: '0 6px',
  },
  signUpContainer: {
    marginTop: '15px',
  },
  inputBase: {
    borderWidth: 0,
    borderRadius: 8,
    backgroundColor: '#1C7D57',
    padding: '5px 17px',
    fontSize: '14px',
  },
  submitButton: {
    backgroundColor: 'white',
    borderRadius: 8,
    color: theme.palette.primary.main,
    fontSize: '14px',
  }
}));

const useTitleStyles = makeStyles(() => ({
  root: {
    fontSize: '20px',
    lineHeight: '28px',
    paddingBottom: '20px',
  },
}));

export default { useStyles, useTitleStyles };
