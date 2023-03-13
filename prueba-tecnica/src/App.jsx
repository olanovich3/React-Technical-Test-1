import './App.css';

import { Outlet } from 'react-router-dom';

import Footer from './Components/Footer';
import Header from './Components/Header';
import Layout from './Layout/Layaout';

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Header />
        <Outlet />
        <Footer />
      </Layout>
    </div>
  );
};

export default App;
