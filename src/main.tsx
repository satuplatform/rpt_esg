//import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider } from 'antd';
import enUS from 'antd/lib/locale/en_US';
import './index.css';
import { TiptapWrapContext } from './pages/disclosure/tiptap_wrapcontext.tsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ConfigProvider locale={enUS}>
      <TiptapWrapContext >
        <App />
        </TiptapWrapContext>
      </ConfigProvider>
    </QueryClientProvider>
  // </React.StrictMode>
);
