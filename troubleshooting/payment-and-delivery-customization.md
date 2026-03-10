# Payment & Delivery Customization — Common Issues

## Rule not applying at checkout

**Possible causes:**

1. **Rule status is Inactive** — Open the rule and set Status to **Active**, then save.
2. **Trigger conditions not matched** — The buyer's cart does not satisfy all conditions. Try temporarily setting the rule to **No condition** to confirm the rule itself works.
3. **Method name mismatch (Rename / Reorder)** — The original method name must match exactly as it appears in Shopify. Check capitalization and spacing.

---

## Payment or delivery method still visible after hiding

**Possible causes:**

1. **Multiple rules conflicting** — Another active rule may be overriding your hide rule. Review all active rules for the same method.
2. **Cache** — Shopify Functions may take a moment to apply. Refresh the checkout page or test in a new incognito session.

---

## Renamed method showing original name

The **Original name** in your rename rule must exactly match the method name as configured in Shopify Payments or Shopify Shipping. Even a minor difference (extra space, different capitalization) will prevent the match.

To find the exact name:
- For payment methods: **Shopify Admin → Settings → Payments**
- For delivery methods: **Shopify Admin → Settings → Shipping and delivery**

---

## Testing rules without affecting real customers

Use the email address **aov@testing.com** at checkout. This lets you test rules and conditions without impacting live buyers.
