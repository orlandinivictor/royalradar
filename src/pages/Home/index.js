import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';

import { Box, Divider, List, ListItem, Grid, Typography } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import { styled } from '@mui/styles';

import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItemIcon from '@mui/material/ListItemIcon';
import LogoutIcon from '@mui/icons-material/Logout';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CameraOutdoorIcon from '@mui/icons-material/CameraOutdoor';

import { styles } from './styles';
import { useSnackbar } from 'notistack';

const drawerWidth = 200;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(7)} + 1px)`,
  },
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: '#fff',
  '& svg': {
    fill: '#fff',
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export default function Home() {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const classes = styles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    Cookies.remove('userID');

    enqueueSnackbar('Logout efetuado com sucesso', {
      variant: 'success',
      autoHideDuration: 3000,
    });
    history.push('/');
  };

  return (
    <Box className={classes.homeScreen}>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          {open ? (
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          ) : (
            <IconButton onClick={handleDrawerOpen}>
              <MenuIcon />
            </IconButton>
          )}
        </DrawerHeader>
        <Divider />
        <Box style={{ flex: 1 }} />
        <List>
          <ListItem button onClick={handleLogout}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="LOGOUT" />
          </ListItem>
        </List>
      </Drawer>

      <Box className={classes.homeContainer}>
        <Typography
          variant="h4"
          style={{ marginBottom: 5, fontWeight: 'bold', color: '#fff' }}
        >
          Minhas câmeras
        </Typography>
        <Grid container spacing={2}>
          {new Array(21).fill('x').map((item, i) => (
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3} key={i}>
              <Box className={classes.item}>
                <CameraOutdoorIcon style={{ width: 80, height: 80 }} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
