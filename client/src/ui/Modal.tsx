import { Backdrop, Box, Modal, Fade, Button } from '@mui/material';
import { ReactNode } from 'react';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 400,
  bgcolor: '#36393f',
  borderRadius: '10px',
  boxShadow: 24,
  padding: '25px',
  display: 'flex',
  flexDirection: 'column',
};

type FormModalProps = {
  children: ReactNode;
  isOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  btnText: string;
};

export default function FormModal({
  isOpen,
  handleOpen,
  handleClose,
  btnText,
  children,
}: FormModalProps) {
  return (
    <div>
      <Button onClick={handleOpen}>{btnText}</Button>
      <Modal
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={isOpen}>
          <Box sx={style}>{children}</Box>
        </Fade>
      </Modal>
    </div>
  );
}
