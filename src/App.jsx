import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routing';
import TopBar from './components/topbar';
import SideBar from './components/sidebar';

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <SideBar>
        <AppRouter index path='/*' />
      </SideBar>



    </BrowserRouter>
  );
}

export default App;
