'use strict';
// CTH demo target. Deliberately vulnerable: see README.md.
const express = require('express');
const _ = require('lodash');
const { renderGreeting, mergeSettings } = require('./lib');

const app = express();
app.use(express.json());

app.get('/health', (_req, res) => res.json({ ok: true, lodash: _.VERSION }));

// Reflected XSS: the name is echoed into HTML without escaping.
app.get('/greet', (req, res) => {
  res.type('html').send(renderGreeting(req.query.name));
});

// Prototype-pollution sink: user JSON merged with lodash < 4.17.21 (CVE-2020-8203).
app.post('/settings', (req, res) => {
  res.json(mergeSettings(req.body));
});

if (require.main === module) {
  const port = Number(process.env.PORT || 3000);
  app.listen(port, () => console.log(`demo storefront listening on :${port}`));
}
module.exports = app;
