import { Dispatch, SetStateAction, useState } from 'react';
import FormModal from '../../ui/Modal';
import ModifyForm from './ModifyForm';
import { IItem, IType } from '../../types/types';

type AddItemProps = {
  types: IType[];
  setItems: Dispatch<SetStateAction<IItem[]>>;
};

export default function AddItem({ types, setItems }: AddItemProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpen = (): void => setIsOpen(true);
  const handleClose = (): void => setIsOpen(false);
  return (
    <FormModal
      isOpen={isOpen}
      handleOpen={handleOpen}
      handleClose={handleClose}
      btnText="Add Item"
      variant="contained"
    >
      <ModifyForm setItems={setItems} types={types} />
    </FormModal>
  );
}
