declare module "react-markdown";
declare module "markdown-truncate";

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

interface GlobalProps {
  router?: any;
  user?: string;
  userAddress?: string;
  name?: string;
  email?: string | undefined;
  error: string;
  downloadCSVLink?: string;
  password?: string | undefined;
  isUserLoggedIn?: boolean;
  loading: boolean;
  locationCoord?: {
    loaded?: boolean;
    coordinates?: {
      latitude: number;
      longitude: number;
    };
    error?: {
      code: number;
      message: string;
    };
  };
  setName?: (x: string) => void;
  setEmail?: (x: string) => void;
  setUser?: (x: string) => void;
  setUserAddress?: (x: string) => void;
  setError?: (x: string) => void;
  setPassword?: (x: string) => void;
  setLoading?: (x: any) => void;
  setDownloadCSVLink?: (x: any) => void;
  setIsUserLoggedIn?: (x: any) => void;
  register?: (email: string, password: string) => void;
  signInWithGoogle?: (x: any) => void;
  login?: (email: string, password: string) => void;
  logOut?: (x: any) => void;
}

interface BlogMetadata {
  title: string;
  description: string;
  image: string;
  date: string;
}

interface Location {
  location: {
    latitude: number;
    longitude: number;
  };
}

interface PositionError {
  code: number;
  message: string;
}

type MarkerType = {
  id: string;
  geometry:{

    location: google.maps.LatLngLiteral;
  }
  name: string;
  phone_number: string;
  website: string;
}

type WeatherType = {
  temp: number;
  text: string;
};

 type MarkerType = {
  id: string;
  location: google.maps.LatLngLiteral;
  name: string;
  phone_number: string;
  website: string;
};