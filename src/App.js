import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Home from './components/Home/home';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home"  element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
