import { StatisticCard } from '@ant-design/pro-components';
import RcResizeObserver from 'rc-resize-observer';
import { useState } from 'react';
const { Divider } = StatisticCard;
const imgStyle = {
  display: 'block',
  width: 102,
  height: 102,
};

export const PerformancePage = () => {
  const [responsive, setResponsive] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginBottom: '30px' }}>
        <div
          style={{
            color: 'gray',
            fontSize: 18,
            fontWeight: 500,
            marginBottom: '10px',
          }}
        >
          Impacts On Environment By Inputs
        </div>
        <RcResizeObserver
          key="resize-observer"
          onResize={(offset) => {
            setResponsive(offset.width < 596);
          }}
        >
          <StatisticCard.Group direction={responsive ? 'column' : 'row'}>
            <StatisticCard
              style={{
                backgroundColor: '#fdb713',
                color: 'white',
                height: '140px',
              }}
              statistic={{
                title: (
                  <div
                    style={{ fontSize: 18, fontWeight: 500, color: 'white' }}
                  >
                    Affordable and Clean Energy
                  </div>
                ),
                suffix: '%',
                value: 60,
                valueStyle: { fontSize: 24, fontWeight: 600 },
                icon: (
                  <img
                    style={imgStyle}
                    src="https://sdgs.org.au/wp-content/uploads/2018/06/E_SDG-goals_icons-individual-rgb-07.png"
                    alt="icon"
                  />
                ),
              }}
            />
            <Divider type={responsive ? 'horizontal' : 'vertical'} />
            <StatisticCard
              style={{
                backgroundColor: '#02add9',
                color: 'white',
                height: '140px',
              }}
              statistic={{
                title: (
                  <div
                    style={{ fontSize: 18, fontWeight: 500, color: 'white' }}
                  >
                    Clean Water And Sanitation
                  </div>
                ),
                value: 74,
                valueStyle: { fontSize: 24, fontWeight: 600 },
                suffix: '%',
                icon: (
                  <img
                    style={imgStyle}
                    src="https://th.bing.com/th/id/OIP.S75UEV426Gn2tEaIw_qH-gHaHa?rs=1&pid=ImgDetMain"
                    alt="icon"
                  />
                ),
              }}
            />
            <Divider type={responsive ? 'horizontal' : 'vertical'} />
            <StatisticCard
              style={{
                backgroundColor: '#cf8d2a',
                color: 'white',
                height: '140px',
              }}
              statistic={{
                title: (
                  <div
                    style={{ fontSize: 18, fontWeight: 500, color: 'white' }}
                  >
                    Responsible Consumption And Production
                  </div>
                ),
                value: 36,
                valueStyle: { fontSize: 24, fontWeight: 600 },
                suffix: '%',
                icon: (
                  <img
                    style={imgStyle}
                    src="https://sdgs.org.au/wp-content/uploads/2018/06/E_SDG-goals_icons-individual-rgb-12.png"
                    alt="icon"
                  />
                ),
              }}
            />
          </StatisticCard.Group>
        </RcResizeObserver>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <div
          style={{
            color: 'gray',
            fontSize: 18,
            fontWeight: 500,
            marginBottom: '10px',
          }}
        >
          Impacts On Employees
        </div>
        <RcResizeObserver
          key="resize-observer"
          onResize={(offset) => {
            setResponsive(offset.width < 596);
          }}
        >
          <StatisticCard.Group direction={responsive ? 'column' : 'row'}>
            <StatisticCard
              style={{
                backgroundColor: '#eb1c2d',
                color: 'white',
                height: '140px',
              }}
              statistic={{
                title: (
                  <div
                    style={{ fontSize: 18, fontWeight: 500, color: 'white' }}
                  >
                    No Poverty
                  </div>
                ),
                value: 60,
                valueStyle: { fontSize: 24, fontWeight: 600 },
                suffix: '%',
                icon: (
                  <img
                    style={imgStyle}
                    src="https://sdgs.org.au/wp-content/uploads/2018/05/E_SDG-goals_icons-individual-rgb-01.png"
                    alt="icon"
                  />
                ),
              }}
            />
            <Divider type={responsive ? 'horizontal' : 'vertical'} />
            <StatisticCard
              style={{
                backgroundColor: '#d3a029',
                color: 'white',
                height: '140px',
              }}
              statistic={{
                title: (
                  <div
                    style={{ fontSize: 18, fontWeight: 500, color: 'white' }}
                  >
                    Zero Hunger
                  </div>
                ),
                value: 74,
                valueStyle: { fontSize: 24, fontWeight: 600 },
                suffix: '%',
                icon: (
                  <img
                    style={imgStyle}
                    src="https://sdgs.org.au/wp-content/uploads/2018/06/E_SDG-goals_icons-individual-rgb-02.png"
                    alt="icon"
                  />
                ),
              }}
            />
            <Divider type={responsive ? 'horizontal' : 'vertical'} />
            <StatisticCard
              style={{
                backgroundColor: '#279b48',
                color: 'white',
                height: '140px',
              }}
              statistic={{
                title: (
                  <div
                    style={{ fontSize: 18, fontWeight: 500, color: 'white' }}
                  >
                    Good Health and Well-being
                  </div>
                ),
                value: 36,
                valueStyle: { fontSize: 24, fontWeight: 600 },
                suffix: '%',
                icon: (
                  <img
                    style={imgStyle}
                    src="https://sdgs.org.au/wp-content/uploads/2018/06/E_SDG-goals_icons-individual-rgb-03.png"
                    alt="icon"
                  />
                ),
              }}
            />
            <Divider type={responsive ? 'horizontal' : 'vertical'} />
            <StatisticCard
              style={{
                backgroundColor: '#c31f33',
                color: 'white',
                height: '140px',
              }}
              statistic={{
                title: (
                  <div
                    style={{ fontSize: 18, fontWeight: 500, color: 'white' }}
                  >
                    Quality Education
                  </div>
                ),
                value: 36,
                valueStyle: { fontSize: 24, fontWeight: 600 },
                suffix: '%',
                icon: (
                  <img
                    style={imgStyle}
                    src="https://sdgs.org.au/wp-content/uploads/2018/06/E_SDG-goals_icons-individual-rgb-04.png"
                    alt="icon"
                  />
                ),
              }}
            />
            <Divider type={responsive ? 'horizontal' : 'vertical'} />
            <StatisticCard
              style={{
                backgroundColor: '#ef402b',
                color: 'white',
                height: '140px',
              }}
              statistic={{
                title: (
                  <div
                    style={{ fontSize: 18, fontWeight: 500, color: 'white' }}
                  >
                    Gender Equality
                  </div>
                ),
                value: 36,
                valueStyle: { fontSize: 24, fontWeight: 600 },
                suffix: '%',
                icon: (
                  <img
                    style={imgStyle}
                    src="https://sdgs.org.au/wp-content/uploads/2018/06/E_SDG-goals_icons-individual-rgb-05.png"
                    alt="icon"
                  />
                ),
              }}
            />
            <Divider type={responsive ? 'horizontal' : 'vertical'} />
            <StatisticCard
              style={{
                backgroundColor: '#8f1838',
                color: 'white',
                height: '140px',
              }}
              statistic={{
                title: (
                  <div
                    style={{ fontSize: 18, fontWeight: 500, color: 'white' }}
                  >
                    Decent Work And Economic Growth
                  </div>
                ),
                value: 36,
                valueStyle: { fontSize: 24, fontWeight: 600 },
                suffix: '%',
                icon: (
                  <img
                    style={imgStyle}
                    src="https://sdgs.org.au/wp-content/uploads/2018/06/E_SDG-goals_icons-individual-rgb-08.png"
                    alt="icon"
                  />
                ),
              }}
            />
          </StatisticCard.Group>
        </RcResizeObserver>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <div
          style={{
            color: 'gray',
            fontSize: 18,
            fontWeight: 500,
            marginBottom: '10px',
          }}
        >
          Impacts On Society, Communities And Customers
        </div>
        <RcResizeObserver
          key="resize-observer"
          onResize={(offset) => {
            setResponsive(offset.width < 596);
          }}
        >
          <StatisticCard.Group direction={responsive ? 'column' : 'row'}>
            <StatisticCard
              style={{
                backgroundColor: '#f36d25',
                color: 'white',
                height: '140px',
              }}
              statistic={{
                title: (
                  <div
                    style={{ fontSize: 18, fontWeight: 500, color: 'white' }}
                  >
                    Industry, Innovation ANd Infrastructure
                  </div>
                ),
                value: 60,
                valueStyle: { fontSize: 24, fontWeight: 600 },
                suffix: '%',
                icon: (
                  <img
                    style={imgStyle}
                    src="https://sdgs.org.au/wp-content/uploads/2018/06/E_SDG-goals_icons-individual-rgb-09.png"
                    alt="icon"
                  />
                ),
              }}
            />
            <Divider type={responsive ? 'horizontal' : 'vertical'} />
            <StatisticCard
              style={{
                backgroundColor: '#e11484',
                color: 'white',
                height: '140px',
              }}
              statistic={{
                title: (
                  <div
                    style={{ fontSize: 18, fontWeight: 500, color: 'white' }}
                  >
                    Reduced Inequalities
                  </div>
                ),
                value: 74,
                valueStyle: { fontSize: 24, fontWeight: 600 },
                suffix: '%',
                icon: (
                  <img
                    style={imgStyle}
                    src="https://sdgs.org.au/wp-content/uploads/2018/06/E_SDG-goals_icons-individual-rgb-10.png"
                    alt="icon"
                  />
                ),
              }}
            />
            <Divider type={responsive ? 'horizontal' : 'vertical'} />
            <StatisticCard
              style={{
                backgroundColor: '#f99d26',
                color: 'white',
                height: '140px',
              }}
              statistic={{
                title: (
                  <div
                    style={{ fontSize: 18, fontWeight: 500, color: 'white' }}
                  >
                    Sustainable Cities And Comminities
                  </div>
                ),
                value: 36,
                valueStyle: { fontSize: 24, fontWeight: 600 },
                suffix: '%',
                icon: (
                  <img
                    style={imgStyle}
                    src="https://sdgs.org.au/wp-content/uploads/2018/06/E_SDG-goals_icons-individual-rgb-11.png"
                    alt="icon"
                  />
                ),
              }}
            />
            <Divider type={responsive ? 'horizontal' : 'vertical'} />
            <StatisticCard
              style={{
                backgroundColor: '#02558b',
                color: 'white',
                height: '140px',
              }}
              statistic={{
                title: (
                  <div
                    style={{ fontSize: 18, fontWeight: 500, color: 'white' }}
                  >
                    Peace, Justice And Strong Institutions
                  </div>
                ),
                value: 36,
                valueStyle: { fontSize: 24, fontWeight: 600 },
                suffix: '%',
                icon: (
                  <img
                    style={imgStyle}
                    src="https://sdgs.org.au/wp-content/uploads/2018/06/E_SDG-goals_icons-individual-rgb-16.png"
                    alt="icon"
                  />
                ),
              }}
            />
            <Divider type={responsive ? 'horizontal' : 'vertical'} />
            <StatisticCard
              style={{
                backgroundColor: '#183668',
                color: 'white',
                height: '140px',
              }}
              statistic={{
                title: (
                  <div
                    style={{ fontSize: 18, fontWeight: 500, color: 'white' }}
                  >
                    Partnerships FOr The Goals
                  </div>
                ),
                value: 36,
                valueStyle: { fontSize: 24, fontWeight: 600 },
                suffix: '%',
                icon: (
                  <img
                    style={imgStyle}
                    src="https://sdgs.org.au/wp-content/uploads/2018/06/E_SDG-goals_icons-individual-rgb-17.png"
                    alt="icon"
                  />
                ),
              }}
            />
          </StatisticCard.Group>
        </RcResizeObserver>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <div
          style={{
            color: 'gray',
            fontSize: 18,
            fontWeight: 500,
            marginBottom: '10px',
          }}
        >
          Impacts On Environment By Operations and Products
        </div>
        <RcResizeObserver
          key="resize-observer"
          onResize={(offset) => {
            setResponsive(offset.width < 596);
          }}
        >
          <StatisticCard.Group direction={responsive ? 'column' : 'row'}>
            <StatisticCard
              style={{
                backgroundColor: '#48773e',
                color: 'white',
                height: '140px',
              }}
              statistic={{
                title: (
                  <div
                    style={{ fontSize: 18, fontWeight: 500, color: 'white' }}
                  >
                    Climate Action
                  </div>
                ),
                value: 60,
                valueStyle: { fontSize: 24, fontWeight: 600 },
                suffix: '%',
                icon: (
                  <img
                    style={imgStyle}
                    src="https://sdgs.org.au/wp-content/uploads/2018/06/E_SDG-goals_icons-individual-rgb-13.png"
                    alt="icon"
                  />
                ),
              }}
            />
            <Divider type={responsive ? 'horizontal' : 'vertical'} />
            <StatisticCard
              style={{
                backgroundColor: '#007dbc',
                color: 'white',
                height: '140px',
              }}
              statistic={{
                title: (
                  <div
                    style={{ fontSize: 18, fontWeight: 500, color: 'white' }}
                  >
                    Life Below Water
                  </div>
                ),
                value: 74,
                valueStyle: { fontSize: 24, fontWeight: 600 },
                suffix: '%',
                icon: (
                  <img
                    style={imgStyle}
                    src="https://sdgs.org.au/wp-content/uploads/2018/06/E_SDG-goals_icons-individual-rgb-14.png"
                    alt="icon"
                  />
                ),
              }}
            />
            <Divider type={responsive ? 'horizontal' : 'vertical'} />
            <StatisticCard
              style={{
                backgroundColor: '#3eb049',
                color: 'white',
                height: '140px',
              }}
              statistic={{
                title: (
                  <div
                    style={{ fontSize: 18, fontWeight: 500, color: 'white' }}
                  >
                    Life on Land
                  </div>
                ),
                value: 36,
                valueStyle: { fontSize: 24, fontWeight: 600 },
                suffix: '%',
                icon: (
                  <img
                    style={imgStyle}
                    src="https://sdgs.org.au/wp-content/uploads/2018/06/E_SDG-goals_icons-individual-rgb-15.png"
                    alt="icon"
                  />
                ),
              }}
            />
          </StatisticCard.Group>
        </RcResizeObserver>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <div
          style={{
            color: 'gray',
            fontSize: 18,
            fontWeight: 500,
            marginBottom: '10px',
          }}
        >
          Financials
        </div>
        <RcResizeObserver
          key="resize-observer"
          onResize={(offset) => {
            setResponsive(offset.width < 596);
          }}
        >
          <StatisticCard.Group direction={responsive ? 'column' : 'row'}>
            <StatisticCard
              style={{ height: '140px' }}
              statistic={{
                title: (
                  <div style={{ fontSize: 18, fontWeight: 500 }}>Revenue</div>
                ),
                value: 60,
                valueStyle: { fontSize: 24, fontWeight: 600 },
                suffix: 'IDR',
              }}
            />
            <Divider type={responsive ? 'horizontal' : 'vertical'} />
            <StatisticCard
              style={{ height: '140px' }}
              statistic={{
                title: (
                  <div style={{ fontSize: 18, fontWeight: 500 }}>Profit</div>
                ),
                value: 74,
                valueStyle: { fontSize: 24, fontWeight: 600 },
                suffix: 'IDR',
              }}
            />
            <Divider type={responsive ? 'horizontal' : 'vertical'} />
            <StatisticCard
              style={{ height: '140px' }}
              statistic={{
                title: (
                  <div style={{ fontSize: 18, fontWeight: 500 }}>
                    Donations (% of Revenue)
                  </div>
                ),
                value: 36,
                valueStyle: { fontSize: 24, fontWeight: 600 },
                suffix: 'IDR',
              }}
            />
          </StatisticCard.Group>
        </RcResizeObserver>
      </div>
    </div>
  );
};
