"use client";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import Header from './components/Header/index';
import store from '../redux/app/store'
import { Provider } from 'react-redux'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
        <Provider store={store}>
          <Header/>
           {children}
        </Provider>   
        </AppRouterCacheProvider>
       </body>
    </html>
  );
}
