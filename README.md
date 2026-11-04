# Orrfuglveien 10 – konseptskisse

Uforpliktende, offentlig forhåndsvisning for Eierseksjonssameiet Orrfuglveien 10. Siden er tenkt primært for eiere samt potensielle kjøpere og meglere. Skissen viser en mulig informasjonsstruktur, ikke godkjent informasjon fra sameiet.

## Lokalt

Krever Node.js 22 og npm. Kjør `npm ci`, deretter `npm run dev`. Kjør `npm run lint` og `npm run build` før publisering. `src/app/` inneholder siden og CSS; `.github/workflows/pages.yml` bygger statisk eksport for GitHub Pages.

## Publisering

Repository: https://github.com/ltj54/orrfuglveien-10
Forhåndsvisning: https://ltj54.github.io/orrfuglveien-10/

Første kontrollerte commit og push setter opp GitHub Pages. Senere lokale endringer publiseres **ikke** før Lars uttrykkelig ber om ny commit og push. `npm run dev` og `npm run build` publiserer ingenting.

Ingen bilder, sameiedokumenter, domene, innlogging, e-postmottaker eller skjematjeneste er koblet til. Kontaktskjemaet kan ikke sende. Kravspesifikasjon og internt avtaleutkast ligger bare lokalt og er utelatt fra offentlig Git-repository.
