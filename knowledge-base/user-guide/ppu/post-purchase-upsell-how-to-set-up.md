# How to set up

---
description: >-
  Learn how to use the Post-Purchase Upsell feature of the AOV Post Purchase
  Upsell app to boost your sales and maximize AOV in this step-by-step guide.
---

# How to set up

{% hint style="success" %}
**Who can use this feature**

* Store owners and staff with permission to install and manage apps on Shopify.
* Merchants who use payment methods supported by post‑purchase offers (Credit card, PayPal, Shop Pay). For other payment providers, use **Thank you page upsell** or **Order status page upsell**.
{% endhint %}

### What is Post-purchase upsell?

The Post-Purchase Upsell feature allows you to recommend complementary products to customers after they complete their checkout. It’s an effective way to encourage additional purchases and boost your store’s Average Order Value (AOV).

### Why Post-purchase upsell?

<details>

<summary>Optimize "last-minute" purchase window</summary>

Post-purchase upselling utilizes last-minute purchase window where customers already have the momentum of a completed transaction, thereby suggesting products customers didn’t think to buy initially.

</details>

<details>

<summary>Tap into emotional buying</summary>

At checkout, customers are already in a buying mindset. Optimizing this psychological state, Post-purchase upsell creates time-sensitive deals that they can't resist.

</details>

<details>

<summary>Enhance customer shopping experience</summary>

You can offer useful product recommendations, such as suggesting specific products, applying percentage or fixed amount discounts for their purchases, etc to make the shopping more valued and engaging.

</details>

### How to set up Post-purchase upsell offer?

{% hint style="info" %}
**Requirements before using**

* Enable **AOV.ai Post Purchase Upsell** in **Shopify Admin → Settings → Checkout → Post-purchase page**.
* Store must support one of the accepted payment methods: credit card, PayPal, or Shop Pay.
* Customer must complete checkout before seeing the offer.
* Currency must match the store’s default currency.
{% endhint %}

#### Trigger Condition

#### Step 1: Select Post-purchase upsell

Navigate **Offers** in the Menu > Choose **Create new offer** > Click **Select** on **Post-purchase upsell** card.

{% embed url="https://d2798l25hiaz3h.cloudfront.net/Jr29G3Wyyo0p.webp" %}

{% hint style="info" %}
If this is your first time using the feature, you’ll need to embed the app into your post-purchase page. Follow the instructions provided in the yellow banner.
{% endhint %}

#### Step 2: Define your Offer information

{% stepper %}
{% step %}
**Offer name**

Enter a name for your campaign so that you can easily identify it later on. You customers won't see this name on the storefront.
{% endstep %}

{% step %}
(Optional) Select **Edit discount code** to customize the discount applied.
{% endstep %}
{% endstepper %}

**Step 3: Add Trigger conditions**

{% embed url="https://d2798l25hiaz3h.cloudfront.net/oVvIvtwJWYMI.webp" %}

{% stepper %}
{% step %}
Under **Trigger conditions**, choose one the trigger conditions so that your post-purchase offers can be shown:

* **Set conditions**: Target specific purchases.
* **No condition**: Show the offer to all customers.
{% endstep %}

{% step %}
If you select **Set conditions,** you can build rules using criteria:

**Product conditions**

* **Product (or variant)** → Show only if the order includes or excludes specific SKUs.
* **Collection** → Target entire collections (e.g., “Winter Skincare”).
* **Included product tags** → Show only if products have ALL specified tags (AND logic). Use this to target orders containing items with every tag you list.
* **Excluded product tags** → Hide the offer if any product in the order has one of the specified tags.

**Order conditions**

* **Total order value** → Show only if cart subtotal reaches a threshold (e.g., orders above $50).
* **Product quantity** → Trigger based on the total number of items in the order. Supports ≥, ≤, and = operators.
* **US shipping state** → Restrict offers to customers shipping to specific US states.
* **Delivery method** → Target by how the order is being fulfilled.

{% hint style="info" %}
**Post-purchase upsell delivery methods**

Post-purchase upsell only supports **Shipping** and **Store pickup**. Local delivery and Pickup point are not available for this offer type because they are not compatible with the post-purchase checkout extension.
{% endhint %}

**Customer conditions**

* **Specific customer segment** → Target Shopify segments (e.g., returning buyers).

For each condition:

* Select the **Criteria** from the dropdown.
* Choose an **operator** (Include / Exclude, or ≥ / ≤ / = for numeric fields).
* Add the product, collection, value, or state to match.
* Add more rules with **+ Add ‘AND’ condition**.
{% endstep %}

{% step %}
Review the **Summary** panel.

Confirm the conditions and note: _Offer will show after a payment is made via Credit card, PayPal or Shop Pay_.
{% endstep %}

{% step %}
Click **Preview offer** to test visibility.

{% hint style="success" %}
**Decision help**

* Start with **No condition** if you need to validate the layout and copy.
* Use **Set conditions** when the add‑on should match items in the order (accessories, refills, size‑ups).
{% endhint %}
{% endstep %}
{% endstepper %}

**Step 4: Advanced settings**

{% stepper %}
{% step %}
Open **Advanced settings**.
{% endstep %}

{% step %}
In **Active date**, pick a **Start date** and time. Use the timezone shown in the panel.
{% endstep %}

{% step %}
(Optional) Select **Set end date**, then pick the end date and time.
{% endstep %}

{% step %}
Select **Save**.
{% endstep %}
{% endstepper %}

***

#### Upsell offer

This step defines _what_ customers see after they pay. Configure each card from top to bottom.

{% embed url="https://d2798l25hiaz3h.cloudfront.net/6NYVa7Tqgsyx.webp" %}

