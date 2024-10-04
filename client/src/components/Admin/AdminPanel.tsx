import { useEffect, useState } from 'react';
import AddItem from './AddItem';
import AdminTable from './AdminTable';
import axiosInstance from '../../../axiosInstance';
import { IType } from '../../types/types';

export default function AdminPanel() {
  const [types, setTypes] = useState<IType[]>([]);
  useEffect(() => {
    axiosInstance
      .get<IType[]>(`${import.meta.env.VITE_API}/types`)
      .then((res) => setTypes(res.data));
  }, []);
  return (
    <>
      <AddItem types={types} />
      <AdminTable />
    </>
  );
}
