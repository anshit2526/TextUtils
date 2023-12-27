import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
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
      document.body.style.opacity = '1';
      document.styleSheets[0].insertRule(".accordion-button::after { filter: invert(1) }");

      showAlert("Dark mode has been turned on", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      document.body.style.opacity = '1';
      document.styleSheets[0].removeRule(".accordion-button::after { filter: invert(1) }");

      showAlert("Dark mode has been turned off", "success");
    }
  }


  return (
    <>
      <Router>

        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleDarkMode={toggleDarkMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} toggleDarkMode={toggleDarkMode} />} />
            <Route exact path="/About" element={<About mode={mode} />} />
          </Routes>
        </div>

      </Router >
    </>
  );
}

export default App;
