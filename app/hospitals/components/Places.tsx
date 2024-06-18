"use client";

import { useGlobalProvider } from "@/context/GlobalProvider";
// import {
//   Combobox,
//   ComboboxInput,
//   ComboboxList,
//   ComboboxOption,
//   ComboboxPopover,
// } from "@reach/combobox";
// import '@reach/combobox/styles.css';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import Select from "react-select";

type PlacesProps = {
  destination: LatLngLiteral;
  setDestinationHospital: (position: LatLngLiteral) => void;
};

interface PlaceOption {
  label: string;
  value: string;
}

interface PlaceSuggestion {
  description: string;
}

export default function Places({
  setDestinationHospital,
  destination,
}: PlacesProps) {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      types: ["hospital", "pharmacy", "physiotherapist", "veterinary_care"],
    },
  });

  const handleSelect = async (selectedOption: PlaceOption | null) => {
    if (selectedOption) {
      setValue(selectedOption.value, false);
      clearSuggestions()
      try {
        const results = await getGeocode({ address: selectedOption.value });
        console.log(selectedOption.value)
        const { lat, lng } = await getLatLng(results[0]);
        setDestinationHospital({ lat, lng });
      } catch (error) {
        console.error("Error: ", error);
      }
    }
  };

  const options: PlaceOption[] = data.map((suggestion: PlaceSuggestion) => ({
    label: suggestion.description,
    value: suggestion.description,
  }));

  return (
    <Select
      options={options}
      onInputChange={(inputValue) => setValue(inputValue)}
      onChange={handleSelect}
      placeholder="Search hospital..."
      isDisabled={!ready}
    />
      );
}
