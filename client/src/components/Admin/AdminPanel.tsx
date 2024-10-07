import { useEffect, useState } from 'react';
import AddItem from './AddItem';
import AdminTable from './AdminTable';
import axiosInstance from '../../../axiosInstance';
import { IItem, IType } from '../../types/types';
import { Box, Typography } from '@mui/material';

export default function AdminPanel() {
  const [types, setTypes] = useState<IType[]>([]);
  const [items, setItems] = useState<IItem[]>([]);

  useEffect(() => {
    axiosInstance
      .get<IType[]>(`${import.meta.env.VITE_API}/types`)
      .then((res) => setTypes(res.data));
    axiosInstance
      .get<IItem[]>(`${import.meta.env.VITE_API}/item/all`)
      .then((res) => setItems(res.data));
  }, []);
  return (
    <>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: '20px',
        }}
      >
        <Typography sx={{ fontSize: '20px' }}>Панель управления</Typography>
        <AddItem setItems={setItems} types={types} />
      </Box>
      <AdminTable setItems={setItems} items={items} types={types} />
    </>
  );
}
