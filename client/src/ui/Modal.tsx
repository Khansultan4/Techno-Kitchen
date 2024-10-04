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
  maxHeight: 600,
  bgcolor: '#36393f',
  borderRadius: '10px',
  boxShadow: 24,
  padding: '25px',
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
};

type FormModalProps = {
  children: ReactNode;
  isOpen: boolean;
  handleOpen?: () => void;
  editModalOpen?: (id: number) => Promise<void>;
  handleClose: () => void;
  btnText: string | JSX.Element;
  variant?: 'text' | 'outlined' | 'contained';
  id?: number;
};

export default function FormModal({
  isOpen,
  handleOpen,
  handleClose,
  btnText,
  children,
  variant,
  editModalOpen,
  id,
}: FormModalProps) {
  const onOpenModal = () => {
    if (id && editModalOpen) {
      editModalOpen(id);
    }
    if (handleOpen) {
      handleOpen();
    }
  };
  return (
    <div>
      <Button variant={variant} sx={{ ml: 2 }} onClick={onOpenModal}>
        {btnText}
      </Button>
      <Modal
        disableScrollLock={true}
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
