import { Box, TextField, Typography } from '@mui/material';
import styles from './styles.module.css';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { changeTitle } from '../../redux/slices/configuratorBuildSlice';

export default function PreveiwPanel({ className }: { className?: string }) {
  const dispatch = useAppDispatch();
  const { selectedItems, configuratorBuild } = useAppSelector(
    (state) => state.configuratorBuild
  );

  return (
    <Box sx={{ bgcolor: 'background.paper' }} className={className}>
      <Box className={styles.imageWrapper}>
        <img src="https://hyperpc.ru/cache/hp_position_hyperpc_gaming_1468/hyperpc-lumen-plus-black-green-table-305x171.jpg" />
        <TextField
          id="standard-size-normal"
          defaultValue={configuratorBuild.title}
          variant="standard"
        />
      </Box>

      <Box>
        <Typography>Процессор:</Typography>
        <Typography>{selectedItems.CPU.title}</Typography>
      </Box>
      <Box>
        <Typography>Видеокарта:</Typography>
        <Typography>{selectedItems.GPU.title}</Typography>
      </Box>
      <Box>
        <Typography>Материнская плата:</Typography>
        <Typography>{selectedItems.mother.title}</Typography>
      </Box>
      <Box>
        <Typography>Оперативная память:</Typography>
        {selectedItems.RAM.map((el) => {console.log(el);return null})}
      </Box>
      <Box>
        <Typography>SSD накопитель:</Typography>
        {selectedItems.SSD.map((el) => (
          <Typography>{el.title}</Typography>
        ))}
      </Box>
      <Box>
        <Typography>Система охлаждения:</Typography>
        {selectedItems.cooling.map((el) => (
          <Typography>{el.title}</Typography>
        ))}
      </Box>
      <Box>
        <Typography>Жесткий диск:</Typography>
        <Typography>{selectedItems.CPU.title}</Typography>
      </Box>
      <Box>
        <Typography>Блок питания:</Typography>
        <Typography>{selectedItems.CPU.title}</Typography>
      </Box>
      <Box>
        <Typography>Корпус:</Typography>
        <Typography>{selectedItems.CPU.title}</Typography>
      </Box>
      <Box>
        <Typography>Термоинтерфейс:</Typography>
        <Typography>{selectedItems.CPU.title}</Typography>
      </Box>
    </Box>
  );
}
