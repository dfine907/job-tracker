import { useState } from 'react'

function Login() {
  
  const [loginValues, setLoginValues] = useState({
    email: '',
    password: '',
  })

  function handleSubmit(event) {
    event.preventDefault()
    console.log(loginValues);
  }

  function handleLoginInput(identifier, value) {
    setLoginValues((preValues) => ({
      ...preValues,
      [identifier]: value,
    }))
  }


  return (
    <form onSubmit={handleSubmit}>
      <h2>LOGIN</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(event) => handleLoginInput('email', event.target.value)}
            value={loginValues.email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) => handleLoginInput('password', event.target.value)}
            value={loginValues.password}
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
