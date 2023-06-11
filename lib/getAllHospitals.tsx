
export default async function getAllHospitals() {
  const res = await fetch("https://api.reliancehmo.com/v3/providers");
  console.log(res);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
