"use client";

import { useState } from "react";

const streetViewUrl = "https://www.google.com/maps/embed?pb=!4v1793787924927!6m8!1m7!1sUi22pjkXohwGgEOetazGMw!2m2!1d69.07701724540962!2d18.52321393000696!3f346.15088!4f0!5f0.7820865974627469";

export default function StreetView() {
  const [isInteractive, setIsInteractive] = useState(false);

  return (
    <div className={`address-panel${isInteractive ? " is-interactive" : ""}`}>
      <iframe
        title="Street View ved Orrfuglveien 10"
        src={streetViewUrl}
        loading="lazy"
        allowFullScreen={isInteractive}
        referrerPolicy="strict-origin-when-cross-origin"
        inert={!isInteractive}
      />
      <button
        className="map-activation"
        type="button"
        aria-pressed={isInteractive}
        onClick={() => setIsInteractive((active) => !active)}
      >
        {isInteractive ? "Avslutt kartvisning" : "Utforsk stedet"}
      </button>
      <span className="image-caption">Ved Orrfuglveien 10 · Google Street View, juli 2025</span>
    </div>
  );
}
