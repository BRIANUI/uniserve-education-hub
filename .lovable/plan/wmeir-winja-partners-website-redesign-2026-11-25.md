# Wmeir Winja & Partners website redesign

## Outcome

Replace the current Uniserv-branded import with a clear, trustworthy website for Wmeir Winja & Partners, using the company profile and the user’s confirmations.

## Pages and content

- **Home (`/`)** — Introduce the Kenya-based study-abroad agency, its Europe focus, key student services, and direct contact options.
- **Study destinations (`/destinations`)** — Focus on Denmark, Hungary, and Austria without inventing course fees, entry requirements, or visa outcomes.
- **Partner institutions (`/universities`)** — Replace the unrelated 260-school directory with the 11 confirmed active partners, grouped by country and institution type, with search, filters, and links to their official sites.
- **Student support (`/student-support`)** — Explain counselling, applications and document guidance, visa guidance, test/biometrics registration, travel coordination, pre-departure orientation, and post-admission support.
- **About (`/about`)** — Present the company’s mission, vision, values, Nairobi/Copenhagen presence, and student-focused approach.
- **Contact (`/contact`)** — Show the Nairobi office details, email, office line, and both mobile numbers approved by the user. Do not invent a Copenhagen street address.

Remove the unrelated Events content and change its navigation role to Student Support; this project is not published, so the unused Events URL does not need a redirect.

## Design direction

Use an editorial, people-first education consultancy style: a refined text wordmark (the PDF contains no usable company logo), semantic evergreen/coral/white tokens, clear serif headlines, and an original photo of an East African student planning overseas study with an adviser. Keep the header, navigation, pages, and contact links accessible and mobile-friendly.

## Content safeguards

- Do not publish the confidential bank details, tax PIN, registration number, or other financial identifiers.
- Omit dated “16 years” and “20 years” experience claims.
- Describe admissions, visa, and work-rule help as guidance, not guaranteed outcomes or legal decisions.
- Use only the confirmed partner names and the contact numbers the user approved.

## Technical details

- Keep each page in its own TanStack file route with page-specific metadata; update the root defaults to Wmeir Winja & Partners.
- Add a typed partner-institution data module, shared site header/footer, and the two new routes; remove the old Events route and replace its navigation entry.
- Replace the imported Uniserv theme tokens with semantic Wmeir tokens and use the project asset flow for the new hero image.
- Keep the site static: contact actions use phone and email links, with no fabricated form submission or backend.
- Update the route test and verify all pages, partner search/filter behavior, contact links, and mobile navigation on desktop and phone.