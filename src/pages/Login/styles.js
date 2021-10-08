import {
  makeStyles
} from '@mui/styles';

const styles = makeStyles({
  loginScreen: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '100vw',
    height: '100vh',

    background: '#f1f5f9',
  },

  loginContainer: {
    paddingInline: 10,
    paddingBlock: 20,

    width: '80%',
    height: '80%',

    background: '#0e2058 !important',
  },

  companyInfo: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  logo: {
    width: 200,
    objectFit: 'cover',
  },

  welcomeText: {
    width: 250,

    textAlign: 'justify',
    fontSize: 17,
    fontWeight: 700,
    color: '#fff',
  },

  loginInfos: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  inputs: {
    display: 'flex',
    flexDirection: 'column',

    '& label': {
      color: '#ccc',
    },

    '& .Mui-focused': {
      color: '#ccc !important',
      borderColor: '#bbb !important',
    }
  },

  notchedOutline: {
    borderWidth: '0px',
    borderColor: '#bbb !important'
  },

  buttons: {
    display: 'flex',
    flexDirection: 'column',

    '& button': {
      marginBlock: 5,
      fontSize: 14
    }
  },
});

export default styles;
