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

  // MAP props
  mapRef?: google.maps.Map | null;
  destinationHospital?: LatLngLiteral;
  setDestinationHospital?: (e: LatLngLiteral) => void;
}

interface BlogMetadata {
  title: string;
  description: string;
  image: string;
  date: string;
}

type Location = {
  // location: {
  latitude: number;
  longitude: number;
  // };
};

interface PositionError {
  code: number;
  message: string;
}

type MarkerType = {
  place_id: string;
  geometry: {
    location: google.maps.LatLngLiteral;
  };
  name: string;
  phone_number: string;
  website: string;
  icon: string;
};

type WeatherType = {
  temp: number;
  text: string;
};

type LatLngLiteral = google.maps.LatLngLiteral;
type DirectionsResult = google.maps.DirectionsResult;
type MapOptions = google.maps.MapOptions;
