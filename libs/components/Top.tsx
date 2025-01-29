// import React, { useState, useEffect, useCallback } from 'react';
// import { useRouter, withRouter } from 'next/router';
// import { useTranslation } from 'next-i18next';
// import { getJwtToken, logOut, updateUserInfo } from '../auth';
// import { Stack, Box, Menu, MenuItem, Button, Modal, Typography } from '@mui/material';
// import { alpha, styled } from '@mui/material/styles';
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
// import { CaretDown } from 'phosphor-react';
// import useDeviceDetect from '../hooks/useDeviceDetect';
// import Link from 'next/link';
// import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
// import { useReactiveVar } from '@apollo/client';
// import { userVar } from '../../apollo/store';
// import { Logout } from '@mui/icons-material';
// import { REACT_APP_API_URL } from '../config';
// import NotificationButton from './homepage/qongiroqcha'; // Import NotificationButton
// import Fond from './homepage/Fond';

// const Top = () => {
//   const device = useDeviceDetect();
//   const user = useReactiveVar(userVar); // Foydalanuvchi ma'lumotlari reactive variable
//   const { t } = useTranslation('common');
//   const router = useRouter();
//   const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null);
//   const [lang, setLang] = useState<string | null>('en');
//   const drop = Boolean(anchorEl2);
//   const [colorChange, setColorChange] = useState(false);
//   const [bgColor, setBgColor] = useState<boolean>(false);
//   const [logoutAnchor, setLogoutAnchor] = useState<null | HTMLElement>(null);
//   const [openModal, setOpenModal] = useState(false); // Modalni ochish uchun state
//   const logoutOpen = Boolean(logoutAnchor);

//   useEffect(() => {
//     if (localStorage.getItem('locale') === null) {
//       localStorage.setItem('locale', 'en');
//       setLang('en');
//     } else {
//       setLang(localStorage.getItem('locale'));
//     }
//   }, [router]);

//   useEffect(() => {
//     const jwt = getJwtToken();
//     if (jwt) updateUserInfo(jwt);
//   }, []);

//   /** HANDLERS **/
//   const langClick = (e: any) => {
//     setAnchorEl2(e.currentTarget);
//   };

//   const langClose = () => {
//     setAnchorEl2(null);
//   };

//   const langChoice = useCallback(
//     async (e: any) => {
//       setLang(e.target.id);
//       localStorage.setItem('locale', e.target.id);
//       setAnchorEl2(null);
//       await router.push(router.asPath, router.asPath, { locale: e.target.id });
//     },
//     [router],
//   );

//   const changeNavbarColor = () => {
//     if (window.scrollY >= 50) {
//       setColorChange(true);
//     } else {
//       setColorChange(false);
//     }
//   };

//   const handleClose = () => {
//     setAnchorEl2(null);
//   };

//   const handleHover = (event: any) => {
//     if (anchorEl2 !== event.currentTarget) {
//       setAnchorEl2(event.currentTarget);
//     } else {
//       setAnchorEl2(null);
//     }
//   };

//   const handleOpenModal = () => setOpenModal(true); // Modalni ochish
//   const handleCloseModal = () => setOpenModal(false); // Modalni yopish

//   const StyledMenu = styled((props: any) => (
//     <Menu
//       elevation={0}
//       anchorOrigin={{
//         vertical: 'bottom',
//         horizontal: 'right',
//       }}
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       {...props}
//     />
//   ))(({ theme }) => ({
//     '& .MuiPaper-root': {
//       top: '109px',
//       borderRadius: 6,
//       marginTop: theme.spacing(1),
//       minWidth: 160,
//       color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
//       boxShadow:
//         'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
//       '& .MuiMenu-list': {
//         padding: '4px 0',
//       },
//       '& .MuiMenuItem-root': {
//         '& .MuiSvgIcon-root': {
//           fontSize: 18,
//           color: theme.palette.text.secondary,
//           marginRight: theme.spacing(1.5),
//         },
//         '&:active': {
//           backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
//         },
//       },
//     },
//   }));

//   if (typeof window !== 'undefined') {
//     window.addEventListener('scroll', changeNavbarColor);
//   }

//   if (device == 'mobile') {
//     return (
//       <Stack className={'top'}>
//         <Link href={'/'}>
//           <div>{t('Home')}</div>
//         </Link>
//         <Link href={'/property'}>
//           <div>{t('Properties')}</div>
//         </Link>
//         <Link href={'/gallery'}>
//           <div> {t('Gallery')} </div>
//         </Link>
//         <Link href={'/community?articleCategory=FREE'}>
//           <div> {t('Community')} </div>
//         </Link>
//         <Link href={'/cs'}>
//           <div> {t('CS')} </div>
//         </Link>
//       </Stack>
//     );
//   } else {
//     return (
//       <Stack className={'navbar'}>
//         <Stack className={`navbar-main ${colorChange ? 'transparent' : ''} ${bgColor ? 'transparent' : ''}`}>
//           <Stack className={'container'}>
//             <Box component={'div'} className={'logo-box'}>
//               <Link href={'/'}>
//                 <img src="/img/car/carlogo1.avif" alt="" />
//               </Link>
//             </Box>
//             <Box component={'div'} className={'router-box'}>
//               <Link href={'/'}>
//                 <div>{t('Home')}</div>
//               </Link>
//               <Link href={'/property'}>
//                 <div>{t('Cars')}</div>
//               </Link>
//               <Link href={'/gallery'}>
//                 <div> {t('Gallery')} </div>
//               </Link>
//               <Link href={'/community?articleCategory=FREE'}>
//                 <div> {t('Community')} </div>
//               </Link>
//               {user?._id && (
//                 <Link href={'/mypage'}>
//                   <div> {t('My Page')} </div>
//                 </Link>
//               )}
//               <Link href={'/cs'}>
//                 <div> {t('CS')} </div>
//               </Link>
//             </Box>
//             <Box component={'div'} className={'user-box'}>
//               {/* Agar foydalanuvchi tizimga kirgan bo'lsa, Login va Signup tugmalari ko'rinmasligi kerak */}
//               {!user?._id ? (
//                 <>
//                   <Link href={'/account/join'}>
//                     <div className={'join-box'}>
//                       <AccountCircleOutlinedIcon />
//                       <span>
//                         {t('Login')} / {t('Register')}
//                       </span>
//                     </div>
//                   </Link>
//                 </>
//               ) : (
//                 <>
//                   <div className={'login-user'} onClick={(event: any) => setLogoutAnchor(event.currentTarget)}>
//                     <img
//                       src={
//                         user?.memberImage ? `${REACT_APP_API_URL}/${user?.memberImage}` : '/img/profile/defaultUser.svg'
//                       }
//                       alt=""
//                     />
//                   </div>

