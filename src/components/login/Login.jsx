import React, { useMemo, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../contexts/AppProvider';
import { QueryContext } from '../../contexts/QueryProvider';
import Loader from '../app/Loader';
import Button from '../app/Button';
import Input from '../app/Input';

const Login = ({
  className = '',
}) => {
  const [username, updateUsername] = useState('');
  const [password, updatePassword] = useState('');
  const [error, updateError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { login } = useContext(QueryContext);
  const { updateUser } = useContext(AppContext);

  const handleLogin = async (form) => {
    setLoading(true);
    try {
      updateError('');
      const user = await login(form);
      navigate('/');
      updateUser(user);
    } catch (err) {
      setLoading(false);
      updateError('Usuario o contraseña incorrectos.');
    }
  };

  const validateForm = useMemo(
    () => username && password && !loading,
    [username, password],
  );

  return (
    <div className={className}>
      <Input
        className="w-80"
        label="Usuario: "
        onChange={updateUsername}
        value={username}
        placeholder="Nombre de usuario"
        error={error}
        onFocus={() => updateError('')}
      />
      <Input
        className="w-80 mt-5"
        label="Contraseña: "
        onChange={updatePassword}
        value={password}
        placeholder="Contraseña"
        type="password"
        error={error}
        onFocus={() => updateError('')}
      />
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
