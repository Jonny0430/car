import React from 'react';
import { Stack } from '@mui/material';
import Fond from './Fond'; // Fond komponentini import qilish

interface TopProps {
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void; // setDarkMode funksiyasining tipi
}

const Top = ({ darkMode, setDarkMode }: TopProps) => {
//   return (
//     // <Stack>
//     //   <Fond darkMode={darkMode} setDarkMode={setDarkMode} />
//     // </Stack>
//   );
};

export default Top;
