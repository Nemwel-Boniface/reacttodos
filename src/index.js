import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoApp from './components/TodoApp';
import './App.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>
);

