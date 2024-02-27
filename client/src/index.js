import React, { useState, createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

export const Context = createContext({ isAuthenticated: false })

const AppWrapper = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <Context.Provider value={{
      isAuthenticated,
      setIsAuthenticated
    }}>
      <App />
    </Context.Provider>
  )
}

root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);