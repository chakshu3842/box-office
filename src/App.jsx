import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starred" element={<Starred />} />

        <Route path="*" element={<div> Bhg ja </div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
