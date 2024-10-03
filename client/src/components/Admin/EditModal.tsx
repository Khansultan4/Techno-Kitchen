import { useState } from 'react';
import FormModal from '../../ui/Modal';
import { BorderColor } from '@mui/icons-material';

export default function EditModal() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpen = (): void => setIsOpen(true);
  const handleClose = (): void => setIsOpen(false);
  return (
    <FormModal
      isOpen={isOpen}
      handleOpen={handleOpen}
      handleClose={handleClose}
      btnText={<BorderColor />}
    >
      Edit Modal
    </FormModal>
  );
}
