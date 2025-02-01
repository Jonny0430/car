import { useState } from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Home = () => {
  const [open, setOpen] = useState(false); // Modalni ochish uchun state
  const [menuOpen, setMenuOpen] = useState(false); // Menu ochilish holati

  const handleOpen = () => setOpen(true);  // Modalni ochish
  const handleClose = () => setOpen(false); // Modalni yopish

  const handleMenuToggle = () => setMenuOpen(!menuOpen); // Menu holatini o'zgartirish

  return (
    <Box sx={{ padding: '20px' }}>
      {/* Hamburger menu */}
      <Button onClick={handleMenuToggle} sx={{ display: 'flex', alignItems: 'center' }}>
        <MenuIcon />
      </Button>

      {/* Menu */}
      {menuOpen && (
        <Box sx={{
          position: 'absolute',
          top: '60px',
          left: '10px',
          backgroundColor: '#333',
          padding: '10px',
          color: '#fff',
          zIndex: 1
        }}>
          <Typography variant="h6">Home</Typography>
          <Typography variant="h6">About</Typography>
          <Typography variant="h6">Services</Typography>
          <Typography variant="h6">Contact</Typography>
        </Box>
      )}

      {/* Button to open the modal */}
      <Button variant="contained" color="primary" onClick={handleOpen}>회원가입</Button>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box sx={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          width: '300px',
        }}>
          <Typography variant="h5" gutterBottom>로그인하면 더욱 편리합니다.</Typography>
          <Button variant="contained" color="primary" onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default Home;
