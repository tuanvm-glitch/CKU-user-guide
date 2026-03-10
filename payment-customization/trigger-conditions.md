# Trigger Conditions — Payment Customization

Trigger conditions let you apply a payment rule only when specific criteria are met. All rule types (Hide, Rename, Reorder) support the same conditions.

## No condition vs. Set conditions

- **No condition** — The rule applies to every buyer at checkout
- **Set conditions** — The rule applies only when all selected conditions are satisfied

## Available conditions

| Condition | Options | Example |
|-----------|---------|---------|
| **Included product** | Product or variant is in cart | Apply rule only when buyer has Product A |
| **Excluded product** | Product or variant is NOT in cart | Apply rule when buyer does not have Product B |
| **Subtotal value** | Greater than / Less than / Equal to | Apply rule when cart total ≥ $100 |
| **Customer tag** | Has tag / Does not have tag | Apply rule only for wholesale customers |

## AND logic

When you add multiple conditions, **all must be true** for the rule to apply.

> **Example:** Subtotal ≥ $200 AND Customer tag = "wholesale" → rule applies only when both are satisfied.

## Adding conditions

1. In the rule editor, select **Set conditions**
2. Click **+ Add 'AND' condition**
3. Choose a condition type, set the operator and value
4. Repeat as needed — click the trash icon to remove a condition

{% hint style="info" %}
**Guest checkout:** Customer tag conditions are skipped for guest buyers (fail-open) — the rule still applies.
{% endhint %}
