import { makeStyles } from '@mui/styles';

export const styles = makeStyles({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em',
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.5)',
      outline: '1px solid slategrey',
    },
  },

  homeScreen: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '100vw',
    height: '100vh',

    background: 'linear-gradient(to top left, #0e2058 60%, #fff 400%)',
  },

  homeContainer: {
    paddingLeft: 25,
    paddingRight: 10,
    paddingBlock: 30,

    flex: 1,
    margin: 30,
    maxHeight: '90%',
    overflowY: 'auto',

    background: 'rgba( 255, 255, 255, 0.25 ) !important',
    boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
    backdropFilter: 'blur( 4px )',
    '-webkit-backdrop-filter': 'blur( 4px )',
    border: '1px solid rgba( 255, 255, 255, 0.18 )',
  },

  item: {
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    padding: 10,

    width: '100%',
  },
});
