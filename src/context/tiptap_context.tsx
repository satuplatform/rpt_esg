import { Editor } from '@tiptap/react';
import  { createContext, useContext, } from 'react';

const EditorTiptapContext = createContext<Editor|null>(null);

export const useEditorContext = () => {
  return useContext(EditorTiptapContext);
};
export default EditorTiptapContext;