//                   <Menu
//                     id="basic-menu"
//                     anchorEl={logoutAnchor}
//                     open={logoutOpen}
//                     onClose={() => {
//                       setLogoutAnchor(null);
//                     }}
//                     sx={{ mt: '5px' }}
//                   >
//                     <MenuItem onClick={() => logOut()}>
//                       <Logout fontSize="small" style={{ color: 'blue', marginRight: '10px' }} />
//                       Logout
//                     </MenuItem>
//                   </Menu>
//                 </>
//               )}
//               {/* Agar foydalanuvchi tizimga kirgan bo'lsa, NotificationButton ko'rsatiladi */}
//               {user?._id && (
//                 <NotificationButton />
//               )}

//               {/* Language Selector */}
//               <div className={'lan-box'}>
//                 <Button
//                   disableRipple
//                   className="btn-lang"
//                   onClick={langClick}
//                   endIcon={<CaretDown size={14} color="#616161" weight="fill" />}
//                 >
//                   <Box component={'div'} className={'flag'}>
//                     {lang !== null ? (
//                       <img src={`/img/flag/lang${lang}.png`} alt={'usaFlag'} />
//                     ) : (
//                       <img src={`/img/flag/langen.png`} alt={'usaFlag'} />
//                     )}
//                   </Box>
//                 </Button>
//                 <StyledMenu anchorEl={anchorEl2} open={drop} onClose={langClose} sx={{ position: 'absolute' }}>
//                   <MenuItem disableRipple onClick={langChoice} id="en">
//                     <img
//                       className="img-flag"
//                       src={'/img/flag/langen.png'}
//                       onClick={langChoice}
//                       id="en"
//                       alt={'usaFlag'}
//                     />
//                     {t('English')}
//                   </MenuItem>
//                   <MenuItem disableRipple onClick={langChoice} id="kr">
//                     <img
//                       className="img-flag"
//                       src={'/img/flag/langkr.png'}
//                       onClick={langChoice}
//                       id="kr"
//                       alt={'koreanFlag'}
//                     />
//                     {t('Korean')}
//                   </MenuItem>
//                   <MenuItem disableRipple onClick={langChoice} id="ru">
//                     <img
//                       className="img-flag"
//                       src={'/img/flag/langru.png'}
//                       onClick={langChoice}
//                       id="ru"
//                       alt={'russiaFlag'}
//                     />
//                     {t('Russian')}
//                   </MenuItem>
//                 </StyledMenu>
//               </div>
//             </Box>
//           </Stack>
//         </Stack>
//       </Stack>
//     );
//   }
// };
// export default withRouter(Top);

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
import { color } from '@mui/system';
import zIndex from '@mui/material/styles/zIndex';

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
        'rgb(138, 108, 108) 0px 0px 0px 0px, rgb(138, 108, 108) 0px 0px 0px 0px,rgb(138, 108, 108) 0px 0px 0px 0px, rgb(138, 108, 108) 0px 0px 0px 0px',
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
      {/* Sidebar Logo */}
      <Box sx={{ marginBottom: 3 }}>
        <Link href={'/'}>
          <img src="/img/car/carlogo1.avif" alt="logo" style={{ width: '100%', borderRadius: '50%', boxShadow: '0 1px 4px 0 rgba(184, 187, 191, 0.74);' }} />
        </Link>
      </Box>
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
                style={{ width: 60, borderRadius: '50%' }}
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

        {user?._id && <NotificationButton />}
      </Box>
      </Box>    
      
      {/* Language Selector */}
      <Box sx={{ marginTop: 5, color: "#" }}>
        <Button
          variant="text"
          sx={{ textAlign: 'left', display: 'flex', alignItems: 'center', gap: 1,   }}
          onClick={langClick}
          endIcon={<CaretDown size={12} color="#" />}
        >
          <Typography variant="body2" sx={{ color: "#fff",  }}>
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
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Link href={'/'}>
          <Button variant="text" sx={{ textAlign: 'left', color: '#fff' }}>{t('Home')}</Button>
        </Link>
        <Link href={'/property'}>
          <Button variant="text" sx={{ textAlign: 'left', color: '#fff' }}>{t('Cars')}</Button>
        </Link>
        <Link href={'/gallery'}>
          <Button variant="text" sx={{ textAlign: 'left', color: '#fff' }}>{t('Gallery')}</Button>
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
      </Box>

      <Divider sx={{ marginY: 2 }} />

      {/* User Profile & Logout */}
      

  
    </Box>
  );
};

export default withRouter(Top);
