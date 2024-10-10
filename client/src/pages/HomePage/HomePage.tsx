import { Badge, Box, Button, Typography } from '@mui/material';
import styles from './HomePage.module.css';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ChatComponent from '../../components/chat/ui/ChatComponent';
import { useAppSelector } from '../../redux/hooks';

export default function HomePage(): JSX.Element {
  const { user } = useAppSelector((store) => store.user);
  const navigate: NavigateFunction = useNavigate();
  const [isChatOpen, setChatOpen] = useState<boolean>(false);

  const unread = JSON.parse(localStorage.getItem(user.id.toString())) || 0;

  const keys: any = [];
  for (let i = 0; i < localStorage.length; i++) {
    keys.push(localStorage.key(i));
  }

  const handleOpenChat = () => {
    setChatOpen(true);

    localStorage.setItem(user.id.toString(), JSON.stringify(0));
  };

  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <Typography variant="h2" component="h2">
            Конфигуратор ПК
          </Typography>
          <Typography variant="h5" component="h4">
            <br />
            Добро пожаловать в Конфигуратор Идеального ПК!
            <br />
            На нашем сайте вы можете создать компьютер, полностью адаптированный
            под ваши задачи и предпочтения.
            <br />
            Просто выберите необходимые компоненты, и конфигуратор поможет вам
            собрать ПК вашей мечты!
            <br />
            Соберите свой идеальный компьютер уже сегодня – начните прямо
            сейчас!
          </Typography>
        </div>
        <img className={styles.photo} src="/landingPic2.png"></img>
      </div>
      <div className={styles.button}>
        <Button
          sx={{ width: '200px', fontSize: '20px' }}
          onClick={() => navigate('/configurator')}
          variant="contained"
        >
          Собрать ПК
        </Button>
      </div>
      {user.email && (
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            mt: '10px',
          }}
        >
          <Badge
            sx={{
              zIndex: 9,
            }}
            badgeContent={unread}
            color="error"
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <Button
              sx={{ width: '200px', fontSize: '20px' }}
              onClick={handleOpenChat}
              variant="contained"
            >
              Чат
            </Button>
          </Badge>
        </Box>
      )}
      {isChatOpen && <ChatComponent setChatOpen={setChatOpen} />}
    </div>
  );
}
