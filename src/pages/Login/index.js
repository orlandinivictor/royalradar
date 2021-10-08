import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import Cookies from 'js-cookie';

import { auth } from '../../services/firebase';

import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from '@mui/material';

import logo from '../../assets/logo.png';

import styles from './styles';

export default function Login() {
  const history = useHistory();
  const classes = styles();

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const res = await signInWithPopup(auth, provider);

    const credential = GoogleAuthProvider.credentialFromResult(res);
    const authToken = credential.accessToken;

    const user = res.user;

    Cookies.set('authToken', authToken, { expires: 1 });
    Cookies.set('userID', user.uid, { expires: 1 });

    history.push('/');
  }

  return (
    <Box className={classes.loginScreen}>
      <Paper elevation={3} className={classes.loginContainer}>
        <Box className={classes.companyInfo}>
          <img src={logo} alt="Logotipo Royal Radar" className={classes.logo} />

          <Typography className={classes.welcomeText}>
            Seja bem-vindo ao portal de acesso de monitoramento de cameras RoyalRadar.
          </Typography>
        </Box>

        <Box className={classes.loginInfos}>
          <Box className={classes.inputs}>
            <TextField margin="dense" label="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" InputProps={{ classes: { notchedOutline: classes.notchedOutline }}} />
            <TextField margin="dense" label="Senha" value={pass} onChange={(e) => setPass(e.target.value)} type="password" name="pass" InputProps={{ classes: { notchedOutline: classes.notchedOutline }}} />
          </Box>

          <Box className={classes.buttons}>
            <Button variant="contained" color="primary">Login com senha</Button>
            <Button variant="contained" color="primary" onClick={handleGoogleLogin}>Faça login com o Google</Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}
