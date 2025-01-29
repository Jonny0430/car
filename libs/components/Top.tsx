import React, { useState, useEffect, useCallback } from 'react';
import { useRouter, withRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { getJwtToken, logOut, updateUserInfo } from '../auth';
import { Box, Menu, MenuItem, Button, Divider, Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { CaretDown } from 'phosphor-react';
import { useReactiveVar } from '@apollo/client';
import { userVar } from '../../apollo/store';
import { REACT_APP_API_URL } from '../config';
import Link from 'next/link';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { Logout } from '@mui/icons-material';
import NotificationButton from './homepage/qongiroqcha'; // Import NotificationButton

const Top = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const user = useReactiveVar(userVar); // User data from reactive variable
  const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null);
  const [lang, setLang] = useState<string | null>('en');
  const drop = Boolean(anchorEl2);
  const [logoutAnchor, setLogoutAnchor] = useState<null | HTMLElement>(null);
  const logoutOpen = Boolean(logoutAnchor);

  useEffect(() => {
    const jwt = getJwtToken();
    if (jwt) updateUserInfo(jwt);
  }, []);

  useEffect(() => {
    if (localStorage.getItem('locale') === null) {
      localStorage.setItem('locale', 'en');
      setLang('en');
    } else {
      setLang(localStorage.getItem('locale'));
    }
  }, [router]);

  const langClick = (e: any) => {
    setAnchorEl2(e.currentTarget);
  };

  const langClose = () => {
    setAnchorEl2(null);
  };

  const langChoice = useCallback(
    async (e: any) => {
      setLang(e.target.id);
      localStorage.setItem('locale', e.target.id);
      setAnchorEl2(null);
      await router.push(router.asPath, router.asPath, { locale: e.target.id });
    },
    [router]
  );

  const StyledMenu = styled((props: any) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      top: '109px',
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 160,
      color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(138, 108, 108) 0px 0px 0px 0px, rgb(138, 108, 108) 0px 0px 0px 0px,rgb(138, 108, 108) 0px 0px 0px 0px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
        },
      },
    },
  }));

  const handleLogout = () => {
    logOut();
    setLogoutAnchor(null);
  };

  return (
    <Box
      className="sidebar"
      sx={{
        width: 250,
        height: '100vh',
        backgroundColor: '#181a20',
        position: 'fixed',
        top: 0,
        left: 0,
        boxShadow: 3,
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 2,
        paddingLeft: 2,
        paddingRight: 2,
        zIndex: 12,
      }}
    >
      <Box>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
          {!user?._id ? (
            <Link href={'/account/join'}>
              <Button variant="text" sx={{ textAlign: 'left', color: '#fff' }}>
                <AccountCircleOutlinedIcon sx={{ marginRight: 1, color: '#fff' }} />
                {t('Login')} / {t('Register')}
              </Button>
            </Link>
          ) : (
            <Box>
              <Button
                variant="text"
                sx={{ textAlign: 'left' }}
                onClick={(e: any) => setLogoutAnchor(e.currentTarget)}
              >
                <img
                  src={user?.memberImage ? `${REACT_APP_API_URL}/${user?.memberImage}` : '/img/profile/defaultUser.svg'}
                  alt="profile"
                  style={{ width: 95, borderRadius: '50%' }}
                />
                {user?.name}
              </Button>

              <Menu
                anchorEl={logoutAnchor}
                open={logoutOpen}
                onClose={() => setLogoutAnchor(null)}
                sx={{ mt: '5px' }}
              >
                <MenuItem onClick={handleLogout}>
                  <Logout fontSize="small" sx={{ marginRight: 1 }} />
                  Logout
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Box>
      </Box>

      {/* Language Selector & Notification Button */}
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, marginTop: 1, alignItems: 'center' }}>
        {/* Notification Button */}
        {user?._id && <NotificationButton />}

        {/* Language Selector */}
        <Button
          variant="text"
          sx={{ textAlign: 'left', display: 'flex', alignItems: 'center', gap: 1 }}
          onClick={langClick}
          endIcon={<CaretDown size={15} />}
        >
          <Typography variant="body2" sx={{ color: '#fff' }}>
            {lang === 'en' ? 'English' : lang === 'kr' ? 'Korean' : 'Russian'}
          </Typography>
        </Button>
        <StyledMenu anchorEl={anchorEl2} open={drop} onClose={langClose}>
          <MenuItem onClick={langChoice} id="en">
            <img className="img-flag" src="/img/flag/langen.png" alt="english" />
            {t('English')}
          </MenuItem>
          <MenuItem onClick={langChoice} id="kr">
            <img className="img-flag" src="/img/flag/langkr.png" alt="korean" />
            {t('Korean')}
          </MenuItem>
          <MenuItem onClick={langChoice} id="ru">
            <img className="img-flag" src="/img/flag/langru.png" alt="russian" />
            {t('Russian')}
          </MenuItem>
        </StyledMenu>
      </Box>

      {/* Navigation Links */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: '130px' }}>
        <Link href={'/'}>
          <Button variant="text" sx={{ textAlign: 'left', color: '#fff' }}>{t('Home')}</Button>
        </Link>
        <Link href={'/property'}>
          <Button variant="text" sx={{ textAlign: 'left', color: '#fff' }}>{t('Cars')}</Button>
        </Link>
        <Link href={'/community?articleCategory=FREE'}>
          <Button variant="text" sx={{ textAlign: 'left', color: '#fff' }}>{t('Community')}</Button>
        </Link>
        {user?._id && (
          <Link href={'/mypage'}>
            <Button variant="text" sx={{ textAlign: 'left', color: '#fff' }}>{t('My Page')}</Button>
          </Link>
        )}
        <Link href={'/cs'}>
          <Button variant="text" sx={{ textAlign: 'left', color: '#fff' }}>{t('CS')}</Button>
        </Link>
        <Link href={'/gallery'}></Link>
      </Box>

      <Divider sx={{ marginY: 2 }} />
    </Box>
  );
};

export default withRouter(Top);
