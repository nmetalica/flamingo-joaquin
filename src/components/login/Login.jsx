import React, { useMemo, useState } from 'react';
import Button from '../app/Button';
import Input from '../app/Input';
import Loader from '../app/Loader';

const Login = ({
  onLogin,
  loading,
  className = '',
}) => {
  const [username, updateUsername] = useState('');
  const [password, updatePassword] = useState('');

  const validateForm = useMemo(
    () => username && password && !loading,
    [username, password],
  );

  const handleLogin = () => {
    if (validateForm) {
      onLogin({ username, password });
    }
  };

  return (
    <div className={className}>
      <Input className="w-80" label="Usuario: " onChange={updateUsername} value={username} placeholder="Nombre de usuario"/>
      <Input className="w-80 mt-5" label="Contraseña: " onChange={updatePassword} value={password} placeholder="Contraseña" type="password" />
      <Button
        type="primary"
        className="mt-12 w-80 text-white flex items-center"
        size="2xl"
        disabled={!validateForm}
        onClick={handleLogin}
      >
        <span className="mr-3">Entrar</span>
        {loading && <Loader size="8" className="stroke-white" />}
      </Button>
    </div>
  );
};

export default Login;
