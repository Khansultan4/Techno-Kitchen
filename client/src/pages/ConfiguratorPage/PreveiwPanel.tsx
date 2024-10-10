import { Box, Button, SxProps, TextField, Typography } from '@mui/material';
import styles from './styles.module.css';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchAddBuild } from '../../redux/thunkActions';
import { IItem } from '../../types/types';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { Theme } from '@emotion/react';
import { priceSeparator } from '../../utils/functions';
import Auth from '../../components/Auth/Auth';
import DamnBox from './DamnBox';

export default function PreveiwPanel({ className }: { className?: string }) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.user);
  const [image, setImage] = useState<File | string>('');
  const [imagePreview, setImagePreview] = useState('');
  const { selectedItems, configuratorBuild } = useAppSelector((state) => state.configuratorBuild); //prettier-ignore
  const [titleDesc, changeTitleDesc] = useState([configuratorBuild.title,configuratorBuild.description,]); //prettier-ignore

  
  const buildPrice = priceSeparator(
    Object.values(selectedItems).reduce((acc: number, el: IItem | IItem[]) => {
      if (Array.isArray(el)) {
        return acc + el.reduce((acc2, el2) => acc2 + el2.price, 0);
      } else {
        return acc + el.price;
      }
    }, 0)
  );
  const submitHandler = () => {
    if (user.id) {
      const Items: IItem[] = Object.values(selectedItems);
      dispatch(
        fetchAddBuild({
          UserId: user.id,
          Items,
          // image: `${import.meta.env.VITE_BASE_URL}/uploads/pngegg.png`,
          image: 'https://hyperpc.ru/images/product/workstation/g5/pc/hyperpc-pro-g5.jpg',
          title: titleDesc[0],
          description: titleDesc[1],
        })
      );
      navigate('/');
    } else {
      navigate('/');
    }
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      setImage(e.target.files[0]);
      setImagePreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        width: '500px',
        padding: '20px',
        height: 'fit-content',
        borderRadius: '10px',
        // position: 'fixed',
        // right: 0
      }}
      className={className}
    >
      <Box
        sx={{
          borderRadius: '15px',
          overflow: 'hidden',
          height: 'min-content',
          width: 'fit-content',
        }}
      >
        <Box
          className={styles.imageWrapper}
          sx={{
            bgcolor: 'gray.g',
            borderRadius: '5px',
          }}
        >
          {/* <img
            style={{ width: '100%' }}
            src={`${import.meta.env.VITE_BASE_URL}/uploads/pngegg.png`}
          /> */}
          <img
            style={{ width: '100%' }}
            src={'https://hyperpc.ru/images/product/workstation/g5/pc/hyperpc-pro-g5.jpg'}
          />
          <Typography sx={{ textAlign: 'left', p: '0 20px 10px 10px' }}>
            Общая стоимость: {buildPrice} ₽
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: 'gray.f',
            width: '100%',
            height: 'min-content',
            borderRadius: '5px',
            overflow: 'hidden',
            margin: '10px 0',
          }}
        >
          <Box sx={{ bgcolor: 'gray.g', width: '100%', padding: 1 }}>
            <TextField
              sx={{ mt: 3, width: '100%', mx: 'auto', borderRadius: '5px' }}
              id="standard-size-normal"
              autoComplete="off"
              value={titleDesc[0]}
              onChange={(e) =>
                changeTitleDesc((prev) => [e.target.value, prev[1]])
              }
              variant="standard"
            />
            <TextField
              sx={{
                width: '100%',
                margin: '20px 0 40px',
              }}
              autoComplete="off"
              id="standard-size-normal2"
              value={titleDesc[1]}
              onChange={(e) =>
                changeTitleDesc((prev) => [prev[0], e.target.value])
              }
              variant="standard"
            />
          </Box>
          <DamnBox title="Процессор" value={selectedItems.CPU.title} />
          <DamnBox title="Видеокарта" value={selectedItems.GPU.title} />
          <DamnBox
            title="Материнская плата"
            value={selectedItems.mother.title}
          />
          <DamnBox title="Оперативная память" value={selectedItems.RAM} />
          <DamnBox title="SSD накопитель" value={selectedItems.SSD} />
          <DamnBox title="Система охлаждения" value={selectedItems.cooling} />
          <DamnBox title="Жесткий диск" value={selectedItems.HHD} />
          <DamnBox title="Блок питания" value={selectedItems.power.title} />
          <DamnBox title="Корпус" value={selectedItems.case.title} />
          <DamnBox title="Термоинтерфейс" value={selectedItems.termo.title} />
        </Box>
      </Box>
      {user.id ? (
        <Button
          variant="contained"
          sx={{ marginTop: '40px' }}
          onClick={submitHandler}
        >
          Сохранить
        </Button>
      ) : (
        <Auth btnVariant="contained" btnText="Сохранить" />
      )}
    </Box>
  );
}
