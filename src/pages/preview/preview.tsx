import { useEditorContext } from '@/context/tiptap_context';
import { EyeOutlined } from '@ant-design/icons';
import { Button, Spin } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import noImage from './../../assets/images/no-image.jpeg';
import { defaultMarks, defaultNodes, DocxSerializer, writeDocx } from '@/components/todocx';
import {AlignmentType} from 'docx';
import {Buffer} from 'buffer';
import {saveAs} from 'file-saver';
//import { Schema, DOMParser as ProseMirrorDOMParser } from 'prosemirror-model';
//import { schema as basicSchema } from 'prosemirror-schema-basic';

// @ts-ignore
window.Buffer = Buffer;
export const PreviewPage = () => {
  const initialData = {
    data: [],
    contentExport:''
  };
  const [stateData, setStateData] = useState(initialData);
  const { reportId } = useParams();
  
  const [loadLoader, setLoadLoader] = useState(false);
  
  const editor=useEditorContext();
  

  const navigate = useNavigate();
  const getData = async () => {
    const rawResponse = await fetch(
      `/api/report/new-report/preview?id=${reportId}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    );
    const jsonData = await rawResponse.json();
    // console.log('jsonDatajsonDatajsonData', jsonData);
    if (jsonData.success) {
      let strData='';
      jsonData.data.forEach((item:any)=>{
        console.log('jsonDatajsonDatajsonData' ,item);
        strData+=item.content;
      });
      setStateData({
        // data:jsonData.data.concat(jsonData.data)
        data: jsonData.data,
        contentExport:strData
      });
      // console.log('jsonDatajsonDatajsonData strData', strData);
      editor?.commands.setContent(strData);
    }
  };

  useEffect(() => {
    getData();

    return () => {};
  }, []);

  
  const getImage = (src:any): Promise<ArrayBuffer> => {
    return new Promise((resolve, reject) => {
      try {
        fetch(src, {mode: 'no-cors'})
          .then((response) => response.arrayBuffer())
          .then((buf: ArrayBuffer) => {
            resolve(buf);
          })
          .catch((error) => {
            reject(error);
          });
      } catch (error) {
        reject(error);
      }
    });
  };
  
  
  // const exportTodoc = async () => {
  //   // if(!editor){
  //   //   message.error('Export Failed 2');
  //   //   return;
  //   // }
  //   setLoadLoader(true);
  //   let dataImages = new Map();

  //   const imgs = new DOMParser()
  //     .parseFromString(stateData.contentExport, 'text/html')
  //     .querySelectorAll('img');;
  //   for (let i = 0; i < imgs.length; i++) {
  //     let src = imgs[i].getAttribute('src');
  //     if(src){
  //       let dummy_url = new URL(src);
  //       try {
  //         let im = await getImage(dummy_url.pathname + dummy_url.search);
  //         if (im.byteLength > 0) {
  //           dataImages.set(src, im);
  //         } else {
  //           let im = await getImage(noImage);
  //           dataImages.set(src, im);
  //         }
  //       } catch (error) {
  //         //console.log('masuk sini ga error ')
  //         let im = await getImage(noImage);
  //         dataImages.set(src, im);
  //       }
  //     }
     
  //   }
  //   const nodeSerializer = {
  //     ...defaultNodes ,
  //     paragraph(state:any, node:any) {
  //       let alignment: typeof AlignmentType[keyof typeof AlignmentType];
  //       switch (node.attrs.textAlign) {
  //         case 'right':
  //           alignment = AlignmentType.RIGHT;
  //           break;
  //         case 'left':
  //           alignment = AlignmentType.LEFT;
  //           break;
  //         case 'justify':
  //           alignment = AlignmentType.BOTH;
  //           break;
  //         default:
  //           alignment = AlignmentType.LEFT;
  //       }
  //       let opt = {alignment};

  //       state.addParagraphOptions(opt);
  //       state.renderInline(node);
  //       //state.renderContent(node);
  //       state.closeBlock(node, {
  //         spacing: {
  //           before: 150,
  //           after: 150,
  //         },
  //       });
  //     },
  //     hardBreak: defaultNodes.hard_break,
  //     codeBlock: defaultNodes.code_block,
  //     orderedList: defaultNodes.ordered_list,
  //     listItem: defaultNodes.list_item,
  //     bulletList: defaultNodes.bullet_list,
  //     horizontalRule: defaultNodes.horizontal_rule,
  //     image(state:any, node:any) {
  //       const {src} = node.attrs;
  //       let im = dataImages.get(src);
  //       if (im !== null || im== undefined) {
  //         state.image(im);
  //       }
  //       state.closeBlock(node);
  //     },
      
     
     
  //   };

  //   const nodeMarks = {
  //     ...defaultMarks ,
  //     bold: () => {
  //       return {bold: true};
  //     },
  //     italic: () => {
  //       return {italics: true};
  //     },
  //   };

  //   const myDocxSerializer = new DocxSerializer (nodeSerializer, nodeMarks);
    
   

  //   const schema = new Schema({
  //     nodes: basicSchema.spec.nodes,
  //     marks: basicSchema.spec.marks,
  //   });
  

  //   const opts = {
  //     getImageBuffer(src: string) {
  //       return dataImages.get(src) || Buffer.from(''); 
  //     },
  //   };
  //   const doc = ProseMirrorDOMParser.fromSchema(schema).parse(new DOMParser().parseFromString(stateData.contentExport, 'text/html').body);

    

  //   const wordDocument = myDocxSerializer.serialize(doc, opts); 
  //   await writeDocx (wordDocument, (buffer) => {
  //     saveAs (new Blob([buffer]), `bbb.docx`);
  //   });

    
  //   setLoadLoader(false);
  // };



  const exportTodoc = async () => {
    setLoadLoader(true);
    // let ed = TmpEditor.getInstance();
    // let editor = ed.editorPreview;
    if (!editor){
      return;
    }
    let dataImages = new Map();
    const imgs = new DOMParser()
      .parseFromString(editor.getHTML(), 'text/html')
      .querySelectorAll('img');
    console.log('gen report 1 ', noImage);
    for (let i = 0; i < imgs.length; i++) {
      let src = imgs[i].getAttribute('src');
      if(!src){
        return;
      }
      let dummy_url = new URL(src);
      try {
        let im = await getImage(dummy_url.pathname + dummy_url.search);
        if (im.byteLength > 0) {
          dataImages.set(src, im);
        } else {
          let im = await getImage(noImage);
          dataImages.set(src, im);
        }
      } catch (error) {
        //console.log('masuk sini ga error ')
        let im = await getImage(noImage);
        dataImages.set(src, im);
      }
    }
    console.log('gen report 2 html',editor?.getHTML());
    const nodeSerializer = {
      ...defaultNodes,
      paragraph(state:any, node:any) {
        let alignment: typeof AlignmentType[keyof typeof AlignmentType];
        switch (node.attrs.textAlign) {
          case 'right':
            alignment = AlignmentType.RIGHT;
            break;
          case 'left':
            alignment = AlignmentType.LEFT;
            break;
          case 'justify':
            alignment = AlignmentType.BOTH;
            break;
          default:
            alignment = AlignmentType.LEFT;
        }
        let opt = {alignment};

        state.addParagraphOptions(opt);
        state.renderInline(node);
        //state.renderContent(node);
        state.closeBlock(node, {
          spacing: {
            before: 150,
            after: 150,
          },
        });
      },
      hardBreak: defaultNodes.hard_break,
      codeBlock: defaultNodes.code_block,
      orderedList: defaultNodes.ordered_list,
      listItem: defaultNodes.list_item,
      bulletList: defaultNodes.bullet_list,
      horizontalRule: defaultNodes.horizontal_rule,
      image(state:any, node:any) {
        const {src} = node.attrs;
        let im = dataImages.get(src);
        if (im !== null || im!=undefined) {
          state.image(im);
        }
        state.closeBlock(node);
      },
      customBoxSection(state:any, node:any) {
        state.renderContent(node);
        state.closeBlock(node);
      },
      textfield(state:any, node:any) {
        //state.renderContent(node);
        //state.closeBlock(node);
        state.renderInline(node);
      },
      ImageFigure: async (state:any, node:any) => {
        // const {src} = node.attrs;
        state.renderContent(node);
        state.closeBlock(node);
      },
      figcaption(state:any, node:any) {
        state.figcaption(state, node);
      },
      imageBlock: (state:any, node:any) => {
        const {src} = node.attrs;

        let im = dataImages.get(src);
        if (im !== null || im !=undefined) {
          state.image(im);
        }
        state.closeBlock(node);
      },
      
    };

    const nodeMarks = {
      ...defaultMarks,
      bold: () => {
        return {bold: true};
      },
      italic: () => {
        return {italics: true};
      },
    };

    const myDocxSerializer = new DocxSerializer(nodeSerializer, nodeMarks);
    // const opts = {
    //   async getImageBuffer(src: string) {
    //     const buffer = Buffer.from('');
    //     return buffer;
    //   },
    // };

    const opts = {
          getImageBuffer(src: string) {
            return dataImages.get(src) || Buffer.from(''); 
          },
        };

    const wordDocument = myDocxSerializer.serialize(editor.state.doc, opts); 
    await writeDocx(wordDocument, (buffer) => {
      saveAs(new Blob([buffer]), `bb.docx`);
    });
    setLoadLoader(false);
  };
  return (
    <div>
      
      <Spin spinning={loadLoader} size="large" fullscreen />
      <div className="flex justify-end mb-4">
        <Button onClick={exportTodoc}>Export to Doc </Button>
      </div>
      {stateData.data.map((item) => {
        return (
          <div
            key={item['_id']}
            className="mb-6   border-2 border-solid border-[#e5d3d3]  rounded-lg"
          >
            <p className="font-bold border border-solid border-t-0 border-l-0 border-r-0 border-[#e3b4b4] px-5 py-4 flex justify-between flex-row">
              <div>{item['name']}</div>{' '}
              <EyeOutlined
                className="text-xl cursor-pointer"
                onClick={() => {
                  navigate(`/report/disclosures/${reportId}/${item['_id']}`);
                }}
              />
            </p>
            <p
              className="font-normal mt-4 px-5 pb-4"
              dangerouslySetInnerHTML={{ __html: item['content'] }}
            ></p>
          </div>
        );
      })}
    </div>
  );
};


