import { styled, alpha } from '@mui/material/styles';
import Navsearch from './Navsearch';
import {
  AppBar,
  Button,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Paper,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Auth from '../Auth/Auth';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchLogoutUser } from '../../redux/thunkActions';
import { NavigateFunction, NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar(): JSX.Element {
  const navigate: NavigateFunction = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((store) => store.user);

  const logoutHandler = async (): Promise<void> => {
    try {
      dispatch(fetchLogoutUser());
    } catch (error) {
      console.log(error);
    }
  };

  const [navOpen, setNavOpen] = useState(false); 

  const handleMenuClick = () => {
    setNavOpen(!navOpen);
  };

  return (
    <Box sx={{ flexGrow: 1, position: 'fixed', width:'100vw', top: 0, zIndex:10 }}>
      <AppBar position="static">
        <Toolbar>
          <img                   src="/icons/computer.svg"
                  style={{ width: '35px', height: 'auto', display: 'inline-block' }} onClick={() => navigate('/')}></img>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ ml: 1, mr: 2 }}
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>
          {navOpen && ( 

          <Box onClick={handleMenuClick} component = {Paper} style={{ position:'fixed', width: '165px', height: '190px', overflow: 'auto', marginTop: '250px' }}>
            <Button onClick={() => navigate('/')} variant="text" sx={{ mt: 2, marginLeft:'14px',marginTop: '10px' }}>
              Главная
            </Button>
            <Button  onClick={() => {
              navigate('/configurator');
            }} variant="text" sx={{ mt: 2, marginLeft:'14px',marginTop: '5px'}}>
              Конфигуратор
            </Button>
            <Button onClick={() => navigate('/configs')} variant="text" sx={{ mt: 2, marginLeft:'14px',marginTop: '5px' }}>
              Сборки
            </Button>
            <Button onClick={() => navigate('/myConfigs')} variant="text" sx={{ ml: 2, marginLeft:'14px',marginTop: '5px' }}>
                  Мои сборки
                </Button>
          </Box>
          )}

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block', lineHeight: '18px' },
            }}
            onClick={() => navigate('/')}
          >
            Techno
            <br />
            Kitchen
          </Typography>


          <Navsearch />

          {user?.email ? (
            <>
              {user?.role === 'admin' ? (
                <NavLink to="/dashboard">
                  <Button variant="contained" sx={{ ml: 2 }}>
                    Админ панель
                  </Button>
                </NavLink>
              ) : (
                <Button onClick={() => navigate('/myConfigs')} variant="contained" sx={{ ml: 2 }}>
                  Мои сборки
                </Button>
              )}
              <Button
                onClick={logoutHandler}
                variant="contained"
                sx={{ ml: 2 }}
              >
                Выйти
              </Button>
            </>
          ) : (
            <Auth />
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
