import EditorTiptapContext from '@/context/tiptap_context';
import './tiptap.css';
import { Color } from '@tiptap/extension-color';
import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';
import {
  useEditor,
} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { ReactNode } from 'react';
// define your extension array

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({  }), //types: [ListItem.name]
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
];

interface ItiptapWrapContent{
  children:ReactNode
}


export const TiptapWrapContext = ({children}:ItiptapWrapContent) => {
  const editor = useEditor({
    extensions,
    editorProps: {
      attributes: {
        autocomplete: 'off',
        autocorrect: 'off',
        autocapitalize: 'off',
        class: 'min-h-full',
        spellcheck: 'false',
        tabindex: '0',
      },
    },
  });

  

  return (
    <> 
      <EditorTiptapContext.Provider value={editor}>

        {children}
      </EditorTiptapContext.Provider>
    </>
  );
};
