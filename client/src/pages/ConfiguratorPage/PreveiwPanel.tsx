import { Box, Button, TextField, Typography } from '@mui/material';
import styles from './styles.module.css';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchAddBuild } from '../../redux/thunkActions';
import { IItem } from '../../types/types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PreveiwPanel({ className }: { className?: string }) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const {user} = useAppSelector((state) => state.user)
  const { selectedItems, configuratorBuild } = useAppSelector(
    (state) => state.configuratorBuild
  );
  
  const submitHandler = () => {
    const Items: IItem[] = Object.values(selectedItems);
    dispatch(fetchAddBuild({UserId: user.id, Items, image: 'https://hyperpc.ru/images/product/workstation/g5/pc/hyperpc-pro-g5.jpg', title: buildTitle}))
    navigate('/')
  };
  const [buildTitle, changeBuildTitle] = useState(configuratorBuild.title)

  return (
    <Box sx={{ bgcolor: 'background.paper' }} className={className}>
      <Box className={styles.imageWrapper}>
        <img src="https://hyperpc.ru/cache/hp_position_hyperpc_gaming_1468/hyperpc-lumen-plus-black-green-table-305x171.jpg" />
        <TextField
          id="standard-size-normal"
          value={buildTitle}
          onChange={(e) => changeBuildTitle(e.target.value)}
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
        {selectedItems.RAM.map((el) => (
          <Typography key={el.id}>{el.title}</Typography>
        ))}
      </Box>
      <Box>
        <Typography>SSD накопитель:</Typography>
        {selectedItems.SSD.map((el) => (
          <Typography key={el.id}>{el.title}</Typography>
        ))}
      </Box>
      <Box>
        <Typography>Система охлаждения:</Typography>
        {selectedItems.cooling.map((el) => (
          <Typography key={el.id}>{el.title}</Typography>
        ))}
      </Box>
      <Box>
        <Typography>Жесткий диск:</Typography>
        {selectedItems.HHD.map((el) => (
          <Typography key={el.id}>{el.title}</Typography>
        ))}
      </Box>
      <Box>
        <Typography>Блок питания:</Typography>
        <Typography>{selectedItems.power.title}</Typography>
      </Box>
      <Box>
        <Typography>Корпус:</Typography>
        <Typography>{selectedItems.case.title}</Typography>
      </Box>
      <Box>
        <Typography>Термоинтерфейс:</Typography>
        <Typography>{selectedItems.termo.title}</Typography>
      </Box>
      <Button variant="contained" sx={{ marginTop: '40px' }}
      onClick={submitHandler}>
        Сохранить
      </Button>
    </Box>
  );
}
