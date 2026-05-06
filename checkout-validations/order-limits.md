# Order Limits — How to Set Up

Set minimum and maximum limits on order value, cart quantity, or per-product rules. When a buyer's cart violates the limits, checkout is blocked with a clear error message.

{% hint style="success" %}
**Available on all Shopify plans.** Order Limits uses Shopify Functions — no Shopify Plus required.
{% endhint %}

---

## What it does

Order Limits adds checkout-time enforcement for order-shape rules. You control:

- **Limit type** — Order value, Cart quantity, Per-product quantity, or Per-product value
- **Min and/or max** — set just min, just max, or both
- **Targeting** — apply to all products or only selected products (per-product limits)
- **Error message** — custom text with `{{min}}` / `{{max}}` placeholders, shown at the position of your choice
- **Conditions** — only enforce for specific products, customer tags, countries, etc.

When the cart violates the rule, checkout is blocked and the error appears inline at the position you configured (top of page, near a field, or anywhere on the address form).

---

## Step 1: Go to Checkout Validations

In the app sidebar, click **Checkout Validations**. The list page shows all 6 validation types as cards. Find **Order limits** and click **Manage**.

{% embed url="https://d2798l25hiaz3h.cloudfront.net/hmgDyKnElA2R.webp" %}

---

## Step 2: Create an order limit rule

Click **Create rule** (top right). Tabs **All / Active / Expired / Test mode** filter rules by status.

{% embed url="https://d2798l25hiaz3h.cloudfront.net/ZYuKbkYHtyUr.webp" %}

---

## Step 3: Choose a limit type

| Limit type | What it checks | Input |
|---|---|---|
| **Order value** | Cart subtotal (after discounts) | Currency, e.g. `$50` |
| **Cart quantity** | Total items in the cart | Integer, e.g. `2` |
| **Per-product quantity** | Quantity of each product (each line individually) | Integer |
| **Per-product value** | Value of each product (qty × price, each line individually) | Currency |

{% hint style="info" %}
**Switching limit types preserves your numbers.** You can switch back and forth — only the active type's min/max is evaluated at checkout, but all values are saved.
{% endhint %}

{% embed url="https://d2798l25hiaz3h.cloudfront.net/3RbaPsjBLJqD.webp" %}

---

## Step 4: Set Minimum and Maximum

You only need **one** of min or max — set the lower bound, upper bound, or both.

| Rule | Validation |
|---|---|
| At least one of min/max | Required |
| Negative values | Not allowed |
| Min ≤ Max | Required when both are set |

**Defaults:**

| Limit type | Default min | Default max |
|---|---|---|
| Order value | `1` | `1000` |
| Cart quantity | `1` | `99` |
| Per-product quantity | `1` | `99` |
| Per-product value | `1` | `1000` |

{% embed url="https://d2798l25hiaz3h.cloudfront.net/KOasRLDEb2fM.webp" %}

---

## Step 5: (Per-product only) Choose Apply to

For **Per-product quantity** and **Per-product value**, an **Apply to** section appears:

| Option | Behavior |
|---|---|
| **All products** | Every line in the cart must satisfy the limit |
| **Selected products** | Only the chosen products are checked — pick via Shopify resource picker |

{% hint style="warning" %}
If **Selected products** is chosen, you must add at least one product — otherwise the rule will not save.
{% endhint %}

---

## Step 6: Customize the error message

Each limit type comes with a default error message. Edit freely — the system replaces `{{min}}` and `{{max}}` with your configured values at checkout (currency limits format as `$X.XX`, quantity limits format as plain numbers).

