import { Typography, Rating, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';


export default function ConfigPage(): JSX.Element {
  return (
    <div style={{ padding: 50 }}>
      {/* Верхний блок с двумя подблоками */}
      <Grid container spacing={2} sx={{ marginBottom: 16 }}>
        <Grid size={{ xs: 12, sm: 4, md: 4, lg: 4, xl: 4 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img
              src="https://hyperpc.ru/images/content/main_banner/1800/hyperpc-station-mobile-banner.jpg?1"
              alt="Image"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <Typography variant="h3" sx={{ marginTop: 2 }}>
              HyperPC
            </Typography>
            <Typography variant="h5" sx={{ marginTop: 2 }}>
              3 213 900 ₽
            </Typography>
            <Rating name="read-only" value={4} readOnly />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 8, md: 8, lg: 8, xl: 8 }}>
          <Typography variant="h3" gutterBottom>
            Конфигурация:
          </Typography>
          <Typography variant="h5" gutterBottom>
            <ul>
              <li>Видеокарта: MSI GeForce RTX 4090 GAMING SLIM</li>
              <li>Процессор: Intel® Core™ i9-14900KF </li>
              <li>Материнская плата: MSI MPG Z790 CARBON II</li>
              <li>Охлаждение: MSI MEG CORELIQUID S360</li>
              <li>Оперативная память: 96GB G.SKILL TRIDENT Z5 RGB</li>
              <li>SSD накопитель: 1TB Samsung 990 PRO </li>
              <li>SSD накопитель: 2TB Samsung 990 PRO</li>
              <li>Блок питания: 1000W MSI MPG A1000G</li>
              <li>Корпус: HYPERPC CYBER Black</li>
              <li>Вентиляторы: Thermalright TL-B12(R)-S</li>
            </ul>
          </Typography>
        </Grid>
      </Grid>

      {/* Средний блок */}
      <Grid container spacing={2} sx={{ marginBottom: 10 }}>
        <Grid size={{ xs: 12 }}>
          <Typography variant="h3" gutterBottom>
            Описание
          </Typography>
          <Typography variant="h5" gutterBottom>
            Игровая станция HYPERPC CONCEPT 1 - это один из самый мощных
            игровых компьютеров из когда либо созданных в HYPERPC! Он даст
            геймеру уникальное ощущение скорости и производительности, и
            увеличит удобство при использовании благодаря инновационному
            дизайну. Уникальный дизайн корпуса, это не только красивый внешний
            вид, это и эффективное охлаждение, достигаемое за счет отсутствия
            сплошных стенок. Но не стоит беспокоится о шуме, как можно сначала
            подумать, ведь здесь установлено эксклюзивное охлаждение HYPER
            WATERCOOLING, построенной нашими лучшими мастерами, с бесшумными
            вентиляторами. Ни о каком шуме речи тут нет, компьютер не слышно
            даже под нагрузкой, а о высоких температурах можно просто забыть,
            эффективность максимальная.
          </Typography>
        </Grid>
      </Grid>

      {/* Нижний блок */}
      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
          <Typography variant="h3" gutterBottom>
            Отзывы
          </Typography>
          <Typography variant="h5" gutterBottom>
            (Нет отзывов)
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
