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

  // console.log(status, data)

  // const handleSubmit = async (val: string) => {
  //   setValue(val, false);
  //   clearSuggestions();

  //   const results = await getGeocode({ address: val });
  //   const { lat, lng } = await getLatLng(results[0]);
  //   setDestinationHospital?.({ lat, lng });
  //   console.log({ lat, lng });
  // };

  return (
    <Select
      options={options}
      onInputChange={(inputValue) => setValue(inputValue)}
      onChange={handleSelect}
      placeholder="Search hospital..."
      isDisabled={!ready}
    />
    // <Combobox onSelect={handleSubmit}>
    //   <ComboboxInput
    //     value={value}
    //     disabled={!ready}
    //     onChange={(e) => setValue(e.target.value)}
    //     placeholder="Search hospital..."
    //   />
    //   <ComboboxPopover>
    //     <ComboboxList>
    //       {status === "OK" &&
    //         data?.map(({ place_id, description }) => (
    //           <ComboboxOption key={place_id} value={description} />
    //         ))}
    //     </ComboboxList>
    //   </ComboboxPopover>
    // </Combobox>
  );
}
