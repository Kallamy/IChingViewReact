import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/global';
import theme from './styles/theme'

import Header from './components/Header';
import Footer from './components/Footer';
import { Info } from './pages/Info';
import { Explorer }from './pages/Explorer';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <GlobalStyles/>
            <Header/>
            <Info/>
            <Explorer/>
            <Footer/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
