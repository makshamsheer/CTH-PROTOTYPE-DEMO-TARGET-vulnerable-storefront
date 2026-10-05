'use strict';
// Behavioural tests that must keep passing after the fix (the "nothing broke" check runs `npm test`).
const assert = require('node:assert/strict');
const { renderGreeting, mergeSettings } = require('../src/lib');

const html = renderGreeting('Priya');
assert.ok(html.includes('Welcome, Priya!'), 'greets by name');
assert.ok(renderGreeting(undefined).includes('Welcome, guest!'), 'greets a guest');

const merged = mergeSettings({ currency: 'INR', features: { giftCards: true } });
assert.equal(merged.currency, 'INR', 'user currency wins');
assert.equal(merged.features.wishlist, true, 'defaults are kept');
assert.equal(merged.features.giftCards, true, 'user features are merged');
assert.equal(mergeSettings(undefined).currency, 'USD', 'no user settings keeps the defaults');

console.log('basic.test.js: 6 assertions passed');
