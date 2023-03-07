import logo from './logo.svg';
import './App.css';
import Registration from './authentication/registration';
import Homepage from './homepage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration />}/>
        <Route path="/homepage" element={<Homepage />}/>
          
          
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
