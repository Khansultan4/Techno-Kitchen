import { useState } from 'react';
import FormModal from '../../ui/Modal';
import { Box, Link, Typography } from '@mui/material';
import Register from '../Register/Register';
import Login from '../Login/Login';

export default function Auth() {
  const [isRegister, setIsregister] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpen = (): void => setIsOpen(true);
  const handleClose = (): void => setIsOpen(false);
  return (
    <FormModal
      isOpen={isOpen}
      handleOpen={handleOpen}
      handleClose={handleClose}
      btnText="Login"
    >
      {!isRegister ? <Login /> : <Register />}
      {!isRegister ? (
        <>
          <Box sx={{ minWidth: '200px' }}>
            <Typography>Still don't have an acoount?</Typography>
            <Link
              sx={{ cursor: 'pointer' }}
              onClick={() => setIsregister(true)}
            >
              Sign up
            </Link>
          </Box>
        </>
      ) : (
        <>
          <Box sx={{ minWidth: '200px' }}>
            <Typography>Already have an account?</Typography>
            <Link
              sx={{ cursor: 'pointer' }}
              onClick={() => setIsregister(false)}
            >
              Sign in
            </Link>
          </Box>
        </>
      )}
    </FormModal>
  );
}
