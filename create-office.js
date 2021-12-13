// wd create-entity create-office.js "Minister for X"
const fs = require('fs');
let rawmeta = fs.readFileSync('meta.json');
let meta = JSON.parse(rawmeta);

module.exports = (enlabel, kylabel) => {
  claims = {
    P31:   { value: 'Q294414' }, // instance of: public office
    P279:  { value: 'Q83307'  }, // subclas of: minister
    P17:   { value: meta.country ? meta.country.id : meta.jurisdiction.id },
    P1001: { value: meta.jurisdiction.id },
    P361: { // part of
      value: meta.cabinet.parent,
      references: { P854: meta.source.url },
    }
  }

  return {
    type: 'item',
    labels: {
      en: enlabel,
      ky: kylabel,
    },
    descriptions: {
      en: `cabinet position in ${meta.jurisdiction.name}`,
      ky: 'Кыргызстан',
    },
    claims: claims
  }
}
