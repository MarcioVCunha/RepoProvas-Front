import { Routes, Route } from 'react-router-dom';

function Teste() {
  return (
    <p>Teste</p>
  );
}

function Pages() {
  return (
    <Routes>
      <Route exact path="/" element={<Teste />} />
    </Routes>
  );
}

export default Pages;
