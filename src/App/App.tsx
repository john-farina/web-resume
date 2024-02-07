import './App.scss';
import Head from './Head';
import Header from './Header';
import MainPage from './MainPage';

function App() {
  return (
    <>
      <Head />
      <main className="container">
        <Header />
        <MainPage />
      </main>
    </>
  );
}

export default App;
