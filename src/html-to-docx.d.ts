declare module 'html-to-docx' {
    export default function htmlToDocx(
      html: string,
      options?: {
        orientation?: 'portrait' | 'landscape';
        margins?: {
          top?: number;
          right?: number;
          bottom?: number;
          left?: number;
        };
        title?: string;
        subject?: string;
        creator?: string;
        keywords?: string[];
        description?: string;
      }
    ): Promise<ArrayBuffer>;
  }
  