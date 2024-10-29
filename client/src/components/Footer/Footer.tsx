import { Typography, Divider, Box, img, Grid2 } from '@mui/material';
import Grid from '@mui/material/Grid2';
import styles from './Footer.module.css';

export default function Footer(): JSX.Element {
  return (
    <Box className={styles.footer} sx={{ bgcolor: 'background.paper' }}>
      <Divider />
      <div className={styles.footerContent}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 1, md: 1.6 }}>
              <Box sx={{my: 'auto', display:'flex', alignContent:'center', pl:2, alignItems:"center", height:'100%'}}>
                <img
                  src="/icons/computer.svg"
                  style={{ width: '50px', height: 'auto', display: 'inline-block' }}
                />
                <Typography
                  variant="body2"
                  align="left"
                  className={styles.copyright}
                  sx={{ml: 1}}
                >
                  Copyright ©️2009-2024 <br/> TECHNO-KITCHEN
                </Typography>
            </Box>

          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="h5" align="center" style={{ color: 'white' }}>
              Модели
            </Typography>
            <Box mx={'auto'} width={'70%'} sx={{maxWidth:'300px', justifyContent: 'space-between', display: 'flex', flexWrap: 'wrap'}}>
              {['Игровые компьютеры', 'Рабочие станции', 'Периферия', 'Офисные компьютеры'].map(
                (item) => (
                  <Typography
                    key={item}
                    align="center"
                    style={{ color: 'white', textWrap: 'nowrap', margin: '0 5px' }}
                    variant='body2'
                  >
                    {item}
                  </Typography>
                )
              )}
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 3}} sx={{maxWidth:'400px'}}>
            <Typography variant="h5" align="center" style={{ color: 'white' }}>
              Категории
            </Typography>
            <Grid container columnGap={1} sx={{justifyContent: 'space-evenly', }}>
              {[
                'Процессоры',
                'Видеокарты',
                'Материнские платы',
                'Оперативная память',
                'SSD и HDD',
                'Охлаждение',
              ].map((item) => (
                <Grid size={1} key={item}>
                <Typography
                  
                  align='right'
                  style={{ color: 'white' }}
                  variant='body2'
                  >
                  {item}
                </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="h5" align="center" style={{ color: 'white' }}>
              Наши контакты
            </Typography>
            <Box>
              <Typography variant="body2" align="center" style={{ color: 'white' }}>
                8 (800) 000 00-00
              </Typography>
              <Typography variant="body2" align="center" style={{ color: 'white' }}>
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
