const streetViewUrl = "https://www.google.com/maps/@?api=1&map_action=pano&pano=Ui22pjkXohwGgEOetazGMw&viewpoint=69.07701724540962%2C18.52321393000696&heading=346.15088&pitch=0&fov=80";

export default function StreetView() {
  return (
    <div className="address-panel">
      <span className="location-graphic-label" aria-hidden="true">ORRFUGLVEIEN</span>
      <strong aria-hidden="true">10</strong>
      <a
        className="map-open-link"
        href={streetViewUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Utforsk stedet i Google Street View (åpnes i ny fane)"
      >
        <span className="map-activation">Utforsk stedet i Google Maps</span>
      </a>
      <span className="image-caption">Illustrasjon · ikke fotografi</span>
    </div>
  );
}
