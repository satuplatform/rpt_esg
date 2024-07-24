import { Col, Row, Card } from 'antd';
import { ProCard, StatisticCard } from '@ant-design/pro-components';
import RcResizeObserver from 'rc-resize-observer';
import { useState } from 'react';
import { Badge, Descriptions } from 'antd';
import type { DescriptionsProps } from 'antd';

const imgStyle = {
  display: 'block',
  width: 42,
  height: 42,
};

const items: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'Product',
    children: 'Cloud Database',
  },
  {
    key: '2',
    label: 'Billing Mode',
    children: 'Prepaid',
  },
  {
    key: '3',
    label: 'Automatic Renewal',
    children: 'YES',
  },
];

export const SustainibilityPage = () => {
  const [responsive, setResponsive] = useState(false);
  return (
    <Row gutter={[16, 16]}>
      <Col span={12}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <div style={{ fontSize: 25, fontWeight: 500 }}>
            Sustainability Dashboard
          </div>
          <div style={{ fontSize: 17, marginLeft: '10px' }}>Main KPIs</div>
        </div>
        <div
          style={{
            marginTop: '10px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Card bordered={true} style={{ width: '50%' }}>
            <div
              style={{
                marginTop: '10px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}
            >
              <div>January 2022</div>
              <div style={{ fontSize: 25, fontWeight: 500 }}>53,1 %</div>
            </div>
          </Card>
          <Card bordered={true} style={{ padding: 5, width: '50%' }}>
            <div
              style={{
                marginTop: '10px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}
            >
              <div>Februari 2022</div>
              <div style={{ fontSize: 25, fontWeight: 500 }}>53,1 %</div>
            </div>
          </Card>
        </div>
        <Card
          bordered={true}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            minHeight: '430px',
            padding: 5,
            width: '100%',
          }}
        >
          <div>Groups</div>
          <RcResizeObserver
            key="resize-observer"
            onResize={(offset) => {
              setResponsive(offset.width < 596);
            }}
          >
            <StatisticCard.Group direction={'row'}>
              <StatisticCard
                statistic={{
                  title: 'Community',
                  value: 76,
                  style: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  },
                  suffix: '%',
                  trend: 'up',
                  icon: (
                    <img
                      style={imgStyle}
                      src="https://static.vecteezy.com/system/resources/previews/012/528/083/non_2x/inclusion-social-equity-icon-help-or-support-employee-gender-equality-community-care-age-and-culture-diversity-people-group-save-thin-line-symbol-editable-color-illustration-vector.jpg"
                      alt="icon"
                    />
                  ),
                }}
              />
              <StatisticCard
                statistic={{
                  title: 'Customers',
                  value: 47,
                  style: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  },
                  suffix: '%',
                  trend: 'down',
                  icon: (
                    <img
                      style={imgStyle}
                      src="https://static.vecteezy.com/system/resources/previews/010/594/616/original/experience-qualification-team-line-icon-satisfaction-user-customer-service-review-linear-pictogram-good-quality-happy-client-high-quality-outline-icon-editable-stroke-illustration-vector.jpg"
                      alt="icon"
                    />
                  ),
                }}
              />
              <StatisticCard
                statistic={{
                  title: 'Employees',
                  value: 87,
                  style: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  },
                  trend: 'up',
                  suffix: '%',
                  icon: (
                    <img
                      style={imgStyle}
                      src="https://cdn3.iconfinder.com/data/icons/esg-factors/64/management-512.png"
                      alt="icon"
                    />
                  ),
                }}
              />
              <StatisticCard
                statistic={{
                  title: 'Environment',
                  value: 89,
                  style: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  },
                  trend: 'down',
                  suffix: '%',
                  icon: (
                    <img
                      style={imgStyle}
                      src="https://th.bing.com/th/id/OIP.JDqDxOYWTy7b2UOEtEDV0QHaHa?rs=1&pid=ImgDetMain"
                      alt="icon"
                    />
                  ),
                }}
              />
            </StatisticCard.Group>
          </RcResizeObserver>
        </Card>
      </Col>

      <Col span={12} style={{ height: '410px' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: '10px',
          }}
        >
          <div style={{ fontSize: 18, fontWeight: 400 }}>
            Country Selected : Polland
          </div>
        </div>
        <div
          style={{
            marginTop: '10px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <Card bordered={true} style={{ padding: 5, width: '100%' }}>
            <div
              style={{
                marginTop: '10px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div style={{ fontSize: 25, fontWeight: 500 }}>53,1 %</div>
            </div>
          </Card>
        </div>
        <Card bordered={true} style={{ padding: 5, width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <ProCard
              title="Best KPIs"
              bordered
              tooltip="Best KPIs"
              style={{ width: '50%', padding: 0 }}
            >
              <table>
                <tr>
                  <td>increasing ecological transparancy</td>
                  <td>2.85</td>
                </tr>
                <tr>
                  <td>Cost of eliminating and remediating pollution</td>
                  <td>2.85</td>
                </tr>
              </table>
            </ProCard>
            <ProCard
              title="Most Increase KPIs (vs Previous)"
              bordered
              tooltip="Most Increase KPIs (vs Previous)"
              style={{ width: '50%' }}
            >
              <table>
                <tr>
                  <td>Work related injuries rate</td>
                  <td>2.85</td>
                </tr>
                <tr>
                  <td>workers involved in stoppages</td>
                  <td>2.85</td>
                </tr>
              </table>
            </ProCard>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <ProCard
              title="Worst KPIs"
              bordered
              tooltip="Worst KPIs"
              style={{ width: '50%' }}
            >
              <table>
                <tr>
                  <td>climate mitigation and adaptation goals</td>
                  <td>2.85</td>
                </tr>
                <tr>
                  <td>water recycled and reuse</td>
                  <td>2.85</td>
                </tr>
              </table>
            </ProCard>
            <ProCard
              title="Most Decrease KPIs (vs Previous)"
              bordered
              tooltip="Best KPIs"
              style={{ width: '50%' }}
            >
              <table>
                <tr>
                  <td>GHG removals for own operations</td>
                  <td>2.85</td>
                </tr>
                <tr>
                  <td>GHG removals for the value chain</td>
                  <td>2.85</td>
                </tr>
              </table>
            </ProCard>
          </div>
        </Card>
      </Col>

      <Col span={24}>
        <div>Trend</div>
      </Col>

      <Col span={12}>
        <Card
          bordered={true}
          title={'KPI Projects'}
          style={{ padding: 5, width: '100%' }}
        ></Card>
      </Col>
      <Col span={12}>
        <Card
          bordered={true}
          title={'Carbon Offset'}
          style={{ padding: 5, width: '100%' }}
        ></Card>
      </Col>
    </Row>
  );
};
