declare module 'bundle-text:*' {
  const value: string;
  export default value;
}
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.svg';
declare module '*.css';
declare global {
  var Intl: {
    supportedValuesOf(key: string): string[];
  };
}
