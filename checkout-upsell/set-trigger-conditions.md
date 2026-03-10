# Set Trigger Conditions

Trigger conditions determine when your upsell offer is shown at checkout. You can show an offer to everyone, or only when specific conditions are met.

## No condition vs. Set conditions

- **No condition** — The offer is always shown at checkout (to all buyers, all orders)
- **Set conditions** — The offer is shown only when all selected conditions are satisfied

## Available conditions

| Condition | Options | Example |
|-----------|---------|---------|
| **Included product** | Product or variant in cart | Show offer when buyer has Product A in cart |
| **Excluded product** | Product or variant NOT in cart | Hide offer when buyer already has Product B |
| **Subtotal value** | Greater than / Less than / Equal to | Show offer when subtotal ≥ $50 |
| **Customer tag** | Has tag / Does not have tag | Show offer only to VIP customers |

## AND logic

When you add multiple conditions, **all conditions must be satisfied** for the offer to appear.

> **Example:** Subtotal ≥ $50 AND Customer tag = "vip" → offer only shows when both are true.

## Adding conditions

1. Select **Set conditions**
2. Click **+ Add 'AND' condition**
3. Choose a condition type from the dropdown
4. Set the operator and value
5. Repeat for additional conditions

To remove a condition, click the trash icon on the right of the condition row.

https://prnt.sc/rQOBfpBseH8Z

{% hint style="info" %}
**Guest checkout:** If a buyer checks out as a guest, customer tag conditions are automatically passed (fail-open) — the offer will still be shown.
{% endhint %}
