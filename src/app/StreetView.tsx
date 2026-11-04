const streetViewEmbedUrl = "https://www.google.com/maps/embed?pb=!4v1793787924927!6m8!1m7!1sUi22pjkXohwGgEOetazGMw!2m2!1d69.07701724540962!2d18.52321393000696!3f346.15088!4f0!5f0.7820865974627469";
const streetViewUrl = "https://www.google.com/maps/@?api=1&map_action=pano&pano=Ui22pjkXohwGgEOetazGMw&viewpoint=69.07701724540962%2C18.52321393000696&heading=346.15088&pitch=0&fov=80";

export default function StreetView() {
  return (
    <div className="address-panel">
      <iframe
        title="Forhåndsvisning av Street View ved Orrfuglveien 10"
        src={streetViewEmbedUrl}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        inert
      />
      <a
        className="map-open-link"
        href={streetViewUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Utforsk stedet i Google Street View (åpnes i ny fane)"
      >
        <span className="map-activation">Utforsk stedet i Google Maps</span>
      </a>
      <span className="image-caption">Ved Orrfuglveien 10 · Google Street View, juli 2025</span>
    </div>
  );
}
