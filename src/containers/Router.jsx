import React, { useContext } from 'react';
import {
  HashRouter,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { AppContext } from '../contexts/AppProvider';
import Investments from '../pages/Investments';
import Login from '../pages/LoginPage';
import Profile from '../pages/Profile';
import Header from '../components/app/Header';

const Router = () => {
  const { user } = useContext(AppContext);

  const AuthGuard = (component) => {
    if (!user) {
      return <Login />;
    }

    return component;
  };

  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={AuthGuard(<Profile />)} />
        <Route path="/" element={AuthGuard(<Investments />)} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
