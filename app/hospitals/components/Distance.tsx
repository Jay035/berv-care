type Props = {
  leg: google.maps.DirectionsLeg;
};

export default function Distance({ leg }: Props) {
  console.log(leg);
  if (!leg.distance || !leg.duration) return null;

  return (
    <div>
      <p>
        This hospital is <span className="bold">{leg.distance.text}</span> away from your current
        location. That would take <span className="bold">{leg.duration.text} each direction</span>
      </p>
    </div>
  );
}
