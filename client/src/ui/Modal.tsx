import { CancelPresentation } from '@mui/icons-material';
import { Backdrop, Box, Modal, Fade, Button } from '@mui/material';
import { ReactNode } from 'react';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  minHeight: 400,
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
  btnText: string | JSX.Element;
  variant?: 'text' | 'outlined' | 'contained';
  size?: 'large' | 'medium' | 'small'
};

export default function FormModal({
  isOpen,
  handleOpen,
  handleClose,
  btnText,
  children,
  variant,
  size
}: FormModalProps) {
  console.log('Modal is opened');
  return (
    <div>
      <Button size={size} variant={variant} sx={{ ml: 2 }} onClick={handleOpen}>
        {btnText}
      </Button>
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
          <Box sx={style}>
            <CancelPresentation
              onClick={handleClose}
              sx={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                cursor: 'pointer',
              }}
            />
            {children}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
