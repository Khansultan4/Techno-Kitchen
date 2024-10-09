import { Typography } from '@mui/material';
import RegisterPageInputs from './RegisterPageInputs';

export default function Register() {
  return (
    <>
      <Typography variant="h5" sx={{ color: 'text.primary' }}>
        Регистрация
      </Typography>
      <Typography sx={{ color: 'text.primary' }}>
        
      </Typography>
      <RegisterPageInputs />
    </>
  );
}
