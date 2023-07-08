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
  delivery_option: string;
  email_address: string;
  latitude: number;
  longitude: number;
  telephone: number;
  scope_of_services: string;
  website_address: string;
};

interface FormProps {
  user: string;
  name?: string;
  email: string;
  error: string;
  password: string;
  isUserLoggedIn: boolean;
  loading: boolean;
  setName?: (x: string) => void;
  setEmail?: (x: string) => void;
  setUser?: (x: string) => void;
  setPassword?: (x: string) => void;
  register?: (x: any) => void;
  signInWithGoogle?: (x: any) => void;
  login?: (x: any) => void;
  logOut?: (x: any) => void;
};

interface BlogMetadata {
  title: string;
  description: string;
  image: string;
  date: string;
}
