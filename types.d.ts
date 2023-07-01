declare module '@editorjs/paragraph';
declare module '@editorjs/image';
declare module '@editorjs/link';
declare module '@editorjs/quote';
declare module '@editorjs/raw';
declare module '@editorjs/table';

type HospitalProps = {
  id: number;
  name: string;
  location: string;
  address: string;
  tier_id: number;
  type_id: number;
  state: {
    id: number;
    name: string;
  };
  products: {
    0: string;
  };
};

type FormProps = {
  name?: string;
  email: string;
  password: string;
  setName?: (x: string) => void;
  setEmail?: (x: string) => void;
  setPassword?: (x: string) => void;
  register?: (x: any) => void;
  signInWithGoogle?: (x: any) => void;
  login?: (x: any) => void;
};

interface BlogMetadata {
  title: string;
  description: string;
  image: string;
  date: string;
}
