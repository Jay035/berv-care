// Types

const PLACE_RADIUS = 2500; // 2500 meters
const TYPE = 'hospital';

export const fetchNearbyPlaces = async (lat: number, lng: number): Promise<MarkerType[]> => {
  const response = await fetch(
    `https://trueway-places.p.rapidapi.com/FindPlacesNearby?location=${lat}%2C${lng}&language=en&radius=${PLACE_RADIUS}&type=${TYPE}`,
    {
      method: 'GET',
      headers: {
        'x-rapidapi-key': process.env.NEXT_PUBLIC_X_RapidAPI_Key!,
        'x-rapidapi-host': 'trueway-places.p.rapidapi.com'
      }
    }
  );

  if (!response.ok) {
    throw new Error('Oh no! Something messed up!');
  }

  const data = await response.json();
  console.log(data)
  return data.results;
};

export const fetchWeather = async (marker: MarkerType): Promise<WeatherType> => {
  const response = await fetch(
    `https://yahoo-weather5.p.rapidapi.com/weather?lat=${marker.geometry.location.lat}&long=${marker.geometry.location.lng}&format=json&u=c`,
    {
      method: 'GET',
      headers: {
        'x-rapidapi-key': process.env.NEXT_PUBLIC_X_RapidAPI_Key!,
        'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
      }
    }
  );

  if (!response.ok) {
    throw new Error('Oh no! Something messed up!');
  }

  const data = await response.json();

  return {
    temp: data.current_observation.condition.temperature,
    text: data.current_observation.condition.text
  };
};