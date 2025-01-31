import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Stack, Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import moment from 'moment';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if screen size is mobile

  return (
    <Box sx={{ backgroundColor: '#181a20', padding: '8px', marginLeft: '85%' }}>
      <Stack
        direction={isMobile ? 'column' : 'row'}
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ height: '100%' }}
      >
        <Box 
          textAlign="left" 
          sx={{ marginTop: isMobile ? 2 : 0, display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: isMobile ? 0 : '-25%' }}
        >
          {/* Social media icons */}
          <Stack 
            direction="row" 
            spacing={2} 
            justifyContent="center" 
            color="#fff"

          >
            <FacebookOutlinedIcon />
            <TelegramIcon />
            <InstagramIcon />
            <TwitterIcon />
          </Stack>
        </Box>

        {isMobile && (
          <Box textAlign="center">
            <Typography variant="body2" color="textSecondary">
              Privacy · Terms · Sitemap
            </Typography>
          </Box>
        )}
      </Stack>
    </Box>
  );
};

export default Footer;
