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

    background: 'linear-gradient(to top left, #0e2058 60%, #fff 400%)'
  },

  loginContainer: {
    paddingInline: 10,
    paddingBlock: 30,

    width: 600,
    // height: '80%',

    background: 'rgba( 255, 255, 255, 0.25 ) !important',
    boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
    backdropFilter: 'blur( 4px )',
    '-webkit-backdrop-filter': 'blur( 4px )',
    borderRadius: 10,
    border: '1px solid rgba( 255, 255, 255, 0.18 )'
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
    width: 300,

    textAlign: 'right',
    fontSize: '20px !important',
    letterSpacing: 0.5,
    fontWeight: '700 !important',
    color: '#000',
  },

  loginInfos: {
    display: 'flex',
    flexDirection: 'column',
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
    marginTop: 20,

    '& button': {
      marginBlock: 5,
      fontSize: 14
    }
  },

  googleLogin: {
    display: 'flex',
    alignItems: 'center',

    '& svg': {
      width: 25,
      height: 25,

      borderRight: '1px solid #ccc',
      paddingRight: 5,
    },

    '& span': {
      flex: 1,
      textAlign: 'center',
      marginLeft: 15,
    }
  }
});

export default styles;