#### Step 1: Offer settings

**Hide items already in the order** (checkbox): When enabled, any product that is already in the original order will not appear in the upsell.

#### Step 2: Set up Upsell #1

It's the first offer customers see on the post‑purchase page.

{% stepper %}
{% step %}
Choose how to add products

* **AI recommendation**: Let AOV.ai suggest products for this upsell based on your store type and goals. Review the suggestions and confirm. You can edit products later.
* **Specific product**: Pick one or more products/variants manually. Use this when you already know the best add‑on.
* **Specific collection**: Select a collection to auto‑populate from its items (ensure stock is available). Useful for dynamic or seasonal ranges.
* **Most expensive in cart**: Automatically offers a discount on the highest-priced item from the customer's current order. No manual product selection required.
* **Least expensive in cart**: Automatically offers a discount on the lowest-priced item from the customer's current order. Useful for "add the cheapest item free" promotions.
{% endstep %}

{% step %}
(Optional) Open **Need upsell strategies?**

Explore recommended tactics for your store category and objective (for example, accessory add‑on, bundle, refill). Choose a strategy to prefill suggestions, then review.
{% endstep %}
{% endstepper %}

**Step 3: (Optional) Set up Downsell (if declined)**

It is a secondary offer that appears **only when the customer declines Upsell #1**.

* Shows **after Upsell #1 is declined**; never shows when Upsell #1 is accepted.
* Respects **Offer settings → Hide items already in the order** if enabled.

{% stepper %}
{% step %}
**Turn on the toggle** in the Downsell card.

The card is off by default.
{% endstep %}

{% step %}
Select **Add product** and choose a source

* **AI recommendation** — Let AOV.ai suggest downsell items. Review and confirm.
* **Specific product** — Search and select one or more products/variants.
* **Specific collection** — Pick a collection to populate items dynamically.
* **Most expensive in cart** — Automatically targets the highest-priced item from the original order.
* **Least expensive in cart** — Automatically targets the lowest-priced item from the original order.

{% hint style="success" %}
**Best practices**

* Offer a smaller size, lower price, or fewer features than Upsell #1.
* Keep the decision easy: short copy, clear price/discount chips (**15%**, **Free shipping**).
{% endhint %}
{% endstep %}

{% step %}
After adding a product, review the product tile

* Check stock status. If you see **Out of stock**, replace the item or update inventory; OOS items won’t render.
* Use the **pencil** icon to **edit** the offer; **trash** icon to remove it.
{% endstep %}

{% step %}
In the **Downsell** edit modal

* **Discounts** — Choose a type (for example, _Percentage discount_) and set the value (for example, **15%**).
* **Shipping** — Choose how shipping is handled (for example, **Free shipping**). A chip ("Free") appears on the tile when enabled.
* **Use custom description** — Check to write a short message that replaces the product description in the widget.
* Select **Save**.
{% endstep %}

{% step %}
Use **Preview offer** in **Summary** to verify layout and logic.
{% endstep %}
{% endstepper %}

**Step 4: (Optional) Set up Upsell #2 (if accepted)**

It's a follow‑up offer that appears **only when the customer accepts Upsell #1**.

* Shows **after Upsell #1 is accepted**; never shows when Upsell #1 is declined.
* Works alongside a configured **Downsell** (each triggers based on customer action).

{% stepper %}
{% step %}
**Turn on the toggle** in the **Upsell #2** card (Off by default.)
{% endstep %}

{% step %}
Select **Add product** and choose a source

* **AI recommendation** — Use suggestions tailored to your store and goals; review and confirm.
* **Specific product** — Manually select product(s)/variant(s) that pair with Upsell #1.
* **Specific collection** — Choose a collection to draw items from.
* **Most expensive in cart** — Automatically targets the highest-priced item from the original order.
* **Least expensive in cart** — Automatically targets the lowest-priced item from the original order.
{% endstep %}

{% step %}
After adding a product, open the **edit** modal (pencil icon)

* **Discounts** — Choose discount type and set value (for example, _Percentage discount → 10%_ or _None_).
* **Shipping** — Pick shipping handling (for example, **Free shipping**) if you want to sweeten the offer.
* **Use custom description** — (Optional) Replace the product description with a focused message.
* Select **Save**.
{% endstep %}
{% endstepper %}

***

#### Subscription and selling plan support

When configuring a product offer (Upsell #1, Upsell #2, or Downsell), you can control how the product is sold:

| Option                | Description                                                                     |
| --------------------- | ------------------------------------------------------------------------------- |
| **One-time purchase** | Customer buys the product with a standard one-off payment.                      |
| **Subscription**      | Customer is enrolled in a recurring subscription selling plan.                  |
| **Both**              | Customer can choose between one-time and subscription at the time of the offer. |

To apply the discount to a subscription selling plan, enable **Apply discount to subscription selling plan** in the product edit modal and select the selling plan to use.

{% hint style="info" %}
Selling plans must be configured on the product in Shopify before they appear as options here.
{% endhint %}

***

#### Personalizing header text with variables

The offer header text supports dynamic variables that are replaced with real order data at the time the offer is shown:

| Variable             | Replaced with                               |
| -------------------- | ------------------------------------------- |
| `{{first_name}}`     | Customer’s first name                       |
| `{{last_name}}`      | Customer’s last name                        |
| `{{discount_value}}` | Discount percentage or amount (e.g., "20%") |

To insert a variable, click the **{ }** button in the header text field and select the variable from the list.

***

You’ve now learned how to set up and configure your **Post Purchase Upsell** offers. By combining these steps, you create an upsell flow that feels natural for customers and drives meaningful increases in Average Order Value.

