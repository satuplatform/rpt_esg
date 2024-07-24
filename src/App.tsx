import { router, routerAuth, UserContext, IUser } from '@/components';
import { RouterProvider } from 'react-router-dom';
import { Spin } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

function App() {
  const { isPending, error, data } = useQuery({
    queryKey: ['auth-check'],
    queryFn: () => fetch('/api/auth/check').then((res) => res.json()),
  });

  useEffect(() => {
    if (!isPending) {
      //
    }
  });

  if (isPending || error || !data) {
    return <Spin size="large" />;
  }

  let user: IUser | null = null;
  if (data.success) {
    user = {
      ...data.data,
      create_at: new Date(data.data.create_at),
      update_at: new Date(data.data.update_at),
    };
  }

  if (!user) {
    return <RouterProvider router={routerAuth} />;
  }

  return (
    <UserContext.Provider value={user}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}

export default App;
