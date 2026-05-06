# Volume Savings

Encourage buyers to add more units by showing quantity-based discount tiers right inside the checkout's Order Summary. Each tier maps to a Shopify Automatic Discount.

{% hint style="warning" %}
**Shopify Plus required.** Volume Savings displays directly inside the checkout page, which is only available on Shopify Plus.
{% endhint %}

***

## What it does

Volume Savings is a new offer type that displays a tiered discount widget under each matching cart line item at checkout. Controls:

- Which products trigger the offer (all / specific / collections)
- Tiers — quantity threshold + discount type + discount value
- Title, badge text, badge color
- Style — collapsed by default or expanded
- Discount combinations, usage limits, schedule

{% hint style="info" %}
**The widget is display-only.** Buyers see tiers and savings but can't change cart quantity from the widget. They must adjust quantity in cart/product page to actually trigger the tier discount.
{% endhint %}

## Step 1: Go to Offers → Create offer

Click **Offers** → **Create offer** → select **Volume savings**.

{% embed url="https://d2798l25hiaz3h.cloudfront.net/VtsaPNMwihVJ.webp" %}

## Step 2: Select products

| Option | Behavior |
|---|---|
| **All products** | Widget renders under every cart line |
| **Specific products** | Only chosen products show the widget |
| **Products in selected collections** | Any product in a chosen collection |

{% embed url="https://d2798l25hiaz3h.cloudfront.net/M3YSKTPnNSvY.webp" %}

## Step 3: Configure tiers

Each tier has: **Minimum quantity**, **Discount type** (None / Percentage / Fixed), **Value**, **Title** (default `Buy {{quantity}}`), **Badge** (default `Save {{value}}`).

- Up to 5 tier tabs visible; 6+ tiers go into a dropdown overflow on the 5th tab
- Click **+ Add tier** to add, trash icon to remove (last tier can't be deleted)
- **Auto-correct**: tiers must have ascending discount values — setting a tier lower than the previous auto-bumps it; raising a tier cascades subsequent tiers upward

## Step 4: Style

| Setting | Description |
|---|---|
| **Title** | Heading (default `Buy more save more`) |
| **Collapse** | When ON, widget shows as a link until clicked |
| **Badge color** | Black / Red / Grey |

## Step 5: Settings

- **Discount combinations**: Combine with Product / Order / Shipping discounts
- **Pricing options**: Show price per item (with custom suffix), Hide compare-at price
- **Maximum discount uses**: total cap + once per customer
- **Schedule**: Start date / End date

## Step 6: Save

Save creates one **Shopify Automatic Discount** per tier — visible in **Shopify Admin → Discounts**.

{% hint style="warning" %}
**Don't manually edit the auto-created Shopify discounts.** They are managed by AOV.AI and overwritten on next save.
{% endhint %}

## How it works at checkout

1. Extension renders under each matching cart line in Order Summary
2. Pre-selects highest tier whose quantity ≤ current cart quantity
3. Buyer clicking another tier preview only — does NOT change cart
4. Discount applies when the actual cart quantity hits a tier threshold

## Lifecycle

| Action | Effect on Shopify discounts |
|---|---|
| Create (Active) | Creates one automatic discount per tier |
| Edit tiers | Updates / creates / deletes to match |
| Inactive | Deactivates all (kept) |
| Active | Reactivates |
| Delete | Permanently deletes all tier discounts |

## FAQ

**Q: Widget shows but no discount?** Widget is display-only. Discount applies only when actual cart qty hits a tier.
**Q: More than 5 tiers?** Yes — 6+ tiers use a dropdown overflow; no hard cap but >5 clutters the widget.
**Q: Buyers change qty from widget?** No — by design.
**Q: Multiple offers on same product?** Highest priority wins (Offers list page).
**Q: Tier with No discount?** Shows in the list but creates no Shopify discount (useful as base "Buy 1" tier).
**Q: Product / cart page support?** No — checkout only.
**Q: Why discounts in Shopify Discounts list?** One Automatic Basic Discount per tier so the platform applies it. Don't edit manually.
**Q: Shopify Plus required?** Yes — Volume Savings displays directly on the checkout page, which is only available on Shopify Plus.
