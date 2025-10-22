
import { BrowserRouter } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';
import routes from './router/config';
import Navbar from './components/Shared/Navbar';
import Footer from './components/Shared/Footer';

function AppRoutes() {
  return useRoutes(routes);
}

function App() {
  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <div className="App">
        <Navbar />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
