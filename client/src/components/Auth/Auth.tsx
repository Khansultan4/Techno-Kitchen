import { useState } from 'react';
import FormModal from '../../ui/Modal';
import { Box, Link, Typography } from '@mui/material';
import Register from '../Register/Register';
import Login from '../Login/Login';

export default function Auth({
  btnVariant = 'text',
  btnText = 'Login',
}: {
  btnVariant?: 'text' | 'contained' | 'outlined';
  btnText?: string;
}) {
  const [isRegister, setIsregister] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpen = (): void => setIsOpen(true);
  const handleClose = (): void => setIsOpen(false);
  return (
    <FormModal
      isOpen={isOpen}
      handleOpen={handleOpen}
      handleClose={handleClose}
      variant={btnVariant}
      btnText={btnText}
    >
      {!isRegister ? <Login /> : <Register />}
      {!isRegister ? (
        <>
          <Box sx={{ minWidth: '200px' }}>
            <Typography>Нет аккаунта?</Typography>
            <Link
              sx={{ cursor: 'pointer' }}
              onClick={() => setIsregister(true)}
            >
              Регистрация
            </Link>
          </Box>
        </>
      ) : (
        <>
          <Box sx={{ minWidth: '200px' }}>
            <Typography>Уже зарегистрированы?</Typography>
            <Link
              sx={{ cursor: 'pointer' }}
              onClick={() => setIsregister(false)}
            >
              Войти
            </Link>
          </Box>
        </>
      )}
    </FormModal>
  );
}
