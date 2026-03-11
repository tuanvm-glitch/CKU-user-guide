# What Buyers See at Checkout

## Upsell block placement

Place the block in Shopify's **Theme Editor**:

| Location | Description |
|----------|-------------|
| **Main checkout column (left)** | Inline between checkout sections — maximum visibility |
| **Order summary sidebar (right)** | Alongside order summary — block auto-adapts to narrower width |

---

## Product card anatomy

Each product in the upsell block shows:

| Element | Description |
|---------|-------------|
| **Thumbnail** | Product image with quantity badge overlay |
| **Name** | Original name or custom title (if set by merchant) |
| **Price** | ~~Original~~ strikethrough + discounted price (if discount set), or regular price |
| **Variant selector** | Dropdown (if "Show variant picker" is on and product has multiple variants) |
| **Quantity stepper** | +/− buttons (if "Show quantity selector" is on) |
| **Add button** | In your store's brand color |

Multiple products appear in a vertical scrollable area (max ~480px height).

---

## Add to order flow

| Step | What happens |
|------|-------------|
| **Default** | Product card with "Add" button |
| **Select variant** | Price and image update instantly |
| **Change quantity** | Updates via +/− (min 1) |
| **Click Add** | Loading spinner → cart line added |
| **Success** | Product **disappears** from upsell block |
| **Discount** | Applied automatically — buyer sees discounted total |

{% hint style="info" %}
Discounts use Shopify's Discount Code system automatically. Buyers don't enter any code.
{% endhint %}

---

## Offer selection logic

1. Extension reads all **active** offers from store metafield
2. Each offer's trigger conditions evaluated against cart
3. Highest-priority matching offer selected
4. That offer's products displayed
5. If **no match** — block is completely hidden

---

## Edge cases

| Scenario | Behavior |
|----------|----------|
| No offers match | Block hidden — checkout works normally |
| Product already in cart | Hidden if "Hide items already in order" is on |
| All products in cart | Entire block hidden (if hide-items enabled) |
| Variant out of stock | Variant disabled in dropdown; other variants selectable |
| Extension error | Checkout continues normally — block doesn't appear |
| Guest checkout | Customer tag conditions skipped (fail-open) |
| Buyer added the upsell product | Product disappears from block |
| Discount conflict (no stacking) | Shopify keeps discount that saves buyer more |
