import { createBrowserRouter } from 'react-router-dom';
import { NoAuthPage } from '@/pages/auth/no-auth';

export const routerAuth = createBrowserRouter([
  {
    path: '/',
    index: true,
    element: <NoAuthPage />,
  },
  { path: '*', element: <NoAuthPage /> },
]);
