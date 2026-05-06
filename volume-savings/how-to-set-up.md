# Volume Savings — How to Set Up

Encourage buyers to add more units by showing quantity-based discount tiers right inside the checkout's Order Summary. Each tier maps to a Shopify Automatic Discount — buyers pick a tier, see the savings, and the discount applies automatically when the cart matches.

{% hint style="warning" %}
**Shopify Plus required.** Volume Savings displays directly inside the checkout page, which is only available on Shopify Plus.
{% endhint %}

---

## What it does

Volume Savings is a new offer type that displays a tiered discount widget under each matching cart line item at checkout. You control:

- **Which products** trigger the offer (all / specific / collections)
- **Tiers** — quantity threshold + discount type (percentage or fixed) + discount value
- **Title and badge text** — customizable per tier (e.g. "Buy 3", "Save 15%")
- **Style** — collapsed by default or expanded, badge color
- **Discount combinations, usage limits, schedule** — full Advance Settings

When a buyer's quantity crosses a tier threshold, Shopify applies the matching automatic discount at checkout — no code needed.

{% hint style="info" %}
**The widget is display-only.** Buyers see the tier list with prices and save badges, but they cannot change the cart quantity from the widget itself. They must adjust quantity in the cart or product page to actually trigger a tier.
{% endhint %}

---

## Step 1: Go to Offers → Create offer

In the app sidebar, click **Offers** → **Create offer**, then choose **Volume savings** from the offer type page.

{% embed url="https://d2798l25hiaz3h.cloudfront.net/VtsaPNMwihVJ.webp" %}

---

## Step 2: Select products (Step 1 in the editor)

Choose which products trigger this offer:

| Option | Behavior |
|---|---|
| **All products** | Widget renders under every cart line item |
| **Specific products** | Pick products via Shopify resource picker — only chosen products show the widget |
| **Products in selected collections** | Pick collections — any product belonging to a selected collection shows the widget |

{% embed url="https://d2798l25hiaz3h.cloudfront.net/M3YSKTPnNSvY.webp" %}

---

## Step 3: Configure discount tiers (Step 2 in the editor)

Each tier is one quantity threshold + discount.

### Tier fields

| Field | Description |
|---|---|
| **Minimum quantity** | The cart quantity that activates this tier |
| **Discount type** | No discount / Percentage / Fixed amount |
| **Value** | The discount amount (e.g. `15` for 15% off, or `5` for $5 off) |
| **Title** | Text shown next to the radio button — supports `{{quantity}}` placeholder (default: `Buy {{quantity}}`) |
| **Badge** | Optional chip text — supports `{{value}}` placeholder (default: `Save {{value}}`) |

### Tier navigation

- Tiers display as tabs: **Tier 1**, **Tier 2**, **Tier 3**, …
- Click **+ Add tier** to append a new tier (default: percentage 10%, increments by 5%)
- Once you have **6+ tiers**, the 5th tab becomes a dropdown overflow listing tier 5, 6, 7…
- Click the **trash icon** on a tier to remove it (the last remaining tier cannot be deleted)

### Auto-correct

If you set tier N's discount lower than tier N−1, the value auto-bumps to tier N−1's value to keep tiers ascending. The cascade also runs the other way — increasing tier N may push tier N+1, N+2 upward.

{% hint style="info" %}
**Why ascending?** Volume Savings only makes sense when a higher quantity earns a higher discount. The auto-correct enforces this so merchants don't accidentally publish a tier 3 worse than tier 2.
{% endhint %}

{% embed url="https://d2798l25hiaz3h.cloudfront.net/4bLMlAuwM8vY.webp" %}

---

## Step 4: Style (Advance Settings → Style tab)

| Setting | Description |
|---|---|
| **Title** | Heading shown above the tier list (default: `Buy more save more`) |
| **Collapse** | When **ON**, the widget renders as a single link "Buy more save more" — buyers click to expand the tier list. When **OFF**, the tier list shows immediately. |
| **Badge color** | Color for the save-badge chip — **Black** (default), **Red**, or **Grey** |

The live preview in the right sidebar updates as you edit — toggle Collapse to see the collapsed/expanded states instantly.

