import { Typography, Divider, Box, img,  } from '@mui/material';
import Grid from '@mui/material/Grid2';
import styles from './Footer.module.css';

export default function Footer(): JSX.Element {
  return (
    <Box className={styles.footer} sx={{bgcolor: 'background.paper'}}>
      <Divider />
      <div className={styles.footerContent}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 3 }}>
           
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              px={3}
            >
              <Box mt={2}>
                <img
                  src="/tk3.png"
                  style={{ maxWidth: '60%', height: 'auto' }}
                />
              </Box>
            </Box>
            <Box mt={2}>
              <Typography
                variant="body2"
                align="center"
                className={styles.copyright}
              >
                Copyright ©️2009-2024 TECHNO-KITCHEN.
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
           
            <Typography variant="h5" align="center" style={{ color: 'white' }}>
              Модели
            </Typography>
            <Box mt={2}>
              {['Игровые компьютеры', 'Рабочие станции', 'Каталог'].map(
                (item) => (
                  <Typography
                    key={item}
                    align="center"
                    style={{ color: 'white' }}
                  >
                    {item}
                  </Typography>
                )
              )}
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            
            <Typography variant="h5" align="center" style={{ color: 'white' }}>
              Категории
            </Typography>
            <Box mt={2}>
              {[
                'Процессоры',
                'Видеокарты',
                'Материнские платы',
                'Оперативная память',
                'SSD и HDD',
                'Системы охлаждения',
              ].map((item) => (
                <Typography
                  key={item}
                  align="center"
                  style={{ color: 'white' }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            
            <Typography variant="h5" align="center" style={{ color: 'white' }}>
              Наши контакты
            </Typography>
            <Box mt={2}>
              <Typography align="center" style={{ color: 'white' }}>
                8 (800) 000 00-00
              </Typography>
              <Typography align="center" style={{ color: 'white' }}>
                г. Волково, ул. Фантазийная, д.123
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </div>
      <Divider />
    </Box>
  );
}
