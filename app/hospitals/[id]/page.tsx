import SingleHospital from "@/components/SingleHospital";
import getHospital from "@/lib/getHospital";
import { Metadata } from "next";

type IndividualHospitalParams = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: IndividualHospitalParams): Promise<Metadata> {
  const hospitalData = getHospital(id);
  const hospital = await hospitalData;

  return {
    title: hospital?.name,
    description: `Your Pathway to Trusted Care Providers`,
  };
}

export default async function HospitalPage({
  params: { id },
}: IndividualHospitalParams) {
  const hospitalData = getHospital(id);
  const hospital = await hospitalData;
  console.log(hospital);
  return (
    <main className="px-8 sm:px-[9.5vw]">
        <SingleHospital hospital={hospital} />
      
    </main>
  );
}
