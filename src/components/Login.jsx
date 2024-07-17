import { useState } from 'react'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    console.log('Submitted')
  }
  

  function handleEmailChange(event) {
    event.preventDefault()
    setEmail(event.target.value)
    console.log('User email ' + email)
  }

  function handlePasswordChange(event) {
    event.preventDefault()
    setPassword(event.target.value)
    console.log('User PW ' + password)
  }

  return (
    <form onClick={handleSubmit}>
      <h2>LOGIN</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={handleEmailChange}
            value={email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={handlePasswordChange}
            value={password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  )
}

export default Login
