import getHospital from "@/lib/getHospital"
import { Metadata } from "next"

type IndividualHospitalParams = {
    params: {
        id: string
    }
}

export async function generateMetadata({params: {id}} : IndividualHospitalParams): Promise<Metadata>{
    const hospitalData = getHospital(id)
    const hospitals = await hospitalData;

    return{
        title: hospitals?.name,
        description: `Your Pathway to Trusted Care Providers`
    }
}

export default function HospitalPage({params: {id}} : IndividualHospitalParams) {
    const hospitalData = getHospital(id)
  return (
    <div>page {id}</div>
  )
}
