import {
  Document,
  INumberingOptions,
  ISectionOptions,
  Packer,
  SectionType,
} from 'docx';
import {Node as ProsemirrorNode} from 'prosemirror-model';
import {IFootnotes} from './types';

export function createShortId() {
  return Math.random().toString(36).substr(2, 9);
}

export function createDocFromState(state: {
  numbering: INumberingOptions['config'];
  children: ISectionOptions['children'];
  footnotes?: IFootnotes;
}) {
  const doc = new Document({
    footnotes: state.footnotes,
    numbering: {
      config: state.numbering,
    },
    sections: [
      {
        properties: {
          type: SectionType.CONTINUOUS,
        },
        children: state.children,
      },
    ],
    styles: {
      default: {
        document: {
          run: {
            size: '12pt',
            font: 'Calibri',
          },
        },
        heading1: {
          run: {
            size: 56,
            bold: true,
          },
          paragraph: {
            spacing: {
              before: 120,
              after: 120,
            },
          },
        },
        heading2: {
          run: {
            size: 44,
            bold: true,
          },
          paragraph: {
            spacing: {
              before: 120,
              after: 120,
            },
          },
        },
        heading3: {
          run: {
            size: 36,
            bold: true,
          },
          paragraph: {
            spacing: {
              before: 120,
              after: 120,
            },
          },
        },
      },
    },
  });
  return doc;
}

export async function writeDocx(
  doc: Document,
  write: ((buffer: Buffer) => void) | ((buffer: Buffer) => Promise<void>)
) {
  const buffer = await Packer.toBuffer(doc);
  return write(buffer);
}

export function getLatexFromNode(node: ProsemirrorNode): string {
  let math = '';
  node.forEach((child) => {
    if (child.isText) math += child.text;
    // TODO: improve this as we may have other things in the future
  });
  return math;
}
