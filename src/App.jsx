import { useState, useEffect } from 'react'
import axios from 'axios'

import logo from './assets/money.png'
import TestProp from './components/TestProp'
import CompanyForm from './components/CompanyForm'

import './App.css'

function App() {
  const [companyWebsite, setCompanyWebsite] = useState('')
  

  const fetchAPI = async () => {
    try {
        const response = await axios.get('http://localhost:3000/');
        console.log(response.data.fruits);
        
    } catch (error) {
        console.error('There was an Error in fetching the data:', error);
    }
};

  function handleWebsiteChange(event) {
    event.preventDefault()
    setCompanyWebsite(event.target.value)
    console.log(event.target.value)
  }

  useEffect(() => {
    fetchAPI()
  }, [])




  return (
    <>
      <div>
        <header>
          <img src={logo} alt="money logo" width={100} />
          <h1> Dashboard: Job Tracker App </h1>
        
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

      <div className='component-border'>
        <h2>Component Import </h2>
        <TestProp name={"Fred"} />
      </div>

      <div className='component-border'>
        <h2>Component Import </h2>
        <CompanyForm /> 
      </div>
    </>
  )
}

export default App
