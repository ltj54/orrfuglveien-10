import StreetView from "./StreetView";

const ownerTopics = [
  ["Kontakt", "Spørsmål om drift og vedlikehold."],
  ["Dokumenter", "Fellesdokumenter med dato og versjon."],
];

const saleTopics = [
  ["Sameieopplysninger", "Eiendommen og sameiets organisering."],
  ["Meglerkontakt", "Kontaktpunkt ved salg."],
  ["Dokumenter", "Dokumenter for offentlig deling."],
];

const anchors = {
  top: "#top",
  owners: "#eiere",
  sales: "#kjop-og-salg",
  contact: "#kontakt",
} as const;

function TopicList({ items }: Readonly<{ items: readonly (readonly string[])[] }>) {
  return <ul className="topic-list">{items.map(([title, description]) => <li key={title}><h3>{title}</h3><p>{description}</p></li>)}</ul>;
}

export default function Home() {
  return <>
    <header className="site-header">
      <a className="brand" href={anchors.top} aria-label="Orrfuglveien 10, til toppen"><span className="brand-mark">O<span>10</span></span><span>Orrfuglveien 10<small>Konseptskisse</small></span></a>
      <nav aria-label="Hovedmeny"><a href={anchors.owners}>For eiere</a><a href={anchors.sales}>Ved kjøp og salg</a><a href={anchors.contact}>Kontakt</a></nav>
    </header>
    <main id="top">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy"><p className="eyebrow">FOR EIERE, KJØPERE OG MEGLERE</p><h1 id="hero-title">Orrfuglveien <em>10.</em></h1><p className="lede">Kontakt, fellesdokumenter og opplysninger ved salg.</p><div className="hero-actions"><a className="button dark" href={anchors.owners}>For eiere</a><a className="button light" href={anchors.sales}>Ved kjøp og salg</a><a className="button light" href={anchors.contact}>Kontakt</a></div></div>
      </section>
      <section className="audience-section" id="eiere" aria-labelledby="owner-title"><div className="section-heading"><p className="eyebrow">FOR EIERE</p><h2 id="owner-title">Praktisk informasjon.</h2></div><TopicList items={ownerTopics} /></section>
      <section className="audience-section sale-section" id="kjop-og-salg" aria-labelledby="sale-title"><div className="section-heading"><p className="eyebrow">FOR KJØPERE OG MEGLERE</p><h2 id="sale-title">Opplysninger ved salg.</h2></div><TopicList items={saleTopics} /></section>
      <section className="registry-section" aria-labelledby="registry-title">
        <div><p className="eyebrow">OFFENTLIG REGISTER</p><h2 id="registry-title">Sameieopplysninger.</h2></div>
        <div className="registry-details">
          <dl><div><dt>Navn</dt><dd>Eierseksjonssameiet Orrfuglveien 10</dd></div><div><dt>Organisasjonsnummer</dt><dd>938 590 052</dd></div><div><dt>Organisasjonsform</dt><dd>Eierseksjonssameie</dd></div><div><dt>Forretningsadresse</dt><dd>Orrfuglveien 10A, 9325 Bardufoss</dd></div></dl>
        </div>
      </section>
      <section className="contact-section" id="kontakt" aria-labelledby="contact-title"><div className="contact-copy"><p className="eyebrow">KONTAKT</p><h2 id="contact-title">Kontaktinformasjon.</h2><div className="contact-placeholder"><span>Kontaktpunkt</span><strong>Ikke publisert</strong></div></div><div className="form-card"><h3>Kontaktskjema</h3><p>Skjemaet er deaktivert.</p><form aria-label="Deaktivert kontaktskjema"><label htmlFor="name">Navn</label><input id="name" name="name" type="text" disabled /><label htmlFor="email">E-post</label><input id="email" name="email" type="email" disabled /><label htmlFor="message">Melding</label><textarea id="message" name="message" rows={4} disabled /><button type="button" disabled>Send melding</button></form></div></section>
      <section className="location-section" aria-labelledby="location-title">
        <div className="location-copy"><p className="eyebrow">BELIGGENHET</p><h2 id="location-title">Finn fram.</h2><p>Orrfuglveien 10, 9325 Bardufoss</p><a className="map-link" href="https://www.google.com/maps/search/?api=1&amp;query=Orrfuglveien+10%2C+9325+Bardufoss" target="_blank" rel="noopener noreferrer">Se adressen i Google Maps</a></div>
        <StreetView />
      </section>
    </main><footer><span>Orrfuglveien 10</span><span>Uoffisiell konseptskisse. Registeropplysninger fra Brønnøysundregistrene; øvrig innhold avventer godkjenning.</span></footer>
  </>;
}
