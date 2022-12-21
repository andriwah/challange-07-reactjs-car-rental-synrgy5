import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import CariPage from './components/CariPage';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './store/index';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Provider store={store}>
        <Header />
      </Provider>
    ),
    children: [
      { path: '/', element: <App /> },
      {
        path: '/cars',
        element: <CariPage />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
