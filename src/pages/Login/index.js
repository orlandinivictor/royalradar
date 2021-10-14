import { useState } from 'react';
import { useHistory, Link, useLocation } from 'react-router-dom';
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import Cookies from 'js-cookie';
import { useSnackbar } from 'notistack';

import { auth } from '../../services/firebase';

import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  Link as MUILink,
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

import logo from '../../assets/logo.png';

import styles from './styles';

export default function Login() {
  const { enqueueSnackbar } = useSnackbar();

  const history = useHistory();
  const params = useLocation();
  const isRegister = params.pathname === '/register';

  const classes = styles();

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const res = await signInWithPopup(auth, provider);

      // Google Credentials;
      // const credential = GoogleAuthProvider.credentialFromResult(res);
      // const authToken = credential.accessToken;

      const user = res.user;

      Cookies.set('userID', user.uid, { expires: 1 });

      enqueueSnackbar('Login efetuado com sucesso', {
        variant: 'success',
        autoHideDuration: 3000,
      });

      history.push('/');
    } catch (err) {
      enqueueSnackbar(
        'Houve uma falha no login, entre em contato com o administrador',
        {
          variant: 'error',
          autoHideDuration: 3000,
        },
      );
    }
  };

  const handleLogin = async () => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, pass);

      const user = res.user;

      Cookies.set('userID', user.uid, { expires: 1 });

      enqueueSnackbar('Login efetuado com sucesso', {
        variant: 'success',
        autoHideDuration: 3000,
      });

      history.push('/');
    } catch (err) {
      enqueueSnackbar('E-mail ou senha inválidos', {
        variant: 'error',
        autoHideDuration: 3000,
      });
    }
  };

  const handleCreateAccount = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, pass);

      enqueueSnackbar('Cadastro efetuado com sucesso', {
        variant: 'success',
        autoHideDuration: 3000,
      });

      setEmail('');
      setPass('');
      history.push('/login');
    } catch (err) {
      enqueueSnackbar('Não foi possível efetuar seu cadastro', {
        variant: 'error',
        autoHideDuration: 3000,
      });
    }
  };

  return (
    <Box className={classes.loginScreen}>
      <Paper elevation={3} className={classes.loginContainer}>
        <Box className={classes.companyInfo}>
          <img src={logo} alt="Logotipo Royal Radar" className={classes.logo} />

          <Typography className={classes.welcomeText}>
            Seja bem-vindo ao portal de acesso de monitoramento de cameras
            RoyalRadar
          </Typography>
        </Box>

        <Box className={classes.loginInfos}>
          <Box className={classes.inputs}>
            <TextField
              id="email"
              margin="dense"
              label="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              InputProps={{
                classes: { notchedOutline: classes.notchedOutline },
              }}
            />
            <TextField
              id="password"
              margin="dense"
              label="Senha"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              name="pass"
              InputProps={{
                classes: { notchedOutline: classes.notchedOutline },
              }}
            />
            {!isRegister && (
              <Typography variant="caption">
                Ainda não tem uma conta?{' '}
                <MUILink component={Link} to="/register">
                  Clique aqui para criar
                </MUILink>
              </Typography>
            )}
          </Box>

          <Box className={classes.buttons}>
            {!isRegister ? (
              <>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleLogin}
                >
                  Logar com senha
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleGoogleLogin}
                  className={classes.googleLogin}
                >
                  <GoogleIcon />
                  <span>Logar com o Google</span>
                </Button>
              </>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={handleCreateAccount}
              >
                Criar conta
              </Button>
            )}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
