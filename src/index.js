import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Projects from './Projects/Projects';
import Team from './Team/Team';
import Contacts from './Contacts/Contacts';
import Detail from './Detail/Detail'
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/projects",
    element: <Projects />
  },
  {
    path: "/team",
    element: <Team />
  },
  {
    path: "/contacts",
    element: <Contacts />
  },
  {
    path: "projects/:id",
    element: <Detail />
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
