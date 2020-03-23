import React, { useCallback, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [url, setUrl] = useState('/api');

  const fetchData = useCallback(() => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        setMessage(json.message);
        setIsFetching(false);
      }).catch(e => {
        setMessage(`API call failed: ${e}`);
        setIsFetching(false);
      })
  }, [url]);

  useEffect(() => {
    setIsFetching(true);
    fetchData();
  }, [fetchData]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>1Dot LLC</h1>
        <p>
          We create cross-platform mobile apps in React Native.
        </p>
      <img src="https://podcasters.radiopublic.com/static/media/app-screens.07b75c72.png" alt="Logo" />
      <a><img src="http://pluspng.com/img-png/download-on-app-store-png-other-resolutions-320-95-pixels-640.png" alt="C On App Store PNG" /></a>
      </header>
    </div>
  );

}

export default App;
