import { Box } from '@mui/material';
import { IMessage, IUser } from '../../../types/types';
import ChatMessage from './ChatMessage';
import { useEffect, useRef } from 'react';

type MessagesListProps = {
  messages: IMessage[];
  loggedUser: IUser;
};

export default function MessagesList({
  messages,
  loggedUser,
}: MessagesListProps) {
  const messageEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <Box
      sx={{
        minHeight: '23rem',
        maxHeight: '30rem',
        overflowY: 'auto',
        margin: 'auto',
        padding: '1rem',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      {messages.map((message: IMessage) => (
        <ChatMessage
          message={message}
          key={message.id}
          loggedUser={loggedUser}
        />
      ))}
      <div ref={messageEndRef}></div>
    </Box>
  );
}
