import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Settings from './pages/Settings';
import Container from "./components/Container";
import Nav from "./components/Nav";

function App() {
  return (
    <Container>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/settings" element={<Settings />} />
      </Routes>
    </Container>
  );
}

export default App;
