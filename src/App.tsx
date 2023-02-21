import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from "./auth/components/login/Login";
import Register from "./auth/components/register/Register";
import VideoContainerComponent from "./components/annotate/video/videocontainer/VideoContainer";
import Dashboard from "./components/dashboard/Dashboard";


function App() {
  // const [ style ] = useState('CanvasLayer');

  // const commentModeOn = () => {
  //   console.log("Commenting Stop");
    
  //   setStyle("CanvasLayer");
  // };

  // const commentModeOff = () => {
  //   console.log("Commenting Start");
    
  //   setStyle("CanvasLayer2");
  // };


  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Dashboard/>} /> */}
        <Route path="/" element={<Login/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Register />} />
        <Route path="/video" element={<VideoContainerComponent />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;