import { Typography } from '@mui/material';
import LoginPageInputs from './LoginPageInputs';

export default function Login() {
  return (
    <>
      <Typography variant="h5" sx={{ color: 'white' }}>
        С возвращением!
      </Typography>
      <Typography sx={{ color: '#b9bbbe' }}>
        Мы рады видеть вас здесь!
      </Typography>
      <LoginPageInputs />
    </>
  );
}
