import './App.css';
import Navbar from './Components/Navbar.js';
import Textform from './Components/Textform.js';
import Alert from './Components/Alert.js';

// import About from './Components/About.js';
import React, {useState} from 'react';

function App() {      
  
  const [mode, setmode]= useState('light');
  const [alert, setAlert]= useState()

  function showAlert(message, type) {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  function toggleMode() {
    if(mode ==='light'){
      setmode('dark');
      document.body.style.backgroundColor = '#121212';
      document.body.style.color = 'white';
      showAlert('Dark Mode has been enabled','success')

    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#121212';
      showAlert('Light Mode has been enabled','success')
    }
  }

  return (
  <> 
  <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/> 
  <div className="container my-3" style={{height: '50px'}}>
    <Alert alert={alert} />
    </div>

    <div className="container my-3">  
    <Textform showAlert={showAlert} text="Write the text below"/>
    </div>

    {/* <div className="container my-15">  
      <About></About>
    </div> */}

   </> 
  );
} 

export default App;
