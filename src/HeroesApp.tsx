import { RouterProvider } from 'react-router';
import './App.css';

import { router } from './router/app.router';

export const HeroesApp = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
