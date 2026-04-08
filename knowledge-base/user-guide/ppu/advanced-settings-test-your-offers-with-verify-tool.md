# Test Your Offers with Verify Tool

---
description: >-
  Learn how to test and preview your offers using the Verify tool. Make sure
  your upsells display correctly to customers before going live.
hidden: true
---

# Test Your Offers with Verify Tool

{% hint style="warning" %}
**Feature temporarily unavailable**

The Verify Tool is currently unavailable due to stability issues. We are working on improving this feature and will re-enable it in a future update.

In the meantime, you can test your offers by placing a real test order or using Shopify's Bogus Payment Gateway. See the testing methods below.
{% endhint %}

## Testing your offers (alternative methods)

### Real order test (recommended)

Place a real order with a minimum of **$0.50 USD**. This is the most reliable way to test as it uses actual payment processing.

**Tip:** Create a test product priced at $1.00 for testing purposes.

### Bogus Payment test

Use Shopify's Bogus Payment Gateway for testing without real charges:

1. Go to Shopify Admin → Settings → Payments
2. Enable the Bogus Gateway
3. Use test credit card details to complete checkout

> **Note:** Some post-purchase features require real payment processors (credit card, PayPal, or Shop Pay) and may not work with the Bogus Gateway.

## After testing

Go to the **Order Tracker** to verify:

* Whether the offer was **Shown** to the customer
* Whether the offer was **Accepted** or **Declined**
* Revenue and order details

## Troubleshooting

| Issue                 | Solution                                                                             |
| --------------------- | ------------------------------------------------------------------------------------ |
| Offer doesn't appear  | Check that the app is activated in Shopify checkout settings and the offer is Active |
| Wrong offer shows     | Review your trigger conditions — the order may be matching a different offer         |
| No products available | Ensure upsell products are in stock and published                                    |
| Payment not supported | Post-purchase offers require Credit card, PayPal, or Shop Pay                        |
