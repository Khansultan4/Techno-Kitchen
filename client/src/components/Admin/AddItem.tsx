import { useState } from 'react';
import FormModal from '../../ui/Modal';
import ModifyForm from './ModifyForm';
import { IType } from '../../types/types';

type AddItemProps = {
  types: IType[];
};

export default function AddItem({ types }: AddItemProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpen = (): void => setIsOpen(true);
  const handleClose = (): void => setIsOpen(false);
  return (
    <FormModal
      isOpen={isOpen}
      handleOpen={handleOpen}
      handleClose={handleClose}
      btnText="Add Item"
    >
      <ModifyForm types={types} />
    </FormModal>
  );
}
