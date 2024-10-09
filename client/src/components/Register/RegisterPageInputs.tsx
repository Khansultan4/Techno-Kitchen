import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import InputWithLabels from '../../ui/InputWithLabels';
import { Alert, Button, Tooltip } from '@mui/material';
import { validateLoginForm } from '../../utils/validators';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchSignUpUser } from '../../redux/thunkActions';
import { ErrorOutline } from '@mui/icons-material';

export default function RegisterPageInputs() {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [errAlert, setErrAlert] = useState<boolean>(false);
  const { error } = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();

  const nameChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setUsername(e.target.value);
  };

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
      await dispatch(fetchSignUpUser({ username, email, password })).unwrap();
      setUsername('');
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
          {error?.message}
        </Alert>
      )}
      <InputWithLabels
        label="Имя пользователя"
        value={username}
        type="text"
        name="username"
        onChangeHandler={nameChangeHandler}
        placeHolder="Введите имя"
      />
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
            ? 'Почта должна содержать @ и пароль должен быть длиннее 5 символов'
            : 'Регистрация'
        }
      >
        <div>
          <Button
            type="submit"
            sx={{ marginTop: '15px', width: '100%' }}
            variant="contained"
            disabled={!isFormValid}
          >
            Зарегистрироваться
          </Button>
        </div>
      </Tooltip>
    </form>
  );
}
