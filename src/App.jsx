import './App.css'
import logo from './assets/money.png'
import { useState } from 'react'
import Login from './components/Login'

function App() {
  const [companyWebsite, setCompanyWebsite] = useState('')

  // handlers:
  function handleWebsiteChange(event) {
    event.preventDefault()
    setCompanyWebsite(event.target.value)
    console.log(event.target.value)
  }

  return (
    <>
      <div>
        <header>
          <img src={logo} alt="money logo" width={100} />
          <h1> Dashboard: Job Tracker App </h1>
          <Login />
        </header>
      </div>

      <div>
        <form>
          <h2> (Company Info Component)</h2>
          <label>
            Company website:
            <input
              className="company-input"
              type="text"
              placeholder="Company Name"
              value={companyWebsite}
              onChange={handleWebsiteChange}
            />
          </label>
        </form>
      </div>

      <div>
        <h2>Component 3</h2>
      </div>
    </>
  )
}

export default App
