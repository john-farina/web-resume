import React from 'react';
import './App.scss';
import './ResetStyles.scss';
import Head from './Head';
import MainPage from './MainPage';

function App() {
  return (
    <>
      <Head />
      <main className="container">
        <MainPage />
      </main>
    </>
  );
}

export default App;