{% hint style="info" %}
**Color note:** For finer control over checkout colors (border, background), edit your Checkout theme in **Shopify Admin → Settings → Checkout → Customize**.
{% endhint %}

{% embed url="https://d2798l25hiaz3h.cloudfront.net/J4TUBJcTMPuK.webp" %}

---

## Step 5: Settings (Advance Settings → Settings tab)

### Discount combinations

Choose which other discounts can stack with this offer's tier discounts:

- Combine with **Product** discounts
- Combine with **Order** discounts
- Combine with **Shipping** discounts

### Pricing options

| Setting | Effect at checkout |
|---|---|
| **Show prices per item** | Display unit price (total ÷ quantity) instead of total tier price |
| **Show prices per item — text** | Suffix appended to per-item price (default: `/each`) |
| **Hide option's compare-at price** | When ON, hides the strikethrough original price |

### Maximum discount uses

| Setting | Effect |
|---|---|
| **Limit number of times discount can be used in total** | Cap the total redemptions across all customers |
| **Limit to one use per customer** | Each customer can use the discount only once |

### Schedule

Set **Start date** and optional **End date**. Tier discounts auto-activate at start and auto-expire at end.

{% embed url="https://d2798l25hiaz3h.cloudfront.net/rXmu4Mis9995.webp" %}

---

## Step 6: Preview and Save

- The right sidebar shows a **Live Preview** matching the checkout widget
- Click any tier radio in the preview to see the product price recalculate
- Click **Save**

{% embed url="https://d2798l25hiaz3h.cloudfront.net/TSrBTzDbsxlo.webp" %}

Behind the scenes, the app creates one **Shopify Automatic Discount** per tier — you can see them in **Shopify Admin → Discounts**.

{% hint style="warning" %}
**Don't manually edit the auto-created Shopify discounts.** They are managed by AOV.AI — any changes will be overwritten on next save. Edit the offer in AOV.AI instead.
{% endhint %}

---

## How it works at checkout

1. Buyer reaches the checkout page
2. The Volume Savings widget appears under each matching cart line item in the Order Summary sidebar
3. The widget pre-selects the tier matching the current cart quantity (highest tier whose quantity ≤ current qty)
4. Buyer can click another tier to preview that price (display only — does not change cart)
5. When the cart quantity actually reaches a tier threshold, the matching discount applies → discount line item appears in the order total

---

## Lifecycle

| Action in AOV.AI | Effect on Shopify discounts |
|---|---|
| Create offer (Active) | Creates one automatic discount per tier |
| Edit tiers | Updates / creates / deletes tier discounts to match |
| Toggle status to Inactive | Deactivates all tier discounts (kept for re-activation) |
| Toggle status to Active | Reactivates all tier discounts |
| Delete offer | Permanently deletes all tier discounts |

---

## FAQ

**Q: Why does my widget show but no discount applies?**
A: The widget is display-only. The tier discount applies only when the **actual cart quantity** matches a tier threshold. If the buyer is viewing tier 3 (Buy 3) but the cart has 1 unit, no discount applies.

**Q: Can I have more than 5 tiers?**
A: Yes — the editor supports 6+ tiers via a dropdown overflow on the 5th tab. There's no hard cap, but more than 5 tiers can clutter the checkout widget.

**Q: Can buyers change quantity from the widget?**
A: No. The widget shows tier prices and lets buyers preview savings, but doesn't include +/− quantity controls. Buyers adjust quantity in the cart or product page.

**Q: Does this work with multiple offers on the same product?**
A: When multiple Volume Savings offers match the same line item, the highest-priority offer wins. Adjust priority on the Offers list page.

**Q: What happens if a tier has discount type = No discount?**
A: The tier shows in the list (useful as a "base" tier like "Buy 1" with no discount), but no Shopify discount is created for it.

**Q: Can I use this on the product page or cart page?**
A: No. Volume Savings is checkout-only. For pre-checkout placement, use a separate quantity-discount app on the product page.

**Q: Why does my discount show in Shopify Discounts list?**
A: Volume Savings creates one **Shopify Automatic Discount** per tier so the platform can apply the discount at checkout. They are managed by AOV.AI — don't edit them manually.

**Q: Does this require Shopify Plus?**
A: Yes. Volume Savings displays directly on the checkout page, which is only available on Shopify Plus.
