# CTH prototype demo target: vulnerable storefront

**This repository exists only as a remediation target for the CTH Secure Remediation Shell prototype.** It is deliberately
vulnerable. Do not deploy it. Issues planted on purpose:

1. `lodash` pinned to 4.17.15 (prototype pollution, CVE-2020-8203; command injection in `template`, CVE-2021-23337).
2. A reflected XSS in `src/server.js` (`/greet?name=` is echoed into HTML unescaped).

The CTH shell is expected to fix these on a branch and hand back a draft pull request; the default branch is never
written to by CTH.

Run: `npm install && npm test && npm start`
