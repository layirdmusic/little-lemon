import './App.css';
import Header from './Pages/Home Page/Components/header';
import {Route, Routes} from "react-router-dom"
import Home from './Pages/Home Page/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
