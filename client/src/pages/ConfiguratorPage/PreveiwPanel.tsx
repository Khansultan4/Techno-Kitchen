import { Box, Button, SxProps, TextField, Typography } from '@mui/material';
import styles from './styles.module.css';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchAddBuild } from '../../redux/thunkActions';
import { IItem } from '../../types/types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { Theme } from '@emotion/react';
import { priceSeparator } from '../../utils/functions';

const DamnBox = ({
  title,
  value,
}: {
  title: string;
  value: string | IItem[];
}) => {
  const sxVar: SxProps<Theme> = {
    color: 'text.secondary',
    textAlign: 'right',
    padding: 1,
  };
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'gray.g',
        padding: 1,
        mt: '10px',
        ':first-child': {
          mt: 0,
        },
      }}
    >
      <Typography>{title}:</Typography>
      {Array.isArray(value) ? (
        value.map((el) => (
          <Typography sx={sxVar} key={el.id}>
            {el.title}
          </Typography>
        ))
      ) : (
        <Typography sx={sxVar}>{value}</Typography>
      )}
    </Box>
  );
};

export default function PreveiwPanel({ className }: { className?: string }) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.user);

  const { selectedItems, configuratorBuild } = useAppSelector(
    (state) => state.configuratorBuild
  );

  const buildPrice = priceSeparator(
    Object.values(selectedItems).reduce((acc: number, el: IItem | IItem[]) => {
      if (Array.isArray(el)) {
        return acc + el.reduce((acc2, el2) => acc2 + el2.price, 0);
      } else {
        return acc + el.price;
      }
    }, 0)
  );

  const [titleDesc, changeTitleDesc] = useState([
    configuratorBuild.title,
    configuratorBuild.description,
  ]);
  const submitHandler = () => {
    const Items: IItem[] = Object.values(selectedItems);
    dispatch(
      fetchAddBuild({
        UserId: user.id,
        Items,
        image: `${import.meta.env.VITE_BASE_URL}/uploads/pngegg.png`,
        title: titleDesc[0],
        description: titleDesc[1],
      })
    );
    navigate('/');
  };



  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        width: '500px',
        padding: '20px',
        height: 'fit-content'
      }}
      className={className}
    >
      <Box
        className={styles.imageWrapper}
        sx={{
          bgcolor: 'gray.g',
        }}
      >
        <img
          style={{ width: '100%' }}
          src={`${import.meta.env.VITE_BASE_URL}/uploads/pngegg.png`}
        />
        <Typography sx={{textAlign:'left', p: '0 20px 10px 10px'}}>Общая стоимость: {buildPrice} ₽</Typography>
      </Box>
      <Box sx={{ bgcolor: 'gray.g', margin: 1, width: '95%', padding: 1  }}>
        <TextField
          sx={{ mt: 3, width: '100%', mx: 'auto'}}
          id="standard-size-normal"
          value={titleDesc[0]}
          onChange={(e) => changeTitleDesc((prev) => [e.target.value, prev[1]])}
          variant="standard"
        />
        <TextField
          sx={{
            width: '100%',
            margin: '20px 0 40px',
          }}
          id="standard-size-normal2"
          value={titleDesc[1]}
          onClick={(e) => changeTitleDesc((prev) => [prev[0], e.target.value])}
          variant="standard"
        />
      </Box>
      <Box
        sx={{
          backgroundColor: 'gray.f',
          width: '95%',
          height: 'fit-content',
        }}
      >
        <DamnBox title="Процессор" value={selectedItems.CPU.title} />
        <DamnBox title="Видеокарта" value={selectedItems.GPU.title} />
        <DamnBox title="Материнская плата" value={selectedItems.mother.title} />
        <DamnBox title="Оперативная память" value={selectedItems.RAM} />
        <DamnBox title="SSD накопитель" value={selectedItems.SSD} />
        <DamnBox title="Система охлаждения" value={selectedItems.cooling} />
        <DamnBox title="Жесткий диск" value={selectedItems.HHD} />
        <DamnBox title="Блок питания" value={selectedItems.power.title} />
        <DamnBox title="Корпус" value={selectedItems.case.title} />
        <DamnBox title="Термоинтерфейс" value={selectedItems.termo.title} />
      </Box>
      <Button
        variant="contained"
        sx={{ marginTop: '40px' }}
        onClick={submitHandler}
      >
        Сохранить
      </Button>
    </Box>
  );
}
