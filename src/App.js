import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
