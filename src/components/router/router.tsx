import { LayoutAdmin } from '@/components/layout';
import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from '@/pages/error';
import { ReportPage } from '@/pages/report';
import { SettingPage } from '@/pages/setting';
import { DisclosurePage } from '@/pages/disclosure';
import { TopicsPage } from '@/pages/topics';
import { DataPage } from '@/pages/data';
import { PreviewPage } from '@/pages/preview';
import { PerformancePage, SustainibilityPage } from '@/pages/dashboard';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutAdmin />,
    children: [
      { index: true, element: <ReportPage /> },
      { path: '/dashboard/performance', element: <PerformancePage /> },
      { path: '/dashboard/sustainibility', element: <SustainibilityPage /> },
      { path: '/report', element: <ReportPage /> },
      {
        path: '/report/disclosures/:reportId/:topicId',
        element: <DisclosurePage />,
      },
      { path: '/report/topics/:reportId', element: <TopicsPage /> },
      { path: '/report/preview/:reportId', element: <PreviewPage /> },
      { path: '/report/data/:reportId', element: <DataPage /> },
      { path: '/setting', element: <SettingPage /> },
      { path: '*', element: <ErrorPage /> },
    ],
  },
]);
