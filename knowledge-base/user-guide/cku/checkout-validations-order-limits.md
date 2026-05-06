# Order Limits

Set minimum and maximum limits on order value, cart quantity, or per-product rules. When a buyer's cart violates the limits, checkout is blocked with a clear error message.

{% hint style="success" %}
**Available on all Shopify plans.** Order Limits uses Shopify Functions — no Shopify Plus required.
{% endhint %}

***

## What it does

Order Limits adds checkout-time enforcement for order-shape rules. You control:

- **Limit type** — Order value, Cart quantity, Per-product quantity, or Per-product value
- **Min and/or max** — set just min, just max, or both
- **Targeting** — apply to all products or only selected products (per-product limits)
- **Error message** — custom text with `{{min}}` / `{{max}}` placeholders, shown at the position of your choice
- **Conditions** — only enforce for specific products, customer tags, countries, etc.

## Step 1: Go to Checkout Validations

In the app sidebar, click **Checkout Validations**. List page shows 6 validation type cards. Find **Order limits** and click **Manage**.

{% embed url="https://d2798l25hiaz3h.cloudfront.net/hmgDyKnElA2R.webp" %}

## Step 2: Create an order limit rule

Click **Create rule** (top right). Tabs filter rules by status (All / Active / Expired / Test mode).

{% embed url="https://d2798l25hiaz3h.cloudfront.net/ZYuKbkYHtyUr.webp" %}

## Step 3: Choose a limit type

| Limit type | What it checks | Input |
|---|---|---|
| **Order value** | Cart subtotal | Currency, e.g. `$50` |
| **Cart quantity** | Total items in the cart | Integer |
| **Per-product quantity** | Quantity of each product (each line) | Integer |
| **Per-product value** | Value of each product (qty × price) | Currency |

{% embed url="https://d2798l25hiaz3h.cloudfront.net/3RbaPsjBLJqD.webp" %}

## Step 4: Set Minimum and Maximum

You only need **one** of min or max. Validation: no negatives, min ≤ max.

Defaults — Order value: 1–1000, Cart qty: 1–99, Per-product qty: 1–99, Per-product value: 1–1000.

{% embed url="https://d2798l25hiaz3h.cloudfront.net/KOasRLDEb2fM.webp" %}

## Step 5: (Per-product only) Apply to

| Option | Behavior |
|---|---|
| **All products** | Every line in the cart is checked |
| **Selected products** | Only the chosen products are checked (Shopify resource picker) |

## Step 6: Customize the error message

Each limit type has a default. Edit freely — `{{min}}` and `{{max}}` are replaced at checkout (currency types format as `$X.XX`, quantity types as plain numbers).

{% embed url="https://d2798l25hiaz3h.cloudfront.net/gJ8BeuyvlWSy.webp" %}

## Step 7: Choose where the error appears

12 positions: Top of page, First name, Last name, Company, Address line 1/2, City, ZIP, Country, Province, Email or phone, Delivery phone.

## Step 8: (Optional) Trigger conditions

Scope the rule by Included / Excluded product, Customer tag, Shipping country. Conditions use AND logic.

## Step 9: Test, then go live

Set Status to **Test mode** → checkout with email `aov@testing.com` → verify → switch to **Active** → Save.

## How it works at checkout

The AOV.AI cart-validation function runs at the **Checkout completion** step. Both trigger conditions AND the limit must be violated for the error to fire.

## FAQ

**Q: Multiple order-limit rules?** Yes — each is independent.
**Q: Works with Apple/Google/Shop Pay?** Yes — runs at Checkout completion.
**Q: What if the app errors?** Checkout is blocked when **Block on failure** is ON.
**Q: Currency formatting?** Order value / Per-product value format `{{min}}` / `{{max}}` as currency. Quantity types format as plain numbers.
**Q: Buyers see the limit before checkout?** No — enforcement is at checkout completion only.
**Q: Shopify Plus required?** No — uses Shopify Cart Validation Functions, available on all plans.
