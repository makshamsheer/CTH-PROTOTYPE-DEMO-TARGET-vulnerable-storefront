'use strict';
const _ = require('lodash');

const DEFAULT_SETTINGS = { currency: 'USD', locale: 'en-IN', features: { wishlist: true } };

function renderGreeting(name) {
  const who = name === undefined ? 'guest' : String(name);
  return `<!doctype html><html><body><h1>Welcome, ${who}!</h1><p>Thanks for visiting the storefront.</p></body></html>`;
}

function mergeSettings(userSettings) {
  return _.merge({}, DEFAULT_SETTINGS, userSettings || {});
}

module.exports = { renderGreeting, mergeSettings, DEFAULT_SETTINGS };
