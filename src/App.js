import './App.css';
import { Routes, Route } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Info from '../src/componentest/Info/Info';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Info />} />

        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
