import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.grey.light,
    borderRadius: '10px',
    marginBottom: '20px',
  },
  cardContentRoot: {
    padding: '24px',
  },
  moreLink: {
    paddingTop: '10px',
  },
}));

export default { useStyles };
