# How to set up

---
description: >-
  Learn how to use the Thank you page upsell feature to boost customer
  engagement and increase sales.
---

# How to set up

### What is Thank you page upsell?

Thank you page upsell feature allows you to present additional offers to customers on the offer confirmation (thank you) page. This will help to engage with customers post purchase and encourage them to take advantage of exclusive deals.

{% embed url="https://d2798l25hiaz3h.cloudfront.net/Jr29G3Wyyo0p.webp" %}

### Why to use Thank you page upsell?

<details>

<summary>Maximize Post-purchase opportunities</summary>

The thank you page is often underutilized. By presenting targeted upsell offers here, you can maximize every transaction and increase your Average Order Value (AOV).

</details>

<details>

<summary>Encourage customer engagement</summary>

Offering discounts or exclusive products keeps customers engaged with your brand next times and fosters loyalty.

</details>

<details>

<summary>Seamless customer journey</summary>

Thank You Page Upsells feel natural and non-intrusive, blending into the customer’s post-purchase experience.

</details>

### How to set up Thank you page upsell?

{% hint style="info" %}
#### Requirements before using

* Add the **Thank You Page Upsell block** in **Shopify Admin → Online Store → Customize Theme → Thank You Page**.
* Offers must be created in the **Offers tab** of the AOV.ai Post Purchase app.
* No payment restrictions (unlike Post Purchase Upsells).
{% endhint %}

#### Trigger condition

#### Step 1: Access Thank you page upsell feature

Navigate to the **Offers** section in the menu > Select **Thank you page upsell** to create a new offer.

#### Step 2: Define your Offer information

{% stepper %}
{% step %}
**Offer name**

Enter a name for your campaign so that you can easily identify it later on. You customers won't see this name on the storefront.
{% endstep %}

{% step %}
**Discount code (optional)**

Edit the **discount code** if you’re creating a coupon offer.
{% endstep %}
{% endstepper %}

#### Step 3: Fill in Trigger conditions

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

{% step %}
Add multiple conditions using **AND** logic if needed.
{% endstep %}
{% endstepper %}

**Step 4: Advanced settings**.

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

#### Step 1: Adjust offer settings

#### After finishing **Trigger condition**, click **Next: Upsell offer**.

**Hide items already in the order**: Check this box if you don’t want to upsell items that the customer already purchased.

If left unchecked, upsells can include duplicate items.

#### Step 2: Set up Upsell offer

**Option A: Product Upsell**

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

**Option B: Coupon Upsell:** Enable this if you prefer to give a discount instead of a product.

{% stepper %}
{% step %}
Toggle **Offer coupon** on.
{% endstep %}

{% step %}
In **Discount settings**, configure the coupon:

* **Percentage discount** (e.g., 10% off).
* **Fixed amount discount** (e.g., $10 off).
{% endstep %}

{% step %}
Under **Discount combinations**, allow or restrict stacking with:

* Product discounts
* Order discounts
* Shipping discounts
{% endstep %}
{% endstepper %}

(Optional) Configure subscription selling plan

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

Click **Save** to finalize your upsell.

Ensure the offer is active and properly embedded on your thank you page.

***

#### Personalizing header text with variables

The offer header text supports dynamic variables that are replaced with real order data at the time the offer is shown:

| Variable              | Replaced with                                          |
| --------------------- | ------------------------------------------------------ |
| `{{first_name}}`      | Customer's first name                                  |
| `{{last_name}}`       | Customer's last name                                   |
| `{{discount_value}}`  | Discount percentage or amount (e.g., "20%")            |
| `{{discount_amount}}` | Calculated discount amount in currency (e.g., "$5.00") |
| `{{included_taxes}}`  | Tax amount included in the order total                 |

To insert a variable, click the **{ }** button in the header or coupon title text field and select the variable from the list.

