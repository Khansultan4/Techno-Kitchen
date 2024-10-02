import { useState } from 'react';
import FormModal from '../../ui/Modal';
import { Link } from '@mui/material';
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
        <Link onClick={() => setIsregister(true)}>Create an account</Link>
      ) : (
        <Link onClick={() => setIsregister(false)}>
          Have already an account?
        </Link>
      )}
    </FormModal>
  );
}
