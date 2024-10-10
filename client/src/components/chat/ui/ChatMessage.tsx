import { Box, Card, Paper, Typography } from '@mui/material';
import { IMessage, IUser } from '../../../types/types';

type ChatMessageProps = {
  message: IMessage;
  loggedUser: IUser;
};

export default function ChatMessage({ message, loggedUser }: ChatMessageProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
  };
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
      <Paper
        sx={{
          width: '15rem',
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
            <Typography color="primary" variant='body2'>{message.User?.login}</Typography>
            <Typography color='primary.dark' variant='body2'>{formatDate(message.updatedAt)}</Typography>
            <Typography  variant='body2'>{message.text} </Typography>
            <Typography></Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
