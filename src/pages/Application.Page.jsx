/* eslint-disable no-restricted-globals */
import { useSelector } from 'react-redux';
import { selectUser } from '../_redux/userSlice';
import { useHistory } from 'react-router-dom';

import Photos from '../components/Photos/Photos.Component';
import useCapitalizeFirstLetter from '../customHooks/useCapitalizeFirstLetter';

const applicationStyles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginLeft: 10,
  },
  span: {
    fontWeight: 400,
  }
};

function Application() {
  const user = useSelector(selectUser);
  const { name } = user;

  const history = useHistory();

  const handleLogout = () => {
    if (confirm('Tem certeza que deseja sair?')) {
      history.push('/login')
    }
  }

  return (
    <div>
      <header style={applicationStyles.header}>
        <h4>Bem vindo <span style={applicationStyles.span}>{useCapitalizeFirstLetter(name)}</span></h4>

        <button style={applicationStyles.button} onClick={handleLogout}>Sair</button>
      </header>

      <main>
        <Photos />
      </main>
    </div>
  )
}

export { Application }