import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.grey.light,
    borderRadius: '10px',
  },
  cardContentRoot: {
    padding: '24px',
  },
  avatar: {
    height: theme.spacing(8),
    width: theme.spacing(8),
  },
  moreLink: {
    paddingTop: '10px',
  },
  badge: {
    width: 90,
    height: 90,
    paddingLeft: 8,
    paddingRight: 8,
  }
}));

export default { useStyles };
