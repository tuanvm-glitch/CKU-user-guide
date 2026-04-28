# How to set up

---
description: >-
  Learn how to set it up, customize it, and make the most of Order Status Page
  (OSP) Upsell feature.
---

# How to set up

### What is Order Status Page (OSP) Upsell?

The **Order Status Page Upsell (OSP Upsell)** lets you show additional product offers on the **Order Status Page** (the confirmation page customers see after checkout).

* **For merchants:** Capture more revenue by suggesting complementary items even after checkout is complete.
* **For customers:** Convenient way to add missed or related items while reviewing their order.

{% embed url="https://d2798l25hiaz3h.cloudfront.net/Jr29G3Wyyo0p.webp" %}

### Why to use this feature?

<details>

<summary><strong>Increase Average Order Value (AOV)</strong></summary>

Suggest complementary or frequently paired products that naturally fit with what the customer just bought. For example, offer a coffee grinder after someone purchases a coffee machine.

</details>

<details>

<summary>Provide Seamless Convenience</summary>

Keep customers in the same confirmation flow while giving them the option to add more items. They don’t have to browse your store again — it’s quick and feels effortless.

</details>

<details>

<summary>Boost Acceptance with Incentives</summary>

Use the free shipping badge or a countdown timer to give customers a reason to act now, making the offer more compelling without feeling pushy.

</details>

### How to set up

{% hint style="info" %}
Requirements before using

* Add the **Order Status Page Upsell block** in **Shopify Admin → Online Store → Customize Theme → Order Status Page**.
* Offers must be created in the **Offers tab** of the AOV.ai Post Purchase app.
* Only product upsells are supported. Coupons are not available here.
* No payment method restrictions apply.
{% endhint %}

**Trigger condition**

In this step, you define when your Order Status Page Upsell will appear.

#### Step 1: Enter offer details

{% stepper %}
{% step %}
Offer name

Type a name to identify your campaign. This name is for you only; customers won’t see it.
{% endstep %}

{% step %}
Discount code (optional)

Enter a code to help track or manage the offer.
{% endstep %}
{% endstepper %}

#### Step 2: Set up how the offer is shown

In this section, you need to specify the conditions for displaying the offer to customers. The upsell appears only for customers who meet the set criteria.

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
* **Delivery method** → Target by how the order is being fulfilled. Supports all methods: **Shipping**, **Local delivery**, **Store pickup**, and **Pickup point**.

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

Confirm the conditions and offer details to make sure it matches your expectation.
{% endstep %}
{% endstepper %}

#### Step 3: Adjust advanced settings

**Start date:** Select the date and time when the offer should begin.

**End date (optional):** Check the box and set a date/time if you want the offer to stop automatically.

***

#### Upsell offer

This step lets you decide **what type of offer** appears on the Thank You Page

#### Step 1: Adjust offer settings

#### After finishing **Trigger condition**, click **Next: Upsell offer**.

**Hide items already in the order**: Check this box if you don’t want to upsell items that the customer already purchased.

If left unchecked, upsells can include duplicate items.

#### Step 2: Set up Upsell offer

{% stepper %}
{% step %}
Select an upsell option

* **AI recommendation:** Automatically suggests products based on order history and trending choices.
* **Specific product:** Manually choose one or more products.
* **Specific collection:** Promote a predefined collection.
* **Most expensive in cart:** Automatically offers a discount on the highest-priced item from the customer's order. No manual product selection required.
* **Least expensive in cart:** Automatically offers a discount on the lowest-priced item from the customer's order. Useful for "add the cheapest item free" promotions.
{% endstep %}

{% step %}
Configure product discounts by clicking the pencil ✎ icon beside a product.

* After adding products, select the discount type for each item:
  * **Percentage discount** (e.g., 10% off)
  * **Fixed amount discount** (e.g., $5 off)
  * **No discount** (offer product at full price)
* In the **Upsell** dialog, choose the discount type.
* Enter the discount value (if applicable).
* Add a custom description (optional). You can replace the product’s default description with a custom message.
* Select **Save**.
{% endstep %}

{% step %}
**Check Upsell strategies help modal**

This modal helps merchants choose the right method to select upsell products based on their store’s size and order history.

* **Using upsell collection**: Best for stores with fewer than 50 orders/month.
  * Create a collection of upsell items.
  * System rotates and displays items from this collection.
* **Using AI recommendation**: Best for stores with 50+ orders/month.
  * AI analyzes past orders to suggest products often bought together.
  * Add products by clicking **AI recommendation**; set discount levels for each.
{% endstep %}

{% step %}
Preview the offer

* The **Summary** panel on the right shows how many items are included.
* Select **Preview offer** to view the upsell as it will appear to customers.
{% endstep %}
{% endstepper %}

***

#### Subscription and selling plan support

When editing a product offer, you can control how the product is sold:

| Option                | Description                                                                     |
| --------------------- | ------------------------------------------------------------------------------- |
| **One-time purchase** | Customer buys the product with a standard one-off payment.                      |
| **Subscription**      | Customer is enrolled in a recurring subscription selling plan.                  |
| **Both**              | Customer can choose between one-time and subscription at the time of the offer. |

Enable **Apply discount to subscription selling plan** to apply the configured discount to a selling plan. Select the selling plan from the dropdown.

{% hint style="info" %}
Selling plans must be configured on the product in Shopify before they appear as options here.
{% endhint %}

***

#### Personalizing header text with variables

The offer header text supports dynamic variables that are replaced with real order data at the time the offer is shown:

| Variable              | Replaced with                                          |
| --------------------- | ------------------------------------------------------ |
| `{{first_name}}`      | Customer’s first name                                  |
| `{{last_name}}`       | Customer’s last name                                   |
| `{{discount_value}}`  | Discount percentage or amount (e.g., "20%")            |
| `{{discount_amount}}` | Calculated discount amount in currency (e.g., "$5.00") |
| `{{included_taxes}}`  | Tax amount included in the order total                 |

To insert a variable, click the **{ }** button in the header text field and select the variable from the list.

***

You’ve now completed the rules (trigger conditions) so your offer shows to the right customers and chosen the product or collection you want to upsell.

With these foundations in place, your offer is ready, as it knows **when** to appear and **what** to show. The final piece is to decide **how it will look and feel for your customers.**

👉 Continue to **Set up the widget display** to customize the layout, header text, timer, and badges that bring your upsell to life on the Order Status Page.

***

#### What happens when multiple offers qualify?

If more than one Order status page upsell offer matches the same order, the app shows **only one** — the offer with the highest priority (priority **1** wins). Newly created offers are automatically placed at priority 1; you can reorder at any time from the **Offer list** page via **Manage priority**.

See [Manage offer priority](advanced-settings-manage-offer-priority.md) for the full workflow.

