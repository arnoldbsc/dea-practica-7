import React, { useState } from 'react';
import { useUser } from '../../utils/userProvider';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { setUserName } = useUser();
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate()

  const handleLogin = () => {
    setUserName(inputValue);
    navigate('/home')
  };

  return (
    <div>
      <h2>Ingrese su nombre</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
