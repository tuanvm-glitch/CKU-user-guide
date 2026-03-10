# Trigger Conditions — Delivery Customization

Trigger conditions let you apply a delivery rule only when specific criteria are met. All rule types (Hide, Rename, Reorder) support the same conditions.

## No condition vs. Set conditions

- **No condition** — The rule applies to every buyer at checkout
- **Set conditions** — The rule applies only when all selected conditions are satisfied

## Available conditions

| Condition | Options | Example |
|-----------|---------|---------|
| **Included product** | Product or variant is in cart | Hide express shipping when buyer has a fragile item |
| **Excluded product** | Product or variant is NOT in cart | Apply rule when a specific product is not in cart |
| **Subtotal value** | Greater than / Less than / Equal to | Show free shipping only when cart total ≥ $50 |
| **Customer tag** | Has tag / Does not have tag | Show local delivery only for local-pickup-eligible customers |

## AND logic

When you add multiple conditions, **all must be true** for the rule to apply.

> **Example:** Included product = "Digital Download" AND Subtotal ≤ $100 → rule applies only when both are satisfied.

## Adding conditions

1. In the rule editor, select **Set conditions**
2. Click **+ Add 'AND' condition**
3. Choose a condition type, set the operator and value
4. Repeat as needed — click the trash icon to remove a condition

{% hint style="info" %}
**Guest checkout:** Customer tag conditions are skipped for guest buyers (fail-open) — the rule still applies.
{% endhint %}
