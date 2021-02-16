import Form from '../components/Form/Form.Component'


const loginStyles = {
  display: 'flex',
  justifyContent: 'center',
}

function Login() {
  return (
    <div style={loginStyles}>
      <Form />
    </div>
  )
}

export { Login }