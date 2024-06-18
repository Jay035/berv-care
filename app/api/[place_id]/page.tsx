
type IndividualHospitalParams = {
    params: {
      place_id: string;
    };
  };

export default function page({
    params: { place_id },
  }: IndividualHospitalParams) {
  return (
    <div>hospital {place_id}</div>
  )
}