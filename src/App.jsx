import './App.css'
import logo from './assets/money.png'
import Login from './components/Login'

function App() {
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
        <h2>Component 2</h2>
      </div>

      <div>
        <h2>Component 3</h2>
      </div>

    </>
  )
}

export default App
