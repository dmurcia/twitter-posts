// import logo from './logo.svg';
import './App.css'
import Login from './components/Login'
import { signOutGithub } from './firebase/client'

function App() {
  if (!localStorage.getItem('@token')) {
    return <Login />
  } else {
    return (
      <div>
        <p>Prueba</p>
        <button onClick={signOutGithub}>Sign Out</button>
      </div>
    )
  }
}

export default App
