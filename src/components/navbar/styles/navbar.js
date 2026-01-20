import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  appBar: {
    background: '#222',
    zIndex: 10,
    position: 'relative',
  },
  clearAll: {
    background: 'tomato',
  },
  title: {
    color: 'white',
    fontSize: '1.2rem',
    textDecoration: 'none',
  },
}));
