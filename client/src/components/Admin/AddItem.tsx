import { useState } from 'react';
import FormModal from '../../ui/Modal';

export default function AddItem() {
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
      hahaha
    </FormModal>
  );
}
