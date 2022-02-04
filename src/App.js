import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
function App() {

  const [mode, setMode] = useState('light')

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggle = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode has been Enable", "success")

    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been Enable", "success")

    }
  }
  return (
    <>
      
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggle} />
        <Alert alert={alert} />

        <div className='container'>
            <TextForm mode={mode} heading="Enter Your Text Here" showAlert={showAlert} />
          </div>

        {/* <Router>
        <Routes>
          <Route exact path="/about" element={<About />} />


          <Route exact path="/" element={} />


        </Routes>



      </Router> */}




    </>
  );
}

export default App;
