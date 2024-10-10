import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import InputWithLabels from '../../ui/InputWithLabels';
import { Alert, Button, Tooltip } from '@mui/material';
import { validateLoginForm } from '../../utils/validators';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchSignInUser } from '../../redux/thunkActions';
import { ErrorOutline } from '@mui/icons-material';

export default function LoginPageInputs() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [errAlert, setErrAlert] = useState<boolean>(false);
  const { error } = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();

  const emailChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    setIsFormValid(validateLoginForm({ email, password }));
  }, [email, password, setIsFormValid]);

  const submitHandler = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      const response = await dispatch(
        fetchSignInUser({ email, password })
      ).unwrap();
      setEmail('');
      setPassword('');
    } catch (error) {
      console.log(error);
      setErrAlert(true);
      setTimeout(() => {
        setErrAlert(false);
      }, 1500);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      {errAlert && (
        <Alert icon={<ErrorOutline fontSize="inherit" />} severity="error">
          {error.message}
        </Alert>
      )}
      <InputWithLabels
        label="Email"
        value={email}
        type="email"
        name="email"
        onChangeHandler={emailChangeHandler}
        placeHolder="Введите почту"
      />
      <InputWithLabels
        label="Пароль"
        value={password}
        type="password"
        name="password"
        onChangeHandler={passwordChangeHandler}
        placeHolder="Введите пароль"
      />
      <Tooltip
        title={
          !isFormValid
            ? 'Заполните все поля правильно, чтобы войти'
            : 'Войти'
        }
      >
        <div>
          <Button
            type="submit"
            sx={{ marginTop: '15px', width: '100%' }}
            variant="contained"
            disabled={!isFormValid}
          >
            Войти
          </Button>
        </div>
      </Tooltip>
    </form>
  );
}
