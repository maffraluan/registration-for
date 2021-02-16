import Form from '../components/Form/Form.Component'

const signupStyles = {
  display: 'flex',
  justifyContent: 'center',
}

function SignUp() {
  return (
    <div style={signupStyles}>
      <Form />
    </div>
  )
}

export { SignUp }