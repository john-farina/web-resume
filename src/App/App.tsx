import { RouterProvider, createHashRouter } from 'react-router-dom';
import './App.scss';
import Head from './Head';
import MainPage from './MainPage';
import DronesBlog from './DronesBlog';



function App() {
  const router = createHashRouter([
    {
      path: '/',
      element: <MainPage />,
      errorElement: <div>404</div>
    },
    {
      path: '/drones',
      element: <DronesBlog />,
      errorElement: <div>404</div>
    }
  ]);
  
  return (
    <>
      <Head />
      <main className="container">
        <RouterProvider router={router} />
      </main>
    </>
  );
}

export default App;