| Limit type | Min only (default) | Max only (default) | Both (default) |
|---|---|---|---|
| Order value | `Minimum order value is {{min}}. Please add more items to proceed` | `Maximum order value is {{max}}. Please reduce your cart to proceed` | `Order value must be between {{min}} and {{max}}.` |
| Cart quantity | `Minimum {{min}} items required to checkout.` | `Maximum {{max}} items allowed per order.` | `Cart must contain between {{min}} and {{max}} items.` |
| Per-product quantity | `Minimum {{min}} quantity required per product.` | `Maximum {{max}} quantity allowed per product.` | `Each product must have between {{min}} and {{max}} quantity.` |
| Per-product value | `Minimum {{min}} value required per product.` | `Maximum {{max}} value allowed per product.` | `Each product value must be between {{min}} and {{max}}.` |

{% hint style="info" %}
Switching the limit type auto-replaces the message with the matching default template. Your custom edits are preserved when you switch back.
{% endhint %}

{% embed url="https://d2798l25hiaz3h.cloudfront.net/gJ8BeuyvlWSy.webp" %}

---

## Step 7: Choose where the error appears

The **Error position** dropdown controls where the error message renders at checkout:

| Position | Where it shows |
|---|---|
| Top of the checkout page | Above all checkout content |
| First name / Last name / Company | Below the corresponding contact field |
| Address line 1 / Address line 2 / City / ZIP | Below the corresponding address field |
| Email or phone number | Below the contact field |
| Delivery phone / Country / Province / State | Below the corresponding field |

Pick the position closest to what the buyer needs to change. For order-value or cart-quantity limits, **Top of the checkout page** works best.

---

## Step 8: (Optional) Set trigger conditions

By default, the rule applies to **every checkout**. Expand **Trigger conditions** to scope it.

| Condition | Description |
|---|---|
| **Included / Excluded product** | Rule only fires when cart contains / does not contain specific products |
| **Customer tag** | Only enforce for tagged customers (e.g. `B2B`, `wholesale`) |
| **Shipping country** | Only enforce for buyers shipping to specific countries |

All conditions use **AND logic** — every condition must be true AND the limit must be violated for the error to fire.

---

## Step 9: Test in Test mode, then go live

1. Set **Status** to **Test mode**
2. Place a test checkout using email `aov@testing.com` — only this email triggers the rule
3. Verify the error appears as expected
4. Switch **Status** to **Active**
5. Click **Save**

The rule is now live for all matching checkouts.

---

## How it works at checkout

1. Buyer fills checkout and clicks **Pay now**
2. Shopify runs the AOV.AI cart-validation function at the **Checkout completion** step
3. Function evaluates: trigger conditions match? AND limit is violated?
4. If both true → checkout is blocked, your error message displays at the configured position
5. Buyer adjusts cart → re-attempts → succeeds when the cart satisfies the rule

{% hint style="info" %}
**Per-product limits filter cart lines.** When **Apply to = Selected products**, only the chosen products are evaluated. Other lines pass through untouched.
{% endhint %}

---

## FAQ

**Q: Can I have multiple order-limit rules?**
A: Yes. Each rule is independent — for example, one rule for min order $50, another for max 10 units per product. All rules run at checkout and any violation blocks the order.

**Q: Does this work with Apple Pay / Google Pay / Shop Pay?**
A: Yes — the validation runs at the **Checkout completion** step, which fires for accelerated checkouts as well.

**Q: What happens if the app errors out?**
A: Checkout is blocked when **Block on failure** is ON (recommended). When OFF, the order is allowed through if our function fails.

**Q: Why does the price in `{{min}}` show without my currency symbol?**
A: For **Order value** and **Per-product value**, `{{min}}` and `{{max}}` are formatted as currency automatically (e.g. `$50.00`). For **Cart quantity** and **Per-product quantity**, they format as plain numbers (e.g. `2`).

**Q: Can buyers see the limit before checkout?**
A: No — Order Limits enforces at checkout completion only. To inform buyers earlier, communicate the limit on the product page or cart page.

**Q: Does this require Shopify Plus?**
A: No. Order Limits uses **Shopify Cart Validation Functions**, which are available on all Shopify plans.
