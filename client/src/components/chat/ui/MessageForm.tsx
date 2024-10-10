/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable consistent-return */
import { SendOutlined } from '@mui/icons-material';
import { Box, Button, TextField } from '@mui/material';
import { ChangeEvent, RefObject, useEffect, useState } from 'react';

type MessageFormProps = {
  socketRef: RefObject<WebSocket>;
  submitHandler: (input: string) => void;
};

export default function MessageForm({
  submitHandler,
  socketRef,
}: MessageFormProps) {
  const [input, setInput] = useState('');
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

  useEffect(() => {
    if (!socketRef.current) return;

    const socket = socketRef.current;

    socket.send(JSON.stringify({ type: 'TYPING_FROM_CLIENT' }));

    const time = setTimeout(() => {
      socket.send(JSON.stringify({ type: 'STOP_TYPING_FROM_CLIENT' }));
    }, 1000);

    return () => {
      clearTimeout(time);
    };
  }, [input]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        submitHandler(input);
        setInput('');
      }}
    >
      <Box sx={{ width: '100%', display: 'flex' }}>
        <TextField
          sx={{ flexGrow: 1 }}
          placeholder="Введите сообщение..."
          autoComplete="off"
          value={input}
          onChange={changeHandler}
        />

        <Button disabled={!input} variant="contained" type="submit">
          <SendOutlined />
        </Button>
      </Box>
    </form>
  );
}
