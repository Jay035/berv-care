type Props = {
  leg: google.maps.DirectionsLeg;
};

export default function Distance({ leg }: Props) {
  if (!leg.distance || !leg.duration) return null;

  return (
    <div className="mt-2">
      <p>
        This hospital is <span className="font-bold">{leg.distance.text}</span> away from your current
        location. That would take <span className="font-bold">{leg.duration.text} by driving</span>
      </p>
    </div>
  );
}
