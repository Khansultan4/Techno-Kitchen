import React, { Dispatch, SetStateAction } from 'react';

import useChat from '../../../hooks/useChat';
import { useAppSelector } from '../../../redux/hooks';
import MessagesList from './MessagesList';
import MessageForm from './MessageForm';
import UsersList from './UsersList';
import { Box, IconButton } from '@mui/material';
import { CloseOutlined } from '@mui/icons-material';

type ChatComponentProps = {
  setChatOpen: Dispatch<SetStateAction<boolean>>;
};

export default function ChatComponent({ setChatOpen }: ChatComponentProps) {
  const { user: loggedUser } = useAppSelector((store) => store.user);
  const { messages, users, submitMessage, socketRef, resetCount } = useChat();
  return (
    <>
      <Box
        sx={{
          width: '400px',
          position: 'absolute',
          top: '30%',
          left: '30%',
          transform: 'translate(-30%, -30%)',
          border: '2px solid yellow',
          bgcolor: 'black',
          padding: '1rem',
        }}
      >
        <IconButton
          onClick={() => {
            setChatOpen(false);
            resetCount();
          }}
          sx={{ position: 'absolute', top: '0', right: '0' }}
          color="primary"
        >
          <CloseOutlined />
        </IconButton>
        <UsersList loggedUser={loggedUser} users={users} />
        <MessagesList messages={messages} loggedUser={loggedUser} />
        <MessageForm submitHandler={submitMessage} socketRef={socketRef} />
      </Box>
    </>
  );
}
