import { Box, Button, TextField, Typography } from '@mui/material';
import styles from './styles.module.css';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchAddBuild } from '../../redux/thunkActions';
import { IItem } from '../../types/types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

export default function PreveiwPanel({ className }: { className?: string }) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const {user} = useAppSelector((state) => state.user)
  const { selectedItems, configuratorBuild } = useAppSelector(
    (state) => state.configuratorBuild
  );
  const [buildTitle, changeBuildTitle] = useState(configuratorBuild.title)
  const submitHandler = () => {
    const Items: IItem[] = Object.values(selectedItems);
    dispatch(fetchAddBuild({UserId: user.id, Items, image: 'https://hyperpc.ru/images/product/workstation/g5/pc/hyperpc-pro-g5.jpg', title: buildTitle}))
    navigate('/')
  };
  
  const DamnBox = styled(Box)(({ theme }) => ({
    width:'100%',
    backgroundColor:'red',
    margin: '10px 0'
}));

  return (
    <Box sx={{ bgcolor: 'background.paper', padding: '20px'}} className={className}>
      <Box className={styles.imageWrapper}>
        <img src="https://hyperpc.ru/cache/hp_position_hyperpc_gaming_1468/hyperpc-lumen-plus-black-green-table-305x171.jpg" />
        <TextField
          id="standard-size-normal"
          value={buildTitle}
          onChange={(e) => changeBuildTitle(e.target.value)}
          variant="standard"
        />
      </Box>

    <Box sx={{backgroundColor: 'blue'}}>
      <DamnBox>
        <Typography>Процессор:</Typography>
        <Typography>{selectedItems.CPU.title}</Typography>
      </DamnBox>
      <DamnBox>
        <Typography>Видеокарта:</Typography>
        <Typography>{selectedItems.GPU.title}</Typography>
      </DamnBox>
      <DamnBox>
        <Typography>Материнская плата:</Typography>
        <Typography>{selectedItems.mother.title}</Typography>
      </DamnBox>
      <DamnBox>
        <Typography>Оперативная память:</Typography>
        {selectedItems.RAM.map((el) => (
          <Typography key={el.id}>{el.title}</Typography>
        ))}
      </DamnBox>
      <DamnBox>
        <Typography>SSD накопитель:</Typography>
        {selectedItems.SSD.map((el) => (
          <Typography key={el.id}>{el.title}</Typography>
        ))}
      </DamnBox>
      <DamnBox>
        <Typography>Система охлаждения:</Typography>
        {selectedItems.cooling.map((el) => (
          <Typography key={el.id}>{el.title}</Typography>
        ))}
      </DamnBox>
      <DamnBox>
        <Typography>Жесткий диск:</Typography>
        {selectedItems.HHD.map((el) => (
          <Typography key={el.id}>{el.title}</Typography>
        ))}
      </DamnBox>
      <DamnBox>
        <Typography>Блок питания:</Typography>
        <Typography>{selectedItems.power.title}</Typography>
      </DamnBox>
      <DamnBox>
        <Typography>Корпус:</Typography>
        <Typography>{selectedItems.case.title}</Typography>
      </DamnBox>
      <DamnBox>
        <Typography>Термоинтерфейс:</Typography>
        <Typography>{selectedItems.termo.title}</Typography>
      </DamnBox>
      </Box>
      <Button variant="contained" sx={{ marginTop: '40px' }}
      onClick={submitHandler}>
        Сохранить
      </Button>
    </Box>
  );
}
