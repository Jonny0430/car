import React, { useState } from 'react';
import { Button, Modal, Box, Typography } from '@mui/material';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { CaretDown } from 'phosphor-react';
import { useTranslation } from 'next-i18next';

const NotificationButton = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation('common');

  // Modalni ochish va yopish
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        disableRipple
        onClick={handleOpen}
        endIcon={<CaretDown size={14}/>}
      >
        <NotificationsOutlinedIcon sx={{ color: 'white' }} /> {/* Icon rangini oq qilish */}
      </Button>
      
      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="welcome-modal"
        aria-describedby="modal-to-show-welcome-message"
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            {t('No notifications available')} {/* "Hush kelibsiz!" deb yozishingiz mumkin */}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

// Styling for the modal box
const style = {
  position: 'absolute' as 'absolute',
  top: '14%',
  marginLeft: '27%',
  transform: 'translate(-50%, -50%)',
  width: '350px',
  height: '15%',
  bgcolor: 'background.paper',
  borderRadius: '10px',
  padding: 3,
  boxShadow: 24,
};

export default NotificationButton;
