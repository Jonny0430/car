// import type { AppProps } from 'next/app';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import { CssBaseline } from '@mui/material';
// import React, { useState } from 'react';
// import { light } from '../scss/MaterialTheme';
// import { ApolloProvider } from '@apollo/client';
// import { useApollo } from '../apollo/client';
// import { appWithTranslation } from 'next-i18next';
// import '../scss/app.scss';
// import '../scss/pc/main.scss';
// import '../scss/mobile/main.scss';

// const App = ({ Component, pageProps }: AppProps) => {
// 	// @ts-ignore
// 	const [theme, setTheme] = useState(createTheme(light));
// 	const client = useApollo(pageProps.initialApolloState);
// 	 const [darkMode, setDarkMode] = useState(false);

// 	return (
// 		<ApolloProvider client={client}>
// 			<ThemeProvider theme={theme}>
// 				<CssBaseline />
// 				<Component {...pageProps} />
// 			</ThemeProvider>
// 		</ApolloProvider>
// 	);
// };

// export default appWithTranslation(App);
import type { AppProps } from 'next/app';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import React, { useState, useMemo } from 'react';
import { light } from '../scss/MaterialTheme'; // light va dark temalarini import qilish
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../apollo/client';
import { appWithTranslation } from 'next-i18next';
import '../scss/app.scss';
import '../scss/pc/main.scss';
import '../scss/mobile/main.scss';
import { dark } from '../scss/MaterialTheme/create';

const App = ({ Component, pageProps }: AppProps) => {
  // Dark mode holatini boshqarish uchun state
  const [darkMode, setDarkMode] = useState(false);

  // Tema yaratish va uni useMemo yordamida optimallashtirish
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light', // Dark yoki light rejim
          ...(darkMode ? dark : light), // Dark mode bo'lsa, dark, aks holda light
        },
      }),
    [darkMode] // faqat darkMode o'zgarganda yangilanadi
  );

  // Apollo client
  const client = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} darkMode={darkMode} setDarkMode={setDarkMode} />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default appWithTranslation(App);
