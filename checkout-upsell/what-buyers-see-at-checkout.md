# What Buyers See at Checkout

## Upsell block placement

The upsell block appears at the position you set in Shopify's Theme Editor. There are two options:

- **Main checkout column (left)** — Displayed inline within the checkout flow, between existing sections (e.g., after Shipping method)
- **Order summary sidebar (right)** — Displayed in the order summary panel; the block adapts to the narrower width automatically

## What the block shows

Each product in the offer is displayed as a card with:

- Product thumbnail
- Product name
- Price — original price with strikethrough + discounted price (if a discount is set)
- **Add** button (in your store's brand color)
- Variant selector dropdown (if the product has multiple variants)
- Quantity stepper +/− (if "Show quantity selector" is enabled)

The block also shows the **Title** and **Description** you configured in the Style tab.

https://prnt.sc/5u8ItQ2alvOP

## Add to order flow

| State | What the buyer sees |
|-------|-------------------|
| Default | **Add** button |
| After clicking | Loading spinner |
| Success | Button changes to **Added ✓** (disabled — cannot add again) |

Products are added to the cart via Shopify's Checkout API. Discounts are applied automatically.

## Edge cases

| Scenario | Behavior |
|----------|----------|
| No offers match conditions | Block is hidden — checkout works normally |
| Product already in cart | Hidden if "Hide items already in order" is enabled |
| Variant out of stock | Variant is disabled in the selector but product card still shows |
| Multiple offers match | All matching offers shown in priority order |
| Extension error | Checkout continues normally — offers simply don't appear |
| Guest checkout | Customer tag conditions pass automatically (fail-open) |
