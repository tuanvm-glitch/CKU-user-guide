#!/usr/bin/env node
// One-shot: generate a "Checkout Validations" feature image at the same
// 1600x896 size/style as the upsell mockup the user shared, via OpenAI
// gpt-image-1.5 text-to-image. Saves PNG next to this script.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Buffer } from 'node:buffer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ENV_PATH = '/Users/vumanhtuan/brain/.env';

if (!process.env.OPENAI_API_KEY && fs.existsSync(ENV_PATH)) {
  for (const line of fs.readFileSync(ENV_PATH, 'utf8').split('\n')) {
    const m = line.match(/^OPENAI_API_KEY="?([^"\n]+)"?$/);
    if (m) { process.env.OPENAI_API_KEY = m[1]; break; }
  }
}
if (!process.env.OPENAI_API_KEY) throw new Error('OPENAI_API_KEY missing');

const prompt = `
A clean, modern Shopify checkout page mockup illustration, flat design, soft shadows,
on a light gray (#F4F6F8) background with a single white rounded card filling most of the frame.
Aspect ratio 16:9, wide landscape.

Layout (three columns, equal vertical alignment):

LEFT COLUMN (≈30% width) — checkout form skeleton:
- Top-left: a small mint-green shopping bag icon next to bold black text "YourStore".
- Below: large bold black heading "Checkout".
- Breadcrumb on one row: "Information" in green > "Shipping" in gray > "Payment" in gray, with chevron separators.
- Person icon, then a gray placeholder bar.
- An "Email address" input field (rounded, gray border).
- A small green checkbox (filled) with text "Email me with news and offers".
- Pin icon and a gray placeholder bar.
- Two short input fields side by side, then one full-width input, then two more inputs side-by-side (one with a dropdown chevron).
- A full-width solid green CTA button at the bottom with a gray placeholder bar inside (no visible text).

CENTER COLUMN (≈40% width) — THE HERO: a tall card with a 2px AMBER/ORANGE border (#F59E0B) and very light cream background (#FFFBEB), rounded corners, generous padding.
- Top: a circular amber outline icon containing a shield-with-checkmark symbol, next to bold amber heading "Smart checkout rules".
- Subheading in dark gray, smaller: "Block invalid orders before checkout".
- Below: THREE stacked rule rows (full width, separated by thin dividers), each row contains:
    Row 1: a green filled circle with white check, bold "Minimum order $100", small muted text "Cart total rule · Active", a small green pill "Passed".
    Row 2: a red filled circle with white X, bold "Max 2 items per customer", small muted text "Quantity rule · Active", a small red pill "Blocked".
    Row 3: an amber filled circle with white exclamation, bold "Ships to your region", small muted text "Geo rule · Active", a small amber pill "Review".
- Bottom: a full-width solid amber/orange button (#F59E0B) with white bold text "Review your cart" — taller, prominent.

RIGHT COLUMN (≈25% width) — Order summary card:
- Cart icon next to bold black "Order summary".
- Three product rows: small rounded thumbnail (bed, round wooden table, orange round table), gray placeholder bar, price right-aligned ($120.00, $45.00, $25.00).
- Thin divider.
- "Subtotal" left, "$190.00" right.
- "Shipping" left, "$10.00" right.
- Bold "Total" left, bold green "$200.00" right.
- A solid dark navy/black rounded button with white bold text "Pay now".

Style notes:
- Clean SaaS marketing illustration, flat vector, no photo realism.
- Soft drop shadow under each card.
- Crisp legible sans-serif typography.
- Plenty of whitespace, balanced composition.
- Color hierarchy: amber/orange is the dominant accent for the validation card (mirrors but contrasts the green upsell variant).
- No watermarks, no extra logos, no extraneous text outside what's specified.
`.trim();

const outFile = path.join(__dirname, 'feature-image.png');
fs.writeFileSync(outFile.replace(/\.png$/, '.prompt.txt'), prompt);

console.log('▶ generating checkout-validations feature image…');
console.log(`  size: 1536x1024 (gpt-image landscape)`);
console.log(`  prompt chars: ${prompt.length}`);

const res = await fetch('https://api.openai.com/v1/images/generations', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: process.env.IMAGE_MODEL || 'gpt-image-1.5',
    prompt,
    size: '1536x1024',
    quality: 'high',
    background: 'opaque',
    n: 1,
  }),
});

if (!res.ok) {
  console.error(`✗ ${res.status} ${await res.text()}`);
  process.exit(1);
}

const j = await res.json();
const b64 = j?.data?.[0]?.b64_json;
if (!b64) {
  console.error('✗ no image in response', JSON.stringify(j).slice(0, 400));
  process.exit(1);
}

fs.writeFileSync(outFile, Buffer.from(b64, 'base64'));
console.log(`✓ saved ${(fs.statSync(outFile).size / 1024).toFixed(0)} KB → ${outFile}`);
