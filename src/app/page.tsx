const ownerTopics = [
  ["Kontakt og henvendelser", "Riktig kontaktpunkt for spørsmål om drift, vedlikehold og forvaltning."],
  ["Praktisk informasjon", "Husordensregler og annen informasjon sameiet ønsker at eierne skal finne raskt."],
  ["Dokumenter", "Godkjente fellesdokumenter samlet på ett sted, med tydelig dato og versjon."],
];

const saleTopics = [
  ["Fakta om sameiet", "En kort, kontrollert beskrivelse av eiendommen og hvordan sameiet er organisert."],
  ["Ved salg", "En oversikt over hvilke opplysninger megler skal hente, og hvem som kan utlevere dem."],
  ["Dokumentasjon", "Lenker til dokumenter som faktisk kan deles offentlig. Øvrig materiale håndteres av forvalter."],
];

function TopicList({ items }: { items: string[][] }) {
  return <ul className="topic-list">{items.map(([title, description]) => <li key={title}><h3>{title}</h3><p>{description}</p></li>)}</ul>;
}

export default function Home() {
  return <>
    <div className="preview-strip">Konseptskisse · Ikke sameiets offisielle nettside · Innhold må godkjennes</div>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Orrfuglveien 10, til toppen"><span className="brand-mark">O<span>10</span></span><span>Orrfuglveien 10<small>Eierseksjonssameiet</small></span></a>
      <nav aria-label="Hovedmeny"><a href="#eiere">For eiere</a><a href="#kjop-og-salg">Ved kjøp og salg</a><a href="#kontakt">Kontakt</a></nav>
    </header>
    <main id="top">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy"><p className="eyebrow">ET STED Å FINNE FRAM</p><h1 id="hero-title">Det du trenger om <em>Orrfuglveien 10.</em></h1><p className="lede">En enkel inngang til informasjon om sameiet – for dem som eier her, og for dem som trenger opplysninger i forbindelse med et salg.</p><div className="hero-actions"><a className="button dark" href="#eiere">Jeg er eier <span aria-hidden="true">↗</span></a><a className="button light" href="#kjop-og-salg">Jeg er kjøper eller megler <span aria-hidden="true">↗</span></a></div></div>
        <div className="address-panel" aria-label="Typografisk konseptmotiv for Orrfuglveien 10"><span className="panel-top">ORRFUGLVEIEN</span><strong>10</strong><span className="panel-bottom">Informasjon om sameiet</span></div>
      </section>
      <section className="intro-note" aria-label="Om skissen"><span>Idéen bak siden</span><p>De som bor her, og de som vurderer å kjøpe, leter etter ulike ting. Derfor har skissen to innganger. Hva som faktisk skal publiseres, bestemmer sameiet og forvalter.</p></section>
      <section className="audience-section" id="eiere" aria-labelledby="owner-title"><div className="section-heading"><p className="eyebrow">FOR EIERE</p><h2 id="owner-title">Svar på de praktiske spørsmålene.</h2><p>Kontaktvei og godkjent fellesinformasjon bør være lett å finne – også fra mobilen.</p></div><TopicList items={ownerTopics} /><p className="section-caveat">Eksemplene over viser mulig innhold. Ingen dokumenter eller opplysninger er lagt ut i denne skissen.</p></section>
      <section className="audience-section sale-section" id="kjop-og-salg" aria-labelledby="sale-title"><div className="section-heading"><p className="eyebrow">FOR KJØPERE OG MEGLERE</p><h2 id="sale-title">Finn ut hvor opplysningene hentes.</h2><p>En megler eller interessent bør raskt forstå hva som er offentlig, og hvem som svarer på spørsmål om sameiet.</p></div><TopicList items={saleTopics} /><p className="section-caveat">Personopplysninger og dokumenter med begrenset tilgang skal ikke legges åpent ut. En eventuell eierinnlogging må avklares separat.</p></section>
      <section className="decision-band" aria-labelledby="decision-title"><div><p className="eyebrow">FØR SIDEN TAS I BRUK</p><h2 id="decision-title">Hva skal være åpent for alle?</h2></div><p>Det er det viktigste valget. En offentlig side kan gi oversikt og kontaktvei. Dokumenter for bare eiere bør enten håndteres gjennom en eksisterende løsning eller vurderes som et eget, tilgangsstyrt prosjekt.</p></section>
      <section className="contact-section" id="kontakt" aria-labelledby="contact-title"><div className="contact-copy"><p className="eyebrow">KONTAKT</p><h2 id="contact-title">Riktig spørsmål til riktig sted.</h2><p>Her kan sameiet senere vise hvem eiere, meglere og andre skal kontakte. Navn, adresse og rutine må godkjennes før publisering.</p><div className="contact-placeholder"><span>Kontaktinformasjon</span><strong>Avklares med sameiet og forvalter</strong></div></div><div className="form-card"><h3>Din melding</h3><p>Skjemaet er en forhåndsvisning og sender ikke meldinger.</p><form aria-label="Demonstrasjon av kontaktskjema"><label htmlFor="name">Navn</label><input id="name" name="name" type="text" placeholder="Hva heter du?" autoComplete="name" /><label htmlFor="email">E-post</label><input id="email" name="email" type="email" placeholder="din@epost.no" autoComplete="email" /><label htmlFor="message">Melding</label><textarea id="message" name="message" placeholder="Skriv meldingen din her …" rows={4} /><button type="button" disabled>Send melding</button><small>Skjemaet åpnes først når kontakttjeneste, mottaker og personvern er avklart.</small></form></div></section>
    </main><footer><span>Orrfuglveien 10</span><span>Konseptskisse – ikke publisert på vegne av sameiet</span></footer>
  </>;
}
