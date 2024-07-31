import './tiptap.css';

// import { Color } from '@tiptap/extension-color';
// import ListItem from '@tiptap/extension-list-item';
// import TextStyle from '@tiptap/extension-text-style';
import {
  // useEditor,
  EditorContent,
} from '@tiptap/react';
// import StarterKit from '@tiptap/starter-kit';
import { useEffect, useState } from 'react';
import { Button } from 'antd';
import { useEditorContext } from '@/context/tiptap_context';
// define your extension array
const MenuBar = ({ editor }: { editor: any }) => {
  const [, setEditorState] = useState (0); 
  useEffect(() => {
    if (!editor) return;

    const update = () => {
      setEditorState((prev) => prev + 1);
    };

    editor.on('transaction', update);

    return () => {
      editor.off('transaction', update);
    };
  }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <div className="control-group">
      <div className="button-group">
        <Button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          type={editor.isActive('bold') ? 'primary' : 'dashed'}
        >
          Bold
        </Button>

        <Button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          type={editor.isActive('italic') ? 'primary' : 'dashed'}
        >
          Italic
        </Button>

        <Button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          type={editor.isActive('strike') ? 'primary' : 'dashed'}
        >
          Strike
        </Button>

        <Button
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          type={editor.isActive('code') ? 'primary' : 'dashed'}
        >
          Code
        </Button>

        <Button
          onClick={() => editor.chain().focus().unsetAllMarks().run()}
          type={'dashed'}
        >
          Clear marks
        </Button>

        <Button
          onClick={() => editor.chain().focus().clearNodes().run()}
          type={'dashed'}
        >
          Clear nodes
        </Button>

        <Button
          onClick={() => editor.chain().focus().setParagraph().run()}
          type={editor.isActive('paragraph') ? 'primary' : 'dashed'}
        >
          Paragraph
        </Button>

        <Button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          type={editor.isActive('heading', { level: 1 }) ? 'primary' : 'dashed'}
        >
          H1
        </Button>

        <Button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          type={editor.isActive('heading', { level: 2 }) ? 'primary' : 'dashed'}
        >
          H2
        </Button>

        <Button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          type={editor.isActive('heading', { level: 3 }) ? 'primary' : 'dashed'}
        >
          H3
        </Button>

        <Button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 4 }).run()
          }
          type={editor.isActive('heading', { level: 4 }) ? 'primary' : 'dashed'}
        >
          H4
        </Button>

        <Button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 5 }).run()
          }
          type={editor.isActive('heading', { level: 5 }) ? 'primary' : 'dashed'}
        >
          H5
        </Button>

        <Button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 6 }).run()
          }
          type={editor.isActive('heading', { level: 6 }) ? 'primary' : 'dashed'}
        >
          H6
        </Button>

        <Button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          type={editor.isActive('bulletList') ? 'primary' : 'dashed'}
        >
          Bullet list
        </Button>

        <Button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          type={editor.isActive('orderedList') ? 'primary' : 'dashed'}
        >
          Ordered list
        </Button>

        <Button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          type={editor.isActive('codeBlock') ? 'primary' : 'dashed'}
        >
          Code block
        </Button>

        <Button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          type={editor.isActive('blockquote') ? 'primary' : 'dashed'}
        >
          Blockquote
        </Button>

        <Button
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          type={'dashed'}
        >
          Horizontal rule
        </Button>

        <Button
          onClick={() => editor.chain().focus().setHardBreak().run()}
          type={'dashed'}
        >
          Horizontal rule
        </Button>

        <Button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
          type={'dashed'}
        >
          Undo
        </Button>

        <Button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
          type={'dashed'}
        >
          Redo
        </Button>

        <Button
          onClick={() => editor.chain().focus().setColor('#958DF1').run()}
          type={editor.isActive('textStyle', { color: '#958DF1' }) ? 'primary' : 'dashed'}
          style={{backgroundColor: editor.isActive('textStyle', { color: '#958DF1' })
          ? '#958DF1'
          : 'white'}}
        >
          Purple
        </Button>

      </div>
    </div>
  );
};

// const extensions = [
//   Color.configure({ types: [TextStyle.name, ListItem.name] }),
//   TextStyle.configure({  }), //types: [ListItem.name]
//   StarterKit.configure({
//     bulletList: {
//       keepMarks: true,
//       keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
//     },
//     orderedList: {
//       keepMarks: true,
//       keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
//     },
//   }),
// ];

interface IPropsTiptap {
  content: string;
}
export const Tiptap = ({ content }: IPropsTiptap) => {
  const editor =useEditorContext();
  // const editor = useEditor({
  //   extensions,
  //   content,
  //   editorProps: {
  //     attributes: {
  //       autocomplete: 'off',
  //       autocorrect: 'off',
  //       autocapitalize: 'off',
  //       class: 'min-h-full',
  //       spellcheck: 'false',
  //       tabindex: '0',
  //     },
  //   },
  // });

  useEffect(() => {
    if (editor) {
      editor.commands.setContent(content);
    }
  }, [content,editor]);

  
  

  return (
    <> 
      <MenuBar editor={editor} /> 
      <EditorContent editor={editor} />

      {/* <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu>
      <BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu> */}
    </>
  );
};
