import { Spin, Button, Collapse, Input } from 'antd';
import { useRef, useEffect, useState } from 'react';
import type { CollapseProps } from 'antd';
import { mainDisclosure, IDisclosure } from './main-disclosure';
import Splitter, { SplitDirection } from '@devbookhq/splitter';
const { TextArea } = Input;
import { createStyles } from 'antd-style';

//const id = 'gri_2_1';
export const TabRequirement = ({listRequirements}: {listRequirements: Array<any>}) => {
  const [requirements, setRequirements] = useState<CollapseProps['items']>([]);

  const useStyles = createStyles(({ token, css }) => ({
    gutter: css`
      background: #dfd3c3;
    `,
  }));

  const { styles, cx, theme } = useStyles();

  useEffect(() => {
    if(listRequirements){
      let req = [];
      for (let i = 0; i < listRequirements.length; i++) {
        // let isi = localStorage.getItem(mainDisclosure[id].requirements[i].code);
        // if (!isi) {
        //   isi = '';
        // }
        let isi = '';
        req.push({
          key: listRequirements[i].code,
          label: listRequirements[i].code,
          children: (
            <div>
              <div style={{ fontWeight: 500, marginBottom: 10 }}>
                {listRequirements[i].requirement}
              </div>
              <div style={{ marginBottom: 10 }}>
                {listRequirements[i].guide}
              </div>
              <TextArea
                defaultValue={isi}
                rows={6}
                onChange={(e) => {
                  console.log(e.target.value)
                  // if (id) {
                  //   localStorage.setItem(
                  //     mainDisclosure[id].requirements[i].code,
                  //     e.target.value
                  //   );
                  // }
                }}
              />
            </div>
          ),
        });
      }
      setRequirements(req);
    }
    // if (id) {
    //   let req = [];
    //   for (let i = 0; i < mainDisclosure[id].requirements.length; i++) {
    //     let isi = localStorage.getItem(mainDisclosure[id].requirements[i].code);
    //     if (!isi) {
    //       isi = '';
    //     }
    //     req.push({
    //       key: mainDisclosure[id].requirements[i].code,
    //       label: mainDisclosure[id].requirements[i].code,
    //       children: (
    //         <div>
    //           <div style={{ fontWeight: 500, marginBottom: 10 }}>
    //             {mainDisclosure[id].requirements[i].requirement}
    //           </div>
    //           <div style={{ marginBottom: 10 }}>
    //             {mainDisclosure[id].requirements[i].guide}
    //           </div>
    //           <TextArea
    //             defaultValue={isi}
    //             rows={6}
    //             onChange={(e) => {
    //               //console.log(e.target.value)
    //               if (id) {
    //                 localStorage.setItem(
    //                   mainDisclosure[id].requirements[i].code,
    //                   e.target.value
    //                 );
    //               }
    //             }}
    //           />
    //         </div>
    //       ),
    //     });
    //   }
    //   setRequirements(req);
    // }
  }, [listRequirements]);

  return (
    <div style={{ height: '80vh' }}>
      <Splitter
        gutterClassName={cx(styles.gutter)}
        direction={SplitDirection.Vertical}
      >
        <div
          style={{
            overflow: 'auto',
            height: '100%',
          }}
        >
          <div style={{ marginTop: 10 }}>Requirements :</div>
          <Collapse
            items={requirements}
            defaultActiveKey={[]}
            onChange={() => {}}
          />
        </div>
        <div
          style={{
            height: '100%',
          }}
        >
          <div style={{ padding: '10px' }}>Additional instruction</div>
          <TextArea rows={4} placeholder="maxLength is 6" maxLength={8} />
        </div>
      </Splitter>
    </div>
  );
};
