import React from 'react';
import type { SelectProps } from 'antd';
import { Select, Space } from 'antd';
import { css } from '@emotion/css';
import { useTranslation } from '..';

const handleChange = (value: string[]) => {
  console.log(`selected ${value}`);
};

const options: SelectProps['options'] = [
  {
    label: 'China',
    value: 'china',
    emoji: '🇨🇳',
    desc: 'China (中国)',
  },
  {
    label: 'USA',
    value: 'usa',
    emoji: '🇺🇸',
    desc: 'USA (美国)',
  },
  {
    label: 'Japan',
    value: 'japan',
    emoji: '🇯🇵',
    desc: 'Japan (日本)',
  },
  {
    label: 'Korea',
    value: 'korea',
    emoji: '🇰🇷',
    desc: 'Korea (韩国)',
  },
];

export const SelectStore: React.FC = () => {
  const t = useTranslation();

  return (
    <div
      className={css`
        display: flex;
        flex-direction: row;
        min-width: 200px;
      `}
    >
      <div
        className={css`
          display: flex;
          align-items: center;
          margin-right: 10px;
        `}
      >
        Stores
      </div>
      <Select
        mode="multiple"
        style={{ width: '100%' }}
        placeholder={t['pilih store']}
        defaultValue={['china']}
        onChange={handleChange}
        optionLabelProp="label"
        options={options}
        optionRender={(option) => (
          <Space>
            <span>
              {option.data.emoji}
            </span>
            {option.data.desc}
          </Space>
        )}
      />
    </div>
  );
};
