import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode,setmode] = useState('light')
  const [alert,setAlert] = useState(null)
  
  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    }
    )
    setTimeout(() => {
      setAlert(null)
    }, 800);
  }
  const removebg = () => {
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-secondary')


  }
  const palettes = (cls) => {
    removebg()
    document.body.classList.add('bg-'+cls)
    document.body.style.color= "white"
    document.title = 'Utils - '+cls
  }

  const toogleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = "#353a3f"
      document.body.style.color= "white"
      document.getElementById('exampleformControlTextarea1').style.backgroundColor = "#3d4144"
      document.getElementById('exampleformControlTextarea1').style.color = "#fff"
      showAlert('Dark mode has been enabled','success')
      document.title = 'Utils - dark'

    }
    else{
      setmode('light')
      document.body.style.backgroundColor = "#fff"
      document.body.style.color= "black"
      document.getElementById('exampleformControlTextarea1').style.backgroundColor = "#fff"
      showAlert('Light mode has been enabled','success')
      document.title = 'Utils - light'

      
    }
  }
  return (
    <>
    <BrowserRouter>
    <Navbar title="Nav" mode={mode} toogleMode={toogleMode} palettes = {palettes}/>
    <Alert alert = {alert}/>
    <div className="container">
    {/* <About /> */}

    

      <Routes>

        {/* <Route path='Path You want to use' element={<What you want to render >}/>  */}
        <Route exact path="/" element={<TextForm alert={showAlert} heading="Enter text here" mode={mode} />}> </Route>
        <Route path="/about" element={<About />}></Route>	

      </Routes>
    </div>

</BrowserRouter>

    </>

  );
}

export default App;
