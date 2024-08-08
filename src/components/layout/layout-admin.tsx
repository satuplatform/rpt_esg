import { LogoutOutlined } from '@ant-design/icons';
import type { ProSettings } from '@ant-design/pro-components';
import {
  ProConfigProvider,
  ProLayout,
  SettingDrawer
} from '@ant-design/pro-components';
import { ConfigProvider, Dropdown, message } from 'antd';
import { useEffect, useState, useContext } from 'react';
import Icon from '@mdi/react';
import {
  mdiPlusCircleOutline,
  mdiBasket,
  mdiCardAccountDetails,
  mdiViewDashboardOutline,
} from '@mdi/js';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '..';
import { NewReportModalForm } from '@/components/new-report';
import { useQuery } from '@tanstack/react-query';
import { useImmer } from 'use-immer';

// export interface Route {
//   path: string;
//   routes?: Route;
//   children?: Array<{
//     exact?: boolean;
//     emoji: string;
//     name: string;
//     path: string;
//     // Optional secondary menu
//     children?: Route['children'];
//     routes?: Route;
//   }>;
// }

const masterRoute = {
  path: '/',
  routes: [
    {
      name: 'Dashboard',
      icon: <Icon path={mdiViewDashboardOutline} size={0.7} />,
      path: '/dashboard',
      routes: [
        {
          name: 'Performance',
          path: '/dashboard/performance',
        },
        {
          name: 'Suataibility',
          path: '/dashboard/sustainibility',
        },
      ],
    },
    {
      name: 'New Report',
      icon: <Icon path={mdiPlusCircleOutline} size={0.7} />,
      id: 100,
      path: '/',
      routes: []
    },
    {
      name: 'Report',
      icon: <Icon path={mdiBasket} size={0.7} />,
      path: '/report',
      id: 101,
      routes: [
      ],
    },
    {
      name: 'Setting',
      icon: <Icon path={mdiCardAccountDetails} size={0.7} />,
      path: '/setting',
      routes: [
        {
          path: '/setting',
          name: 'Setting',
        },
      ],
    },
  ],
};

