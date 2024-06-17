"use client"

import { useGlobalProvider } from "@/context/GlobalProvider";
import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover,
} from "@reach/combobox";
import '@reach/combobox/styles.css';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

type PlacesProps = {
  destination: LatLngLiteral
  setDestinationHospital: (position: LatLngLiteral) => void;
};

export default function Places(
  { setDestinationHospital, destination }: PlacesProps
) {
  // const { destinationHospital, setDestinationHospital} = useGlobalProvider()
  
  
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({requestOptions: {
    types: ['hospital', 'pharmacy', 'physiotherapist', 'veterinary_care']
  }});

  // console.log(status, data)

  const handleSubmit = async (val: string) => {
    setValue(val, false);
    clearSuggestions();

    const results = await getGeocode({ address: val });
    const { lat, lng } = await getLatLng(results[0]);
    setDestinationHospital?.({ lat, lng });
    console.log({ lat, lng }, destination)
  };

  return (
    <Combobox onSelect={handleSubmit}>
      <ComboboxInput
        value={value}
        disabled={!ready}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search hospital..."
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data?.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
}
