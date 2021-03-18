import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  siteBody: {
    width: '1440px',
    backgroundColor: 'white',
  },
  contentBody: {
    minHeight: 'calc(100vh - 502px)',
  }
}));

export default useStyles;
