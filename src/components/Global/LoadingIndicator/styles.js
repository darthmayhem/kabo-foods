import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  loadingIndicatorContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    color: theme.palette.primary.light,
  },
}));

export default { useStyles };
