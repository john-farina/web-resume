import React from 'react';
import './ResetStyles.scss';
import './App.scss';
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
