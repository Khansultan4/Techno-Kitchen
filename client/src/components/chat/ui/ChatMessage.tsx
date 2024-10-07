import { Box, Card, Typography } from '@mui/material';
import { IMessage, IUser } from '../../../types/types';

type ChatMessageProps = {
  message: IMessage;
  loggedUser: IUser;
};

export default function ChatMessage({ message, loggedUser }: ChatMessageProps) {
  const justifyContent =
    loggedUser.id === message.User?.id ? 'flex-end' : 'flex-start';
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: `${justifyContent}`,
        margin: '5px',
      }}
    >
      <Box
        sx={{
          minWidth: '15rem',
          maxWidth: '20rem',
          padding: '15px',
          overflowWrap: 'break-word',
        }}
      >
        <Box>
          <Typography color="primary">{message.User?.login}</Typography>
          <Typography>{message.text}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
