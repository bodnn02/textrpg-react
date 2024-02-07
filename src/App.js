import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import { Routes, Route, Link } from 'react-router-dom';

import {Gamepage} from './pages/game/index'
import {Notfoundpage} from './pages/Notfoundpage'
import {ProfilePage} from './pages/ProfilePage'
import {LoginPage} from './pages/LoginPage'
import {RegisterPage} from './pages/RegisterPage'

import {GameLayout} from './components/GameLayout/GameLayout'

import ResetCSS from './styles/reset.css';
import Fonts from './styles/fonts.css';
import Styles from './styles/style.css';

function App() {
  const { t } = useTranslation();

  const location = useLocation();

  const [title, setTitle] = useState("Default Title");

  useEffect(() => {
    switch(location.pathname) {
      case '/': {
        document.title = t('Dashboard');
        break;
      }
      case '/log': {
        document.title = t('Log');
        break;
      }
      case '/wallet': {
        document.title = t('Wallet');
        break;
      }
      case '/settings': {
        document.title = t('Settings');
        break;
      }
      case '/info': {
        document.title = t('Info');
        break;
      }
      default: {
        document.title = 'Coedra';
        break;
      }
    }
  }, [location, setTitle]);
  
  
  const changeTitle = (event) => {
    setTitle(event.target.value);
  };

  return (
    <Routes>
      <Route path='/game/' element={<GameLayout/>}>
        <Route index element={<Gamepage/>}/>
      </Route>
      <Route path='/profile' element={<ProfilePage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/character-creation' element={<ProfilePage/>}/>
      <Route path='*' element={<Notfoundpage/>} />
    </Routes>
  );
}

export default App;
