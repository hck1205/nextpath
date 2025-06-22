import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

// import * as S from './App.styled';
import './assets/normalize.css';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));

function App() {
  return (
    <>
      {/* <S.Nav>
        <Link to="/">Home</Link>
        <Link to="/simulator">Simulator</Link>
        <Link to="/about">About</Link>
      </S.Nav> */}
      <Suspense fallback={<CircularProgress />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
