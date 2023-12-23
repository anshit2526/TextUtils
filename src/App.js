import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');  // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000)

  }


  const toggleDarkMode = () => {
    if (mode !== 'dark') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';

      showAlert("Dark mode has been turned on", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';

      showAlert("Dark mode has been turned off", "success");

    }
  }

  const toggleBlueMode = () => {
    if (mode !== 'blue') {
      setMode('blue');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      document.querySelector('textarea').style.backgroundColor = 'rgb(0, 0, 50)';
      showAlert("Blue mode has been turned on", "success");


    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Blue mode has been turned off", "success");
    }
  }

  const toggleGreenMode = () => {
    if (mode !== 'success') {
      setMode('success');
      document.body.style.backgroundColor = 'rgb(10 120 10)';
      document.body.style.color = 'rgb(255 255 100)';

      showAlert("Yellow mode has been turned on", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';

      showAlert("Yellow mode has been turned off", "success");

    }

  }
  const toggleEyeComfortMode = () => {
    if (mode !== 'eyecomfort') {
      setMode('eyecomfort');

      document.body.style.backgroundColor = 'rgb(163 144 5)';
      document.body.style.color = 'rgb(255 255 100)';
      document.body.style.opacity = '0.7';

      showAlert("Yellow mode has been turned on", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';

      showAlert("Yellow mode has been turned off", "success");
    }
  }


  return (
    <>
      <Router>

        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleDarkMode={toggleDarkMode} toggleBlueMode={toggleBlueMode} toggleGreenMode={toggleGreenMode} toggleEyeComfortMode={toggleEyeComfortMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>

            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} toggleMode={toggleDarkMode} toggleGreenMode={toggleGreenMode} />} />
            <Route exact path="/About" element={<About />} />

          </Routes>
        </div>

      </Router>
    </>
  );
}

export default App;