export const LayoutAdmin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = useContext(UserContext);
  const [route, setRoute] = useImmer(masterRoute);
  const [showReportModal, setShowReportModal] = useState(false);
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    fixSiderbar: true,
    layout: 'mix',
  });

  const [pathname, setPathname] = useState(location.pathname);

  const { data: dataReport, refetch } = useQuery({
    queryKey: ['new-report'],
    queryFn: () => fetch('/api/report/new-report').then((res) => res.json()),
  });

  const newReportOnOK = async (values: any) => {
    console.log(values);
    values['startDate'] = new Date(values.periode[0]).toISOString();
    values['endDate'] = new Date(values.periode[1]).toISOString();
    delete values['periode'];
    let url = `/api/report/new-report/insert`;
    const rawResponse = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    const jsonData = await rawResponse.json();
    if (jsonData.success) {
      message.success('Insert Sukses');
      refetch();
    }
  };

  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);

  useEffect(() => {
    if (dataReport) {
      setRoute((dataP) => {
        let repp = dataP.routes;
        if(repp){
          let idxx = ((repp as unknown) as Array<any>).findIndex((d) => d.name == 'Report');
          if (idxx > -1) {
            let rep:Array<any> = ((repp as unknown) as Array<any>)[idxx].routes;
            if (rep) {
              for (let i = 0; i < dataReport.data.length; i++) {
                let idx = rep.findIndex((d) => d.name == dataReport.data[i].name);
                if (idx < 0) {
                  let random = Math.random() * (99999 - 10000) + 10000;
                  let random2 = Math.random() * (99999 - 10000) + 10000;
                  let random3 = Math.random() * (99999 - 10000) + 10000;
                  let random4 = Math.random() * (99999 - 10000) + 10000;
                  let random5 = Math.random() * (99999 - 10000) + 10000;
                  rep.push({
                    name: dataReport.data[i].name,
                    path: '/report/detail',
                    key: 'ddd'+random,
                    id: random,
                    routes: [
                      {
                        path: `/report/topics/${dataReport.data[i]._id}`,
                        name: 'Topic',
                        id: random2,
                        key: random2,
                        hideChildrenInMenu: true,
                        routes: [
                          {
                            path: `/report/disclosures/topicid/${dataReport.data[i]._id}`,
                            name: 'Disclosures Report',
                            id: random5,
                            key: random5,
                          },
                        ],
                      },
                      {
                        path: `/report/preview/${dataReport.data[i]._id}`,
                        name: 'Preview',
                        id: random3,
                        key: random3,
                      },
                      {
                        path: `/report/data/${dataReport.data[i]._id}`,
                        name: 'Data',
                        id: random4,
                        key: random4,
                      },
                    ],
                  });
                }
              }
            }
          }
        }
        
      });
    }
  }, [dataReport]);

  const fetchLogout = async () => {
    const url = '/api/auth/logout';
    const response = await fetch(url);
    const jsonData = await response.json();
    if (jsonData.success) {
      window.location.reload();
    }
  };
  if (typeof document === 'undefined') {
    return <div />;
  }
  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <ProConfigProvider hashed={false}>
        <ConfigProvider
          getTargetContainer={() => {
            return document.getElementById('test-pro-layout') || document.body;
          }}
        >
          <ProLayout
            prefixCls="my-prefix"
            title="Sustainability Report"
            bgLayoutImgList={[
              {
                src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
                left: 85,
                bottom: 100,
                height: '303px',
              },
              {
                src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
                bottom: -68,
                right: -45,
                height: '303px',
              },
              {
                src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
                bottom: 0,
                left: 0,
                width: '331px',
              },
            ]}
            route={route}
            location={{
              pathname,
            }}
            token={{
              header: {
                colorBgMenuItemSelected: 'rgba(0,0,0,0.04)',
              },
            }}
            siderMenuType="sub"
            menu={{
              collapsedShowGroupTitle: true,
            }}
            avatarProps={{
              src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
              size: 'small',
              title: user?.name,
              render: (_, dom) => {
                return (
                  <Dropdown
                    menu={{
                      items: [
                        {
                          key: 'logout',
                          icon: <LogoutOutlined />,
                          label: 'Logout',
                        },
                      ],
                      onClick: (e) => {
                        if (e.key == 'logout') {
                          fetchLogout();
                        }
                      },
                    }}
                  >
                    {dom}
                  </Dropdown>
                );
              },
            }}
            headerTitleRender={(logo, title, _) => {
              const defaultDom = (
                <a>
                  {logo}
                  {title}
                </a>
              );
              if (typeof window === 'undefined') return defaultDom;
              if (document.body.clientWidth < 1400) {
                return defaultDom;
              }
              if (_.isMobile) return defaultDom;
              return <>{defaultDom}</>;
            }}
            menuFooterRender={(props) => {
              if (props?.collapsed) return undefined;
              return (
                <div
                  style={{
                    textAlign: 'center',
                    paddingBlockStart: 12,
                  }}
                >
                  <div>© 2021 Made with love</div>
                  <div>by Ant Design</div>
                </div>
              );
            }}
            onMenuHeaderClick={(e) => console.log(e)}
            menuItemRender={(item, dom) => (
              <div
                onClick={() => {
                  if (item.name == 'New Report') {
                    //console.log('item ', item)
                    setShowReportModal(true);
                  } else {
                    navigate(item.path as string);
                  }
                }}
              >
                {dom}
              </div>
            )}
            {...settings}
          >
            <Outlet />

            <SettingDrawer
              pathname={pathname}
              enableDarkTheme
              getContainer={(e: any) => {
                if (typeof window === 'undefined') return e;
                return document.getElementById('test-pro-layout');
              }}
              settings={settings}
              onSettingChange={(changeSetting) => {
                setSetting(changeSetting);
              }}
              disableUrlParams={false}
            />
          </ProLayout>
        </ConfigProvider>
      </ProConfigProvider>
      <NewReportModalForm
        showModal={showReportModal}
        setShowModal={setShowReportModal}
        onOk={newReportOnOK}
      />
    </div>
  );
};
