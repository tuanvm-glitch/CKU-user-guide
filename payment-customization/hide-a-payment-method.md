# Hide a Payment Method

Use this rule to remove specific payment methods from the checkout page when conditions are met.

## When to Use

- Hide Cash on Delivery (COD) for international orders
- Hide Buy Now Pay Later options for orders below a minimum value
- Hide a payment method for specific customer segments

## Setup

1. Go to **Checkout Customization** → **Payment** tab
2. Click **Create rule** → select **Hide payment method**
3. Set a **Rule name** and **Status** (Active / Inactive)
4. Configure **Trigger Conditions** (optional)
5. In the **Rule Action** section, choose what to hide:
   - **Hide all** — Remove all payment methods (use with care)
   - **Hide specific methods** — Select methods by name
   - **Show only specific methods** — Hide everything except selected methods
6. Click **Save**

{% hint style="warning" %}
Always test your rule after saving. Use a test account or Shopify's checkout preview to verify buyers can still complete their purchase.
{% endhint %}
