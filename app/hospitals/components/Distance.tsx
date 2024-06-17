
type Props = {
    leg: google.maps.DirectionsLeg
}

export default function Distance({leg}: Props) {
    console.log(leg)
  return (
    <div>Distance</div>
  )
}