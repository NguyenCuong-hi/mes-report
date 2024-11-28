import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import AppRouter from './routing';


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/*' element={<AppRouter />} />
        <Route index path='/' />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
