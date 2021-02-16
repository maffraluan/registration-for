import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import '../shared.styles.css';

import useCapitalizeFirstLetter from '../../customHooks/useCapitalizeFirstLetter';
import { register, selectUser } from '../../_redux/userSlice';

const Form = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [inputValues, setInputValues] = useState({
    hello: 'Olá',
    name: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const history = useHistory();
  const { pathname } = useLocation();

  const handleChange = e => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value
    });
  };

  function signUpLabelAndInput() {
    return (
      <React.Fragment>
        <label>Digite seu nome</label>
        <input
          onChange={handleChange}
          type="text"
          value={inputValues.name}
          name={'name'}
        />
      </React.Fragment>
    )
  }

  const handleRegister = e => {
    const { name, email, password } = inputValues;
    e.preventDefault();
    setIsLoading(true);

    if (name === '' || email === '' || password === '') {
      alert('Campo vazio!')
      setIsLoading(false);
    } else {
      dispatch(register({
        name: name,
        email: email,
        password: password,
      }))
      setTimeout(() => {
        alert('Usuario criado com sucesso!')
        history.push('/login');
      }, 2000);
      setIsLoading(false);
    }
  };

  const handleLogin = e => {
    e.preventDefault();
    setIsLoading(true);

    if (user === null) {
      alert('Crie um novo usuario!')
    } else {
      if (inputValues.email && inputValues.password === '') alert('Campo vazio!')
      if (inputValues.email !== user.email || inputValues.password !== user.password) {
        alert('Usuario invalido!');
        setIsLoading(false);
      } else {
        setTimeout(() => {
          alert('Login com sucesso!')
          history.push('/application');
        }, 2000);
        setIsLoading(false);
      }
    }
  };

  return (
    <div className={'main'} >
      {`${inputValues.hello} ` + useCapitalizeFirstLetter(inputValues.name)}

      <form className={'form'}
        onSubmit={pathname === '/signup' ? handleRegister : handleLogin}>
        {pathname === '/signup' ? signUpLabelAndInput() : null}
        <label>Digite seu melhor e-mail</label>
        <input
          onChange={handleChange}
          value={inputValues.email}
          name={'email'}
          type="email"
        />
        <label>Digite sua senha mais forte</label>
        <input
          onChange={handleChange}
          value={inputValues.password}
          name={'password'}
          type="password"
        />
        <button>
          {isLoading ? "Enviando..." : "Enviar"}
        </button>
      </form>

      {pathname === '/signup'
        ? <Link to={'/login'} >
          <span>Já tenho uma conta...</span>
        </Link>
        : <Link to={'/signup'} >
          <span>Criar uma conta...</span>
        </Link>}
    </div >
  )
}

export default Form;