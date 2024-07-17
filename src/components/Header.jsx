import logo from "../assets/money.png"
import classes from './Header.module.css'

function Header() {
  return (
    <>

    <header className={classes.header}>
    <img src={logo} alt="money logo" />
      <h1> Job Tracker App </h1>

    </header>
    </>
  )
}

export default Header
