# Checkout Upsell Block — Common Issues

## Offer not showing at checkout

**Possible causes:**

1. **Block not activated** — Go to Shopify Admin → Themes → Customize → Checkout, and add the AOV.AI block. The app shows a yellow warning banner if this step is missing.
2. **Store not on Shopify Plus** — This feature requires Shopify Plus.
3. **Offer status is Draft** — Open the offer and set it to Active.
4. **Trigger conditions not matched** — Review the conditions in Step 1. The buyer's cart may not satisfy all conditions.
5. **Start date in the future** — Check the Active date in the Settings tab.

---

## Discount not applied to added product

**Possible causes:**

1. **Discount combinations disabled** — In the Settings tab, check the **Discount combinations** options. If the buyer has another active discount, stacking may be blocked.
2. **Discount sync delay** — After saving a new offer, allow a few seconds for the discount to sync to Shopify.

---

## Product not appearing in upsell block

**Possible causes:**

1. **"Hide items already in order" is enabled** — The product is already in the buyer's cart. Disable this setting if you want to show it regardless.
2. **Variant unavailable** — The selected variant is out of stock. Out-of-stock variants are disabled in the selector but the product card still appears.
3. **Product removed from Shopify** — The product no longer exists. Remove it from the offer and re-add.

---

## Offer appears in the wrong position

The position of the upsell block is controlled by your Shopify theme, not the app. Go to **Shopify Admin → Themes → Customize → Checkout** and drag the AOV.AI block to your preferred location.